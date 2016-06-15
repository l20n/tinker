const L20nDemo = (function() {

  let _getState;
  let _connected;
  let _registered;

  function emit(action, data) {
    document.dispatchEvent(
      new CustomEvent('mozL20nDemo', {
        bubbles: true,
        detail: {
          action: action,
          data: data || {},
        }
      })
    );
  }

  function debounce(fn) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), 250);
    };
  }

  function roundtrip(msg, resp, state) {
    return new Promise((resolve, reject) => {

      function onResponse(evt) {
        if (evt.detail.action === resp) {
          clearTimeout(t);
          window.removeEventListener('mozL20nDemoResponse', onResponse);
          resolve();
        }
      }

      const t = setTimeout(() => {
        window.removeEventListener('mozL20nDemoResponse', onResponse);
        reject();
      }, 15000);

      window.addEventListener('mozL20nDemoResponse', onResponse);

      emit(msg, state);
    });
  }

  function attachEditorHandlers() {
    const source = ace.edit("source");
    const incr = () => emit('update', _getState());
    source.getSession().on('change', debounce(incr));
  }

  function register(state) {
    return _connected.then(
      () => roundtrip('register', 'registered', state)
    ).then(
      attachEditorHandlers
    );
  }

  function update(state) {
    return roundtrip('update', 'updated', state);
  }

  return {
    init(getState) {
      _getState = getState;
      return _connected = roundtrip('helo', 'ehlo');
    },

    register(state) {
      _registered = register();
    },

    update() {
      const state = _getState();

      if (!state.demo) {
        return Promise.reject();
      }

      return (_registered || this.register(state)).then(
        () => update(state)
      );
    },
  };

})();
