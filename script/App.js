const app = () => {
  return {
    step: 1,
  };
};

const select = (config) => {
  return {
    data: config.data,
    focusedOptionIndex: null,
    name: config.name,
    open: false,
    options: {},
    placeholder: config.placeholder ?? "Seleccione una opción",
    value: config.value,

    closeListbox: function () {
      this.open = false;
      this.focusedOptionIndex = null;
    },

    init: function () {
      this.options = this.data;
      if (!(this.value in this.options)) this.value = null;
    },

    selectOption: function () {
      if (!this.open) return this.toggleListboxVisibility();
      this.value = Object.keys(this.options)[this.focusedOptionIndex];
      this.closeListbox();
    },

    toggleListboxVisibility: function () {
      if (this.open) return this.closeListbox();
      this.focusedOptionIndex = Object.keys(this.options).indexOf(this.value);
      if (this.focusedOptionIndex < 0) this.focusedOptionIndex = 0;
      this.open = true;
    },
  };
};
