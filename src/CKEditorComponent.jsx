import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CKEditorComponent() {
  const [content, setContent] = useState('');

  /**
   * @param {*} data
   * return html data 
   */
  const setContentEditor = (data) => {
    /* si on utilise bootstrap */
    data = data.split('<table>').join('<table class="table table-bordered">')

    setContent(data);
  }
  
  const handleSave = () => {
    console.log(content)
  }

  return (
    <div>
      <h1>Editeur de texte</h1>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContentEditor(data)
        }}
      />
      <button className="btn btn-primary" onClick={handleSave}>Sauveguarder</button>
      <hr/>
      <h2>Contenu :</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default CKEditorComponent;
