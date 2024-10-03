import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
        });

        this.editor.addHook('change', () => {
            const content = this.editor.getMarkdown();
            this.props.onContentChange(content);
        });
    }

    render() {
        return <div ref={this.editorRef} />;
    }
}

export default MarkdownEditor;
// END
