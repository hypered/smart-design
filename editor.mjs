import {EditorState} from "@codemirror/state"
import {EditorView, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

let startState = EditorState.create({
  doc: "Hello.",
  extensions: [
    keymap.of(defaultKeymap),
    lineNumbers()
  ]
})

let view = new EditorView({
  state: startState,
  parent: document.querySelector("#editor")
})
