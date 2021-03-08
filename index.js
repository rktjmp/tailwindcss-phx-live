const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({e, addVariant}) {
  variants_events = [
    ["phx-click", "phx-click-loading"],
    ["phx-change", "phx-change-loading"],
    ["phx-submit", "phx-submit-loading"],
    ["phx-focus", "phx-focus-loading"],
    ["phx-blur", "phx-blur-loading"],
    ["phx-keydown", "phx-keydown-loading"],
    ["phx-keyup", "phx-keyup-loading"],
    ["phx-connected", "phx-connected"],
    ["phx-disconnected", "phx-disconnected"],
    ["phx-error", "phx-error"],
  ]

  for (let [variant_name, phx_event_class] of variants_events) {
    addVariant(variant_name, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return [
          `.${phx_event_class} .${e(`${variant_name}${separator}${className}`)}`,
          `.${phx_event_class}.${e(`${variant_name}${separator}${className}`)}`
        ]
      })
    })
  }
})
