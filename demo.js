const L20nDemo = (function() {

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

  function roundtrip(msg, resp) {
    return new Promise((resolve, reject) => {

      function onResponse(evt) {
        switch(evt.detail.action) {
          case resp: {
            clearTimeout(t);
            window.removeEventListener('mozL20nDemoResponse', onResponse);
            resolve();
            break;
          }
        }
      }

      const t = setTimeout(() => {
        window.removeEventListener('mozL20nDemoResponse', onResponse);
        reject();
      }, 15000);

      window.addEventListener('mozL20nDemoResponse', onResponse);

      emit(msg);
    });
  }

  return {
    init(getState) {
      this.getState = getState;
      this.connected = roundtrip('helo', 'ehlo');
    },

    register() {
      this.registered = this.connected.then(
        () => roundtrip('register', 'registered')
      ).then(() => {
        const source = ace.edit("source");
        const incr = () => emit('update', this.getState());
        source.getSession().on('change', debounce(incr));
      });
    },

    update() {
      const state = this.getState();
      if (!state.demo) {
        return false;
      }

      if (!this.registered) {
        this.register();
      }

      this.registered.then(
        () => emit('update', state)
      );
    },
  };

})();
