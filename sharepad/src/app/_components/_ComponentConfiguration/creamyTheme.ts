import { EditorView } from "@uiw/react-codemirror";
export const creamyTheme = EditorView.theme({
  "&": {
    backgroundColor: "#fff8e1",
    color: "#333",
    //height: "100%",
    fontFamily: "Fira Code, monospace",
    fontSize: "16px",
  },
  ".cm-content": {
    caretColor: "#ff5722",
  },
  ".cm-gutters": {
    backgroundColor: "#fff8e1", 
    color: "#999",             
    border: "none",
  },
  ".cm-cursor": {
    borderLeft: "2px solid #ff5722",
  },
  ".cm-line": {
    padding: "0 4px",
  },
});