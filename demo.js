const L20nDemo = (function() {

  let _getState;
  let _connected;
  let _registered;

  function emit(action, requestId, data) {
    document.dispatchEvent(
      new CustomEvent('mozL20nDemo', {
        bubbles: true,
        detail: {
          action, requestId, data: data || {},
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

  function roundtrip(msg, state) {
    const reqId = Math.random().toString(36).replace(/[^a-z]+/g, '');

    return new Promise((resolve, reject) => {
      function onResponse(evt) {
        if (evt.detail.requestId === reqId) {
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

      emit(msg, reqId, state);
    });
  }

  function attachEditorHandlers() {
    const source = ace.edit("source");
    const incr = () => emit('update', null, _getState());
    source.getSession().on('change', debounce(incr));
  }

  function register(state) {
    return _connected.then(
      () => roundtrip('register', state)
    ).then(
      attachEditorHandlers
    );
  }

  function update(state) {
    return roundtrip('update', state);
  }

  return {
    init(getState) {
      _getState = getState;
      return _connected = roundtrip('helo');
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
