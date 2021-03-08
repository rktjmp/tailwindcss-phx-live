const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({e, addVariant}) {
  events_classes = [
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

  for (let [event, cls] of events_classes) {
    addVariant(event, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return [
          `.${cls} .${e(`${event}${separator}${className}`)}`,
          `.${cls}.${e(`${event}${separator}${className}`)}`
        ]
      })
    })
  }
})
