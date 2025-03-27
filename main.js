import { Alignment } from '@ckeditor/ckeditor5-alignment/dist/index';
import '@ckeditor/ckeditor5-alignment/dist/index.css';

import { Autosave } from '@ckeditor/ckeditor5-autosave/dist/index';
import '@ckeditor/ckeditor5-autosave/dist/index.css';

import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles/dist/index';
import '@ckeditor/ckeditor5-basic-styles/dist/index.css';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic/dist/index';

// Import the core styles.
import '@ckeditor/ckeditor5-theme-lark/dist/index.css';
import '@ckeditor/ckeditor5-clipboard/dist/index.css';
import '@ckeditor/ckeditor5-core/dist/index.css';
import '@ckeditor/ckeditor5-engine/dist/index.css';
import '@ckeditor/ckeditor5-enter/dist/index.css';
import '@ckeditor/ckeditor5-paragraph/dist/index.css';
import '@ckeditor/ckeditor5-select-all/dist/index.css';
import '@ckeditor/ckeditor5-typing/dist/index.css';
import '@ckeditor/ckeditor5-ui/dist/index.css';
import '@ckeditor/ckeditor5-undo/dist/index.css';
import '@ckeditor/ckeditor5-upload/dist/index.css';
import '@ckeditor/ckeditor5-utils/dist/index.css';
import '@ckeditor/ckeditor5-watchdog/dist/index.css';
import '@ckeditor/ckeditor5-widget/dist/index.css';

import { Essentials } from '@ckeditor/ckeditor5-essentials/dist/index';
import '@ckeditor/ckeditor5-essentials/dist/index.css';

import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace/dist/index';
import '@ckeditor/ckeditor5-find-and-replace/dist/index.css';

import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font/dist/index';
import '@ckeditor/ckeditor5-font/dist/index.css';

import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support/dist/index';
import '@ckeditor/ckeditor5-html-support/dist/index.css';

import {
  AutoImage,
  ImageBlock,
  ImageCaption,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload
} from '@ckeditor/ckeditor5-image/dist/index';
import '@ckeditor/ckeditor5-image/dist/index.css';

import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent/dist/index';
import '@ckeditor/ckeditor5-indent/dist/index.css';

import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link/dist/index';
import '@ckeditor/ckeditor5-link/dist/index.css';

import { List } from '@ckeditor/ckeditor5-list/dist/index';
import '@ckeditor/ckeditor5-list/dist/index.css';

import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed/dist/index';
import '@ckeditor/ckeditor5-media-embed/dist/index.css';

import { Paragraph } from '@ckeditor/ckeditor5-paragraph/dist/index';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office/dist/index';
import '@ckeditor/ckeditor5-paste-from-office/dist/index.css';

import { SelectAll } from '@ckeditor/ckeditor5-select-all/dist/index';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing/dist/index';
import '@ckeditor/ckeditor5-source-editing/dist/index.css';

import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar
} from '@ckeditor/ckeditor5-table/dist/index';
import '@ckeditor/ckeditor5-table/dist/index.css';

import { AccessibilityHelp, BalloonToolbar } from '@ckeditor/ckeditor5-ui/dist/index';

import { Undo } from '@ckeditor/ckeditor5-undo/dist/index';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload/dist/index';
// noinspection NpmUsedModulesInstalled
import translations from 'ckeditor5/translations/ko';

const editorConfig = {
  licenseKey: 'GPL',
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'fontSize',
      'fontFamily',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'link',
      'insertImage',
      'mediaEmbed',
      'insertTable',
      '|',
      'alignment',
      '|',
      'bulletedList',
      'numberedList',
      'outdent',
      'indent',
      '|',
      'findAndReplace',
      'sourceEditing',
    ],
    shouldNotGroupWhenFull: false
  },
  plugins: [
    AccessibilityHelp,
    Alignment,
    AutoImage,
    AutoLink,
    Autosave,
    BalloonToolbar,
    Bold,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    ImageBlock,
    ImageCaption,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    SelectAll,
    SimpleUploadAdapter,
    SourceEditing,
    Strikethrough,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    Underline,
    Undo,
    WebbizzUploadAdapterPlugin
  ],
  balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
  mediaEmbed: {
    providers: [
      {
        name: 'youtube',
        url: [
          /^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)(?:&t=(\d+))?/,
          /^(?:m\.)?youtube\.com\/shorts\/([\w-]+)(?:\?t=(\d+))?/,
          /^(?:m\.)?youtube\.com\/v\/([\w-]+)(?:\?t=(\d+))?/,
          /^youtube\.com\/embed\/([\w-]+)(?:\?start=(\d+))?/,
          /^youtu\.be\/([\w-]+)(?:\?t=(\d+))?/
        ],
        html: match => {
          const id = match[ 1 ];
          const time = match[ 2 ];

          return (
              '<div style="position: relative; height: 0; padding-bottom: 56.2493%;">' +
                `<iframe src="https://www.youtube.com/embed/${id}${time ? `?start=${time}` : ''}"` +
                  'title="YouTube video player" ' +
                  'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0" frameborder="0" ' +
                  'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
                  'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' +
              '</div>'
          );
        }
      },
    ],
    previewsInData: true
  },
  fontFamily: {
    supportAllValues: true
  },
  fontSize: {
    options: [10, 12, 14, 'default', 18, 20, 22],
    supportAllValues: true
  },
  htmlSupport: {
    allow: [
      {
        name: /^.*$/,
        styles: true,
        attributes: true,
        classes: true
      }
    ]
  },
  image: {
    toolbar: [
      'toggleImageCaption',
      'imageTextAlternative',
      '|',
      'imageStyle:alignBlockLeft',
      'imageStyle:block',
      'imageStyle:alignBlockRight',
      '|',
      'resizeImage'
    ],
    styles: {
      options: ['alignBlockLeft', 'block', 'alignBlockRight']
    }
  },
  language: 'ko',
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file'
        }
      }
    }
  },
  table: {
    contentToolbar: ['toggleTableCaption', 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
  },
  translations: [translations]
};

class WebbizzUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(file => new Promise((resolve, reject) => {
      this._initRequest();
      this._initListeners(resolve, reject, file);
      this._sendRequest(file);
    }))
  }

  abort() {
    if (this.xhr) this.xhr.abort();
  }

  _initRequest() {
    const xhr = this.xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/v1/attachment', true);
    xhr.responseType = 'json';
  }

  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `파일 업로드에 실패했습니다: ${file.name}`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const response = xhr.response;
      if (!response || response.status !== 200)
        return reject(response.message ? response.message : genericErrorText);

      resolve({ default: `/api/v1/attachment/${response.data[0].uuid}`, alt: file.name })
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded
        }
      });
    }
  }

  _sendRequest(file) {
    const data = new FormData();
    data.append('files', file);
    data.append('source', 'editor');
    this.xhr.send(data);
  }
}

function WebbizzUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = loader => {
    return new WebbizzUploadAdapter(loader);
  }
  editor.plugins.get('ImageUploadEditing').on('uploadComplete', (evt, { data, imageElement }) => {
    editor.model.change(writer => writer.setAttribute('alt', data.alt, imageElement));
  });
  editor.plugins.get('MediaEmbedElementSupport').on('change:isEnabled', (eventInfo, name, value, oldValue) => {
    console.log(eventInfo, name, value, oldValue);
  });
}

window.ClassicEditor = ClassicEditor;
window.CKEDITOR_CONFIG = editorConfig;
window.EditorInstance = [];
Array.from(document.querySelectorAll('.ck-editor')).forEach(editor => {
  ClassicEditor.create(editor, editorConfig).then(editor => window.EditorInstance.push(editor));
});
