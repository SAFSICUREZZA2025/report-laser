/**
 * @licstart Di seguito è riportato l'intero avviso di licenza per il
 * Codice JavaScript in questa pagina
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Concesso in licenza secondo i termini della licenza Apache, versione 2.0 (la "Licenza");
 * Non è possibile utilizzare questo file se non in conformità con la licenza.
 * È possibile ottenere una copia della licenza presso
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Salvo quanto richiesto dalla legge applicabile o concordato per iscritto, il software
 * distribuito sotto la licenza è distribuito "COSÌ COM'È",
 * SENZA GARANZIE O CONDIZIONI DI ALCUN TIPO, esplicite o implicite.
 * Consultare la Licenza per la lingua specifica che regola i permessi e
 * limitazioni previste dalla Licenza.
 *
 * @licend Quanto sopra è l'intero avviso di licenza per il
 * Codice JavaScript in questa pagina
 */

(funzione webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		modulo.esportazioni = root.pdfjsLib = factory();
	altrimenti se(tipo di definizione === 'funzione' && definisci.amd)
		define("pdfjs-dist/build/pdf", [], () => { return (root.pdfjsLib = factory()); });
	altrimenti se(tipo di esportazioni === 'oggetto')
		esportazioni["pdfjs-dist/build/pdf"] = root.pdfjsLib = factory();
	altro
		root["pdfjs-dist/build/pdf"] = root.pdfjsLib = factory();
})(globaleQuesto, () => {
restituisci /******/ (() => { // webpackBootstrap
/******/ "usa rigoroso";
/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.VerbosityLevel = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.RenderingIntentFlag = exports.PromiseCapability = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.PageActionEventType = exports.OPS = exports.MissingPDFException = exports.MAX_IMAGE_SIZE_TO_CACHE = exports.LINE_FACTOR = exports.LINE_DESCENT_FACTOR = exports.InvalidPDFException = exports.ImageKind = exports.IDENTITY_MATRIX = exports.FormatError = exports.FeatureTest = exports.FONT_IDENTITY_MATRIX = exports.DocumentActionEventType = exports.CMapCompressionType = exports.BaseException = exports.BASELINE_FACTOR = exports.AnnotationType = exports.AnnotationReplyType = exports.AnnotationPrefix = exports.AnnotationMode = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationEditorType = exports.AnnotationEditorPrefix = exports.AnnotationEditorParamsType = exports.AnnotationBorderStyleType = exports.AnnotationActionEventType = exports.AbortException = void 0;
esportazioni.asserzione = asserzione;
esportazioni.bytesToString = bytesToString;
esportazioni.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.getModificationDate = getModificationDate;
esportazioni.getUuid = getUuid;
esportazioni.getVerbosityLevel = getVerbosityLevel;
exports.info = informazioni;
esportazioni.isArrayBuffer = isArrayBuffer;
esportazioni.isArrayEqual = isArrayEqual;
esportazioni.isNodeJS = void 0;
esportazioni.normalizeUnicode = normalizeUnicode;
esportazioni.objectFromMap = objectFromMap;
esportazioni.objectSize = objectSize;
esportazioni.setVerbosityLevel = setVerbosityLevel;
esportazioni.ombra = ombra;
esportazioni.string32 = string32;
esportazioni.stringToBytes = stringToBytes;
esportazioni.stringToPDFString = stringToPDFString;
esportazioni.stringToUTF8String = stringToUTF8String;
exports.unreachable = irraggiungibile;
esportazioni.utf8StringToString = utf8StringToString;
exports.warn = avvisa;
const isNodeJS = typeof process === "oggetto" && processo + "" === "[oggetto processo]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
esportazioni.isNodeJS = isNodeJS;
const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
esportazioni.IDENTITY_MATRIX = IDENTITY_MATRIX;
const FONT_IDENTITY_MATRIX = [0,001, 0, 0, 0,001, 0, 0];
esportazioni.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
const MAX_IMAGE_SIZE_TO_CACHE = 10e6;
esportazioni.MAX_IMAGE_SIZE_TO_CACHE = MAX_IMAGE_SIZE_TO_CACHE;
const LINE_FACTOR = 1.35;
esportazioni.LINE_FACTOR = LINE_FACTOR;
const FATTORE_DI_discesa_LINEA = 0,35;
esportazioni.LINE_DESCENT_FACTOR = LINE_DESCENT_FACTOR;
const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
esportazioni.BASELINE_FACTOR = BASELINE_FACTOR;
const RenderingIntentFlag = {
  QUALSIASI: 0x01,
  VISUALIZZAZIONE: 0x02,
  STAMPA: 0x04,
  SALVA: 0x08,
  ANNOTAZIONI_FORM: 0x10,
  ANNOTAZIONI_ARCHIVIAZIONE: 0x20,
  ANNOTATIONS_DISABLE: 0x40,
  OPLIST: 0x100
};
esportazioni.RenderingIntentFlag = RenderingIntentFlag;
const AnnotationMode = {
  DISABILITA: 0,
  ABILITA: 1,
  ABILITA_FORME: 2,
  ABILITA_ARCHIVIAZIONE: 3
};
exports.AnnotationMode = AnnotationMode;
const AnnotationEditorPrefix = "pdfjs_internal_editor_";
esportazioni.AnnotationEditorPrefix = AnnotationEditorPrefix;
const AnnotationEditorType = {
  DISABILITA: -1,
  NESSUNO: 0,
  TESTO LIBERO: 3,
  FRANCOBOLLO: 13,
  INCHIOSTRO: 15
};
esportazioni.AnnotationEditorType = AnnotationEditorType;
const AnnotationEditorParamsType = {
  RIDIMENSIONA: 1,
  CREA: 2,
  DIMENSIONE_TESTO LIBERO: 11,
  COLORE_TESTO_GRATIS: 12,
  OPACITÀ DEL TESTO LIBERO: 13,
  COLORE INCHIOSTRO: 21,
  SPESSORE INCHIOSTRO: 22,
  INK_OPACITY: 23
};
esportazioni.AnnotationEditorParamsType = AnnotationEditorParamsType;
const PermissionFlag = {
  STAMPA: 0x04,
  MODIFICA_CONTENUTO: 0x08,
  COPIA: 0x10,
  MODIFICA_ANNOTAZIONI: 0x20,
  COMPILA_MODULI_INTERATTIVI: 0x100,
  COPIA_PER_ACCESSIBILITÀ: 0x200,
  ASSEMBLAGGIO: 0x400,
  STAMPA_ALTA_QUALITÀ: 0x800
};
esportazioni.PermissionFlag = PermissionFlag;
const TextRenderingMode = {
  RIEMPIMENTO: 0,
  CORSA: 1,
  FILL_STROKE: 2,
  INVISIBILE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_AGGIUNGI_AL_PERCORSO: 6,
  AGGIUNGI AL PERCORSO: 7,
  FILL_STROKE_MASK: 3,
  AGGIUNGI_AL_FLAG_DEL_PERCORSO: 4
};
esportazioni.TextRenderingMode = TextRenderingMode;
const TipoImmagine = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
esportazioni.ImageKind = ImmagineKind;
const Tipo di annotazione = {
  TESTO 1,
  COLLEGAMENTO: 2,
  TESTO LIBERO: 3,
  LINEA: 4,
  QUADRATO: 5,
  CERCHIO: 6,
  POLIGONO: 7,
  POLILINEA: 8,
  IN EVIDENZA: 9,
  SOTTOLINEARE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  FRANCOBOLLO: 13,
  ACCENTO: 14,
  INCHIOSTRO: 15,
  POPUP: 16,
  FILEALLEGATO: 17,
  SUONO: 18,
  FILM: 19,
  WIDGET: 20,
  SCHERMO: 21,
  SEGNO DI STAMPA: 22,
  TRAPPOLA: 23,
  FILIGRANA: 24,
  TRE: 25,
  REDATTO: 26
};
esportazioni.AnnotationType = AnnotationType;
const AnnotationReplyType = {
  GRUPPO: "Gruppo",
  RISPOSTA: "R"
};
esportazioni.AnnotationReplyType = AnnotationReplyType;
const AnnotationFlag = {
  INVISIBILE: 0x01,
  NASCOSTO: 0x02,
  STAMPA: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NESSUNA VISUALIZZAZIONE: 0x20,
  SOLA LETTURA: 0x40,
  BLOCCATO: 0x80,
  TOGGLENOVIEW: 0x100,
  CONTENUTI BLOCCATI: 0x200
};
esportazioni.AnnotationFlag = AnnotationFlag;
const AnnotationFieldFlag = {
  SOLA LETTURA: 0x0000001,
  OBBLIGATORIO: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINEA: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PULSANTE: 0x0010000,
  COMBO: 0x0020000,
  MODIFICA: 0x0040000,
  ORDINA: 0x0080000,
  SELEZIONA FILE: 0x0100000,
  SELEZIONE MULTIPLA: 0x0200000,
  NON ESEGUIRE IL CONTROLLO ORTOGRAFICO: 0x0400000,
  DONOTSCROLL: 0x0800000,
  PETTINE: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITTONSELCHANGE: 0x4000000
};
esportazioni.AnnotationFieldFlag = AnnotationFieldFlag;
const AnnotationBorderStyleType = {
  SOLIDO: 1,
  TRATTEGGIATO: 2,
  SMUSSATO: 3,
  RIQUADRO: 4,
  SOTTOLINEARE: 5
};
esportazioni.AnnotationBorderStyleType = AnnotationBorderStyleType;
const AnnotationActionEventType = {
  E: "Invio del mouse",
  X: "Uscita del mouse",
  D: "Mouse giù",
  U: "Mouse su",
  Fo: "Concentrarsi",
  Bl: "Sfocatura",
  PO: "Pagina aperta",
  PC: "ChiudiPagina",
  PV: "Pagina visibile",
  PI: "PaginaInvisibile",
  K: "Battitura di tasti",
  F: "Formato",
  V: "Convalida",
  C: "Calcola"
};
esportazioni.AnnotationActionEventType = AnnotationActionEventType;
const DocumentActionEventType = {
  WC: "WillClose",
  WS: "Salverà",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
};
esportazioni.DocumentActionEventType = DocumentActionEventType;
const PageActionEventType = {
  O: "Pagina aperta",
  C: "ChiudiPagina"
};
esportazioni.PageActionEventType = PageActionEventType;
const Livello di Verbosità = {
  ERRORI: 0,
  AVVERTENZE: 1,
  INFORMAZIONI: 5
};
esportazioni.Livello di verbosità = Livello di verbosità;
const CMapCompressionType = {
  NESSUNO: 0,
  BINARIO: 1
};
esportazioni.CMapCompressionType = CMapCompressionType;
const OPS = {
  dipendenza: 1,
  imposta larghezza riga: 2,
  setLineCap: 3,
  setLineJoin: 4,
  impostaMiterLimit: 5,
  imposta trattino: 6,
  impostaRenderingIntent: 7,
  setPlaneità: 8,
  impostaGState: 9,
  risparmia: 10,
  ripristinare: 11,
  trasformare: 12,
  sposta a: 13,
  lineaA: 14,
  curvaA: 15,
  curveTo2: 16,
  curveTo3: 17,
  chiudiPercorso: 18,
  rettangolo: 19,
  ictus: 20,
  chiudiColpo: 21,
  riempimento: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  chiudiFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  inizioTesto: 31,
  fineTesto: 32,
  imposta spaziatura caratteri: 33,
  impostaSpaziaturaParole: 34,
  setHScale: 35,
  setLeading: 36,
  impostaFont: 37,
  imposta la modalità di rendering del testo: 38,
  impostaAumentoTesto: 39,
  spostaTesto: 40,
  setLeadingMoveText: 41,
  impostaMatriceTesto: 42,
  riga successiva: 43,
  mostraTesto: 44,
  mostraTesto distanziato: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  impostaCarattereLarghezza: 48,
  imposta larghezza carattere e limiti: 49,
  impostaStrokeColorSpace: 50,
  impostaFillColorSpace: 51,
  impostaColoreTratto: 52,
  setStrokeColorN: 53,
  imposta colore di riempimento: 54,
  impostaFillColorN: 55,
  setStrokeGray: 56,
  impostaFillGray: 57,
  impostaStrokeRGBColor: 58,
  impostaRiempimentoRGBColore: 59,
  setStrokeCMYKColor: 60,
  impostaFillCMYKColor: 61,
  ombreggiaturaRiempimento: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  Punto di riferimento: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  gruppo finale: 77,
  inizioAnnotazione: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  Percorso di costruzione: 91
};
esportazioni.OPS = OPS;
const Risposte alla password = {
  PASSWORD NECESSARIA: 1,
  PASSWORD_ERRATA: 2
};
esportazioni.PasswordResponses = PasswordResponses;
lascia che verbosità = VerbosityLevel.WARNINGS;
funzione setVerbosityLevel(livello) {
  se (Numero.èIntero(livello)) {
    verbosità = livello;
  }
}
funzione getVerbosityLevel() {
  restituire verbosità;
}
funzione info(msg) {
  se (verbosità >= VerbosityLevel.INFOS) {
    console.log(`Informazioni: ${msg}`);
  }
}
funzione warn(msg) {
  se (verbosità >= VerbosityLevel.WARNINGS) {
    console.log(`Avviso: ${msg}`);
  }
}
funzione irraggiungibile(msg) {
  lancia un nuovo errore (msg);
}
funzione assert(cond, msg) {
  se (!cond) {
    irraggiungibile(msg);
  }
}
funzione _isValidProtocol(url) {
  switch (url?.protocollo) {
    caso "http:":
    caso "https:":
    caso "ftp:":
    caso "mailto:":
    caso "tel:":
      restituisci vero;
    predefinito:
      restituisci falso;
  }
}
funzione createValidAbsoluteUrl(url, baseUrl = null, opzioni = null) {
  se (!url) {
    restituisci null;
  }
  Tentativo {
    se (opzioni e tipo di URL === "stringa") {
      se (opzioni.aggiungiProtocolloPredefinito && url.avviaCon("www.")) {
        const dots = url.match(/\./g);
        se (punti?.lunghezza >= 2) {
          url = `http://${url}`;
        }
      }
      se (opzioni.tryConvertEncoding) {
        Tentativo {
          url = stringToUTF8String(url);
        } presa {}
      }
    }
    const absoluteUrl = baseUrl ? nuovo URL(url, baseUrl) : nuovo URL(url);
    se (_isValidProtocol(absoluteUrl)) {
      restituisci URL assoluto;
    }
  } presa {}
  restituisci null;
}
funzione shadow(obj, prop, valore, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    valore,
    enumerabile: !nonSerializable,
    configurabile: vero,
    scrivibile: falso
  });
  valore di ritorno;
}
const BaseException = funzione BaseExceptionClosure() {
  funzione BaseException(messaggio, nome) {
    se (questo.costruttore === BaseException) {
      unreachable("Impossibile inizializzare BaseException.");
    }
    this.message = messaggio;
    questo.nome = nome;
  }
  BaseException.prototype = nuovo Errore();
  BaseException.constructor = BaseException;
  restituisci BaseException;
}();
esportazioni.BaseException = BaseException;
classe PasswordException estende BaseException {
  costruttore(msg, codice) {
    super(msg, "PasswordException");
    questo.codice = codice;
  }
}
esportazioni.PasswordException = PasswordException;
classe UnknownErrorException estende BaseException {
  costruttore(msg, dettagli) {
    super(msg, "UnknownErrorException");
    this.details = dettagli;
  }
}
esportazioni.UnknownErrorException = UnknownErrorException;
classe InvalidPDFException estende BaseException {
  costruttore(msg) {
    super(msg, "InvalidPDFException");
  }
}
esportazioni.InvalidPDFException = InvalidPDFException;
classe MissingPDFException estende BaseException {
  costruttore(msg) {
    super(msg, "MissingPDFException");
  }
}
esportazioni.MissingPDFException = MissingPDFException;
classe UnexpectedResponseException estende BaseException {
  costruttore(msg, stato) {
    super(msg, "UnexpectedResponseException");
    questo.stato = stato;
  }
}
esportazioni.UnexpectedResponseException = UnexpectedResponseException;
classe FormatError estende BaseException {
  costruttore(msg) {
    super(msg, "Errore di formato");
  }
}
esportazioni.FormatError = FormatError;
classe AbortException estende BaseException {
  costruttore(msg) {
    super(msg, "AbortException");
  }
}
esportazioni.AbortException = AbortException;
funzione bytesToString(byte) {
  se (tipo di byte !== "oggetto" || byte?.lunghezza === indefinito) {
    unreachable("Argomento non valido per bytesToString");
  }
  lunghezza costante = byte.lunghezza;
  const MAX_ARGUMENT_COUNT = 8192;
  se (lunghezza < MAX_ARGUMENT_COUNT) {
    restituisci String.fromCharCode.apply(null, byte);
  }
  const strBuf = [];
  per (lascia che i = 0; i < lunghezza; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, lunghezza);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  restituisci strBuf.join("");
}
funzione stringToBytes(str) {
  se (tipo di str !== "stringa") {
    unreachable("Argomento non valido per stringToBytes");
  }
  lunghezza costante = str.length;
  const byte = new Uint8Array(lunghezza);
  per (lascia che i = 0; i < lunghezza; ++i) {
    byte[i] = str.charCodeAt(i) & 0xff;
  }
  restituire byte;
}
funzione string32(valore) {
  return String.fromCharCode(valore >> 24 & 0xff, valore >> 16 & 0xff, valore >> 8 & 0xff, valore & 0xff);
}
funzione objectSize(obj) {
  restituisci Object.keys(obj).length;
}
funzione objectFromMap(mappa) {
  const obj = Object.create(null);
  per (const [chiave, valore] della mappa) {
    obj[chiave] = valore;
  }
  restituisci oggetto;
}
funzione isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  torna view32[0] === 1;
}
funzione isEvalSupported() {
  Tentativo {
    nuova funzione("");
    restituisci vero;
  } presa {
    restituisci falso;
  }
}
classe FeatureTest {
  static get isLittleEndian() {
    return shadow(questo, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    restituisci shadow(questo, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  piattaforma statica get() {
    se (tipo di navigatore === "non definito") {
      restituisci shadow(questo, "piattaforma", {
        isWin: falso,
        isMac: falso
      });
    }
    restituisci shadow(questo, "piattaforma", {
      isWin: navigator.platform.includes("Win"),
      isMac: navigator.platform.includes("Mac")
    });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSSroundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
esportazioni.FeatureTest = FeatureTest;
const hexNumbers = [...Array(256).keys()].map(n => n.toString(16).padStart(2, "0"));
classe Util {
  statico makeHexColor(r, g, b) {
    restituisci `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  scala staticaMinMax(trasforma, minMax) {
    lasciare la temperatura;
    se (trasforma[0]) {
      se (trasforma[0] < 0) {
        temperatura = minMax[0];
        minMax[0] = minMax[1];
        minMax[1] = temperatura;
      }
      minMax[0] *= trasforma[0];
      minMax[1] *= trasforma[0];
      se (trasforma[3] < 0) {
        temperatura = minMax[2];
        minMax[2] = minMax[3];
        minMax[3] = temperatura;
      }
      minMax[2] *= trasforma[3];
      minMax[3] *= trasforma[3];
    } altro {
      temperatura = minMax[0];
      minMax[0] = minMax[2];
      minMax[2] = temperatura;
      temperatura = minMax[1];
      minMax[1] = minMax[3];
      minMax[3] = temperatura;
      se (trasforma[1] < 0) {
        temperatura = minMax[2];
        minMax[2] = minMax[3];
        minMax[3] = temperatura;
      }
      minMax[2] *= trasforma[1];
      minMax[3] *= trasforma[1];
      se (trasforma[2] < 0) {
        temperatura = minMax[0];
        minMax[0] = minMax[1];
        minMax[1] = temperatura;
      }
      minMax[0] *= trasforma[2];
      minMax[1] *= trasforma[2];
    }
    minMax[0] += trasforma[4];
    minMax[1] += trasforma[4];
    minMax[2] += trasforma[5];
    minMax[3] += trasforma[5];
  }
  trasformata statica(m1, m2) {
    ritorno [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  statico applicaTrasforma(p, m) {
    costante xt = p[0] * m[0] + p[1] * m[2] + m[4];
    costante yt = p[0] * m[1] + p[1] * m[3] + m[5];
    ritorno [xt, yt];
  }
  statico applicaInversaTrasformazione(p, m) {
    costante d = m[0] * m[3] - m[1] * m[2];
    costante xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    costante yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    ritorno [xt, yt];
  }
  getAxialAlignedBoundingBox statico(r, m) {
    const p1 = this.applyTransform(r, m);
    const p2 = this.applyTransform(r.slice(2, 4), m);
    const p3 = this.applyTransform([r[0], r[3]], m);
    const p4 = this.applyTransform([r[2], r[1]], m);
    ritorno [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  }
  Trasformazione inversa statica(m) {
    costante d = m[0] * m[3] - m[1] * m[2];
    ritorna [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(m) {
    const trasposizione = [m[0], m[2], m[1], m[3]];
    const a = m[0] * trasponi[0] + m[1] * trasponi[2];
    const b = m[0] * trasponi[1] + m[1] * trasponi[3];
    const c = m[2] * trasponi[0] + m[3] * trasponi[2];
    const d = m[2] * trasponi[1] + m[3] * trasponi[3];
    const primo = (a + d) / 2;
    const secondo = Math.sqrt((a + d) ** 2 - 4 * (a * d - c * b)) / 2;
    const sx = primo + secondo || 1;
    const sy = primo - secondo || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  }
  statico normalizeRect(rect) {
    const r = rect.slice(0);
    se (rect[0] > rect[2]) {
      r[0] = rettangolo[2];
      r[2] = rettangolo[0];
    }
    se (rett[1] > rect[3]) {
      r[1] = rettangolo[3];
      r[3] = rettangolo[1];
    }
    restituisci r;
  }
  intersezione statica(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    se (xBasso > xAlto) {
      restituisci null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    se (yBasso > yAlto) {
      restituisci null;
    }
    ritorno [xBasso, yBasso, xAlto, yAlto];
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3) {
    valori costanti = [],
      limiti = [[], []];
    siano a, b, c, t, t1, t2, b2ac, sqrtb2ac;
    per (lascia che i = 0; i < 2; ++i) {
      se (i === 0) {
        b = 6 * x0 - 12 * x1 + 6 * x2;
        a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
        c = 3 * x1 - 3 * x0;
      } altro {
        b = 6 * y0 - 12 * y1 + 6 * y2;
        a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
        c = 3 * y1 - 3 * y0;
      }
      se (Math.abs(a) < 1e-12) {
        se (Math.abs(b) < 1e-12) {
          continuare;
        }
        t = -c / b;
        se (0 < t && t < 1) {
          valori t.push(t);
        }
        continuare;
      }
      b2ac = b * b - 4 * c * a;
      sqrtb2ac = Math.sqrt(b2ac);
      se (b2ac < 0) {
        continuare;
      }
      t1 = (-b + sqrtb2ac) / (2 * a);
      se (0 < t1 && t1 < 1) {
        valori t.push(t1);
      }
      t2 = (-b - sqrtb2ac) / (2 * a);
      se (0 < t2 && t2 < 1) {
        valori t.push(t2);
      }
    }
    lascia j = tvalues.length,
      mt;
    const jlen = j;
    mentre (j--) {
      t = tvalori[j];
      mt = 1 - t;
      limiti[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
      limiti[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
    }
    limiti[0][jlen] = x0;
    limiti[1][jlen] = y0;
    limiti[0][jlen + 1] = x3;
    limiti[1][jlen + 1] = y3;
    limiti[0].lunghezza = limiti[1].lunghezza = jlen + 2;
    restituisci [Math.min(...limiti[0]), Math.min(...limiti[1]), Math.max(...limiti[0]), Math.max(...limiti[1])];
  }
}
esportazioni.Util = Util;
const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2d8, 0x2c7, 0x2c6, 0x2d9, 0x2dd, 0x2db, 0x2da, 0x2dc, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203a, 0x2212, 0x2030, 0x201e, 0x201c, 0x201d, 0x2018, 0x2019, 0x201a, 0x2122, 0xfb01, 0xfb02, 0x141, 0x152, 0x160, 0x178, 0x17d, 0x131, 0x142, 0x153, 0x161, 0x17e, 0, 0x20ac];
funzione stringToPDFString(str) {
  se (str[0] >= "\xEF") {
    lascia codifica;
    se (str[0] === "\xFE" && str[1] === "\xFF") {
      codifica = "utf-16be";
    } altrimenti se (str[0] === "\xFF" && str[1] === "\xFE") {
      codifica = "utf-16le";
    } altrimenti se (str[0] === "\xEF" && str[1] === "\xBB" && str[2] === "\xBF") {
      codifica = "utf-8";
    }
    se (codifica) {
      Tentativo {
        const decoder = new TextDecoder(codifica, {
          fatale: vero
        });
        const buffer = stringToBytes(str);
        restituisci decoder.decode(buffer);
      } catturare (es.) {
        warn(`stringToPDFString: "${ex}".`);
      }
    }
  }
  const strBuf = [];
  per (lascia che i = 0, ii = str.length; i < ii; i++) {
    codice costante = PDFStringTranslateTable[str.charCodeAt(i)];
    strBuf.push(codice ? String.fromCharCode(codice) : str.charAt(i));
  }
  restituisci strBuf.join("");
}
funzione stringToUTF8String(str) {
  restituisci decodeURIComponent(escape(str));
}
funzione utf8StringToString(str) {
  restituisci unescape(encodeURIComponent(str));
}
funzione isArrayBuffer(v) {
  restituisci tipo di v === "oggetto" && v?.byteLength !== indefinito;
}
funzione èArrayEqual(arr1, arr2) {
  se (arr1.length !== arr2.length) {
    restituisci falso;
  }
  per (lascia che i = 0, ii = arr1.length; i < ii; i++) {
    se (arr1[i] !== arr2[i]) {
      restituisci falso;
    }
  }
  restituisci vero;
}
funzione getModificationDate(data = nuova data()) {
  const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
  restituisci buffer.join("");
}
classe PromiseCapability {
  #sistemato = falso;
  costruttore() {
    this.promise = new Promise((resolve, reject) => {
      questo.risolvere = dati => {
        questo.#sistemato = vero;
        risolvere(dati);
      };
      this.reject = motivo => {
        questo.#sistemato = vero;
        rifiutare(motivo);
      };
    });
  }
  sistemarsi() {
    restituisci questo.#sistemato;
  }
}
esportazioni.PromiseCapability = PromiseCapability;
lascia NormalizeRegex = null;
lascia NormalizationMap = null;
funzione normalizzaUnicode(str) {
  se (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\uf bb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\u fcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = new Map([["f", "ſt"]]);
  }
  restituisci str.replaceAll(NormalizeRegex, (_, p1, p2) => {
    restituisci p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2);
  });
}
funzione getUuid() {
  if (typeof crypto !== "undefined" && typeof crypto?.randomUUID === "function") {
    restituisci crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  if (typeof crypto !== "undefined" && typeof crypto?.getRandomValues ​​=== "function") {
    crypto.getRandomValues(buf);
  } altro {
    per (lascia che i = 0; i < 32; i++) {
      buf[i] = Math.floor(Math.random() * 255);
    }
  }
  restituisci bytesToString(buf);
}
const AnnotationPrefix = "pdfjs_internal_id_";
esportazioni.AnnotationPrefix = AnnotationPrefix;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
Object.defineProperty(esporta, "SVGGraphics", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _displaySvg.SVGGraphics;
  }
}));
esportazioni.build = void 0;
esportazioni.getDocument = getDocument;
exports.version = void 0;
var _util = __w_pdfjs_require__(1);
var _annotation_storage = __w_pdfjs_require__(3);
var _display_utils = __w_pdfjs_require__(6);
var _font_loader = __w_pdfjs_require__(9);
var _displayNode_utils = __w_pdfjs_require__(10);
var _canvas = __w_pdfjs_require__(11);
var _worker_options = __w_pdfjs_require__(14);
var _message_handler = __w_pdfjs_require__(15);
var _metadata = __w_pdfjs_require__(16);
var _optional_content_config = __w_pdfjs_require__(17);
var _transport_stream = __w_pdfjs_require__(18);
var _displayFetch_stream = __w_pdfjs_require__(19);
var _displayNetwork = __w_pdfjs_require__(22);
var _displayNode_stream = __w_pdfjs_require__(23);
var _displaySvg = __w_pdfjs_require__(24);
var _xfa_text = __w_pdfjs_require__(25);
const DEFAULT_RANGE_CHUNK_SIZE = 65536;
const RENDERING_CANCELLED_TIMEOUT = 100;
const DELAYED_CLEANUP_TIMEOUT = 5000;
const DefaultCanvasFactory = _util.isNodeJS ? _displayNode_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
esportazioni.DefaultCanvasFactory = DefaultCanvasFactory;
const DefaultCMapReaderFactory = _util.isNodeJS ? _displayNode_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
esportazioni.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
const DefaultFilterFactory = _util.isNodeJS ? _displayNode_utils.NodeFilterFactory : _display_utils.DOMFilterFactory;
esportazioni.DefaultFilterFactory = DefaultFilterFactory;
const DefaultStandardFontDataFactory = _util.isNodeJS ? _displayNode_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
esportazioni.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
funzione getDocument(src) {
  se (tipo di src === "stringa" || istanza di src URL) {
    origine = {
      URL: origine
    };
  } altrimenti se ((0, _util.isArrayBuffer)(src)) {
    origine = {
      dati: src
    };
  }
  se (tipo di src !== "oggetto") {
    throw new Error("Parametro non valido in getDocument, è necessario un oggetto parametro.");
  }
  se (!src.url && !src.data && !src.range) {
    throw new Error("Oggetto parametro non valido: è necessario .data, .range o .url");
  }
  const task = new PDFDocumentLoadingTask();
  costante {
    ID documento
  } = compito;
  const url = src.url ? getUrlProp(src.url) : null;
  const data = src.data ? getDataProp(src.data) : null;
  const httpHeaders = src.httpHeaders || null;
  const conCredenziali = src.conCredenziali === true;
  const password = src.password ?? null;
  const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
  const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
  lascia worker = src.worker instanceof PDFWorker ? src.worker : null;
  const verbosità = src.verbosità;
  const docBaseUrl = typeof src.docBaseUrl === "string" && !(0, _display_utils.isDataScheme)(src.docBaseUrl) ? src.docBaseUrl: null;
  const cMapUrl = typeof src.cMapUrl === "stringa" ? src.cMapUrl : null;
  const cMapPacked = src.cMapPacked !== false;
  const CMapReaderFactory = src.CMapReaderFactory || DefaultCMapReaderFactory;
  const standardFontDataUrl = typeof src.standardFontDataUrl === "stringa" ? src.standardFontDataUrl : null;
  const StandardFontDataFactory = src.StandardFontDataFactory || DefaultStandardFontDataFactory;
  const ignoreErrors = src.stopAtErrors !== true;
  const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
  const isEvalSupported = src.isEvalSupported !== false;
  const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "booleano" ? src.isOffscreenCanvasSupported : !_util.isNodeJS;
  const canvasMaxAreaInBytes = Number.isInteger(src.canvasMaxAreaInBytes) ? src.canvasMaxAreaInBytes : -1;
  const disableFontFace = typeof src.disableFontFace === "booleano" ? src.disableFontFace : _util.isNodeJS;
  const fontExtraProperties = src.fontExtraProperties === true;
  const enableXfa = src.enableXfa === true;
  const ownerDocument = src.ownerDocument || globalThis.document;
  const disableRange = src.disableRange === true;
  const disableStream = src.disableStream === true;
  const disableAutoFetch = src.disableAutoFetch === true;
  const pdfBug = src.pdfBug === true;
  lunghezza costante = rangeTransport ? rangeTransport.length : src.length ?? NaN;
  const useSystemFonts = typeof src.useSystemFonts === "booleano" ? src.useSystemFonts : !_util.isNodeJS && !disableFontFace;
  const useWorkerFetch = typeof src.useWorkerFetch === "booleano" ? src.useWorkerFetch : CMapReaderFactory === _display_utils.DOMCMapReaderFactory && StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory && cMapUrl && standardFontDataUrl && (0, _display_utils.isValidFetchUrl)(cMapUrl, document.baseURI) && (0, _display_utils.isValidFetchUrl)(standardFontDataUrl, document.baseURI);
  const canvasFactory = src.canvasFactory || new DefaultCanvasFactory({
    Documento proprietario
  });
  const filterFactory = src.filterFactory || new DefaultFilterFactory({
    ID documento,
    Documento proprietario
  });
  const styleElement = null;
  (0, _util.setVerbosityLevel)(verbosità);
  const transportFactory = {
    Fabbrica di tele,
    filterFactory
  };
  se (!useWorkerFetch) {
    transportFactory.cMapReaderFactory = nuovo CMapReaderFactory({
      baseUrl: cMapUrl,
      è compresso: cMapPacked
    });
    transportFactory.standardFontDataFactory = nuovo StandardFontDataFactory({
      baseUrl: standardFontDataUrl
    });
  }
  se (!lavoratore) {
    const workerParams = {
      verbosità,
      porta: _worker_options.GlobalWorkerOptions.workerPort
    };
    worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
    task._worker = lavoratore;
  }
  const fetchDocParams = {
    ID documento,
    apiVersion: '3.11.174',
    dati,
    password,
    Disabilita AutoFetch,
    intervalloChunkSize,
    lunghezza,
    docBaseUrl,
    enableXfa,
    OpzioniValutatore: {
      dimensione massima dell'immagine,
      disabilitaFontFace,
      ignoraErrori,
      è supportato da Eval,
      èOffscreenCanvasSupported,
      canvasMaxAreaInBytes,
      fontExtraProperties,
      usaSystemFonts,
      cMapUrl: usaWorkerFetch ? cMapUrl : null,
      standardFontDataUrl: useWorkerFetch ? standardFontDataUrl: null
    }
  };
  const transportParams = {
    ignoraErrori,
    è supportato da Eval,
    disabilitaFontFace,
    fontExtraProperties,
    enableXfa,
    Documento proprietario,
    Disabilita AutoFetch,
    pdfBug,
    elemento di stile
  };
  worker.promise.then(funzione () {
    se (task.destroyed) {
      genera un nuovo errore("Caricamento interrotto");
    }
    const workerIdPromise = _fetchDocument(worker, fetchDocParams);
    const networkStreamPromise = new Promise(function (resolve) {
      lascia networkStream;
      se (intervalloTrasporto) {
        networkStream = nuovo _transport_stream.PDFDataTransportStream({
          lunghezza,
          dati iniziali: rangeTransport.initialData,
          progressiveDone: rangeTransport.progressiveDone,
          contentDispositionFilename: rangeTransport.contentDispositionFilename,
          disableRange,
          Disabilita Stream
        }, intervalloTrasporto);
      } altrimenti se (!dati) {
        const createPDFNetworkStream = parametri => {
          se (_util.isNodeJS) {
            restituisci nuovo _displayNode_stream.PDFNodeStream(parametri);
          }
          restituisci (0, _display_utils.isValidFetchUrl)(params.url) ? nuovo _displayFetch_stream.PDFFetchStream(params) : nuovo _displayNetwork.PDFNetworkStream(params);
        };
        networkStream = createPDFNetworkStream({
          URL,
          lunghezza,
          Intestazioni http,
          con credenziali,
          intervalloChunkSize,
          disableRange,
          Disabilita Stream
        });
      }
      risolvere(flusso di rete);
    });
    restituisci Promise.all([workerIdPromise, networkStreamPromise]).then(function ([workerId, networkStream]) {
      se (task.destroyed) {
        genera un nuovo errore("Caricamento interrotto");
      }
      const messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
      const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory);
      task._transport = trasporto;
      messageHandler.send("Pronto", null);
    });
  }).catch(task._capability.reject);
  compito di ritorno;
}
funzione asincrona _fetchDocument(lavoratore, sorgente) {
  se (lavoratore.distrutto) {
    genera un nuovo errore("Il lavoratore è stato distrutto");
  }
  const workerId = await worker.messageHandler.sendWithPromise("GetDocRequest", source, source.data ? [source.data.buffer] : null);
  se (lavoratore.distrutto) {
    genera un nuovo errore("Il lavoratore è stato distrutto");
  }
  restituisci workerId;
}
funzione getUrlProp(val) {
  se (val instanceof URL) {
    restituisci val.href;
  }
  Tentativo {
    restituisce nuovo URL(val, window.location).href;
  } presa {
    se (_util.isNodeJS && tipo di valore === "stringa") {
      restituisci valore;
    }
  }
  throw new Error("Dati URL PDF non validi: " + "è prevista una stringa o un oggetto URL nella proprietà URL.");
}
funzione getDataProp(val) {
  if (_util.isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
    throw new Error("Fornire dati binari come `Uint8Array`, anziché `Buffer`.");
  }
  se (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
    restituisci valore;
  }
  se (tipo di valore === "stringa") {
    restituisci (0, _util.stringToBytes)(valore);
  }
  if (typeof val === "oggetto" && !isNaN(val?.length) || (0, _util.isArrayBuffer)(val)) {
    restituisci nuovo Uint8Array(val);
  }
  throw new Error("Dati binari PDF non validi: nella proprietà dati è previsto un TypedArray, una " + "stringa o un oggetto simile a un array.");
}
classe PDFDocumentLoadingTask {
  statico #docId = 0;
  costruttore() {
    this._capability = new _util.PromiseCapability();
    questo._trasporto = null;
    questo._lavoratore = null;
    this.docId = `d${PDFDocumentLoadingTask.#docId++}`;
    questo.distrutto = falso;
    this.onPassword = null;
    this.onProgress = null;
  }
  ottieni promessa() {
    restituisci this._capability.promise;
  }
  distruzione asincrona() {
    questo.distrutto = vero;
    Tentativo {
      se (this._worker?.port) {
        this._worker._pendingDestroy = true;
      }
      attendi questo._trasporto?.distruggi();
    } catturare (es.) {
      se (this._worker?.port) {
        elimina this._worker._pendingDestroy;
      }
      lanciare ex;
    }
    questo._trasporto = null;
    se (questo._lavoratore) {
      questo._lavoratore.distruggi();
      questo._lavoratore = null;
    }
  }
}
esportazioni.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
classe PDFDataRangeTransport {
  costruttore(lunghezza, datiiniziali, progressiveDone = false, contentDispositionFilename = null) {
    this.length = lunghezza;
    questo.datiiniziali = datiiniziali;
    this.progressiveDone = progressiveDone;
    this.contentDispositionFilename = contentDispositionFilename;
    questo._rangeListeners = [];
    questo._progressListeners = [];
    this._progressiveReadListeners = [];
    this._progressiveDoneListeners = [];
    this._readyCapability = new _util.PromiseCapability();
  }
  addRangeListener(ascoltatore) {
    this._rangeListeners.push(ascoltatore);
  }
  addProgressListener(ascoltatore) {
    this._progressListeners.push(ascoltatore);
  }
  addProgressiveReadListener(ascoltatore) {
    this._progressiveReadListeners.push(ascoltatore);
  }
  addProgressiveDoneListener(ascoltatore) {
    this._progressiveDoneListeners.push(ascoltatore);
  }
  onDataRange(inizio, blocco) {
    per (const listener di this._rangeListeners) {
      ascoltatore(inizio, frammento);
    }
  }
  onDataProgress(caricato, totale) {
    this._readyCapability.promise.then(() => {
      per (const listener di this._progressListeners) {
        listener(caricato, totale);
      }
    });
  }
  onDataProgressiveRead(pezzo) {
    this._readyCapability.promise.then(() => {
      per (const listener di this._progressiveReadListeners) {
        ascoltatore(pezzo);
      }
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      per (const listener di this._progressiveDoneListeners) {
        ascoltatore();
      }
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(inizio, fine) {
    (0, _util.unreachable)("Metodo astratto PDFDataRangeTransport.requestDataRange");
  }
  abort() {}
}
esportazioni.PDFDataRangeTransport = PDFDataRangeTransport;
classe PDFDocumentProxy {
  costruttore(pdfInfo, trasporto) {
    questo._pdfInfo = pdfInfo;
    this._transport = trasporto;
    Object.defineProperty(questo, "getJavaScript", {
      valore: () => {
        (0, _display_utils.deprecated)("`PDFDocumentProxy.getJavaScript`, " + "utilizzare invece `PDFDocumentProxy.getJSActions`.");
        restituisci this.getJSActions().then(js => {
          se (!js) {
            restituisci js;
          }
          const jsArr = [];
          per (nome costante in js) {
            jsArr.push(...js[nome]);
          }
          restituisci jsArr;
        });
      }
    });
  }
  ottieni annotationStorage() {
    restituisci questo._trasporto.annotazioneArchiviazione;
  }
  ottieni filterFactory() {
    restituisci this._transport.filterFactory;
  }
  ottieni numPages() {
    restituisci questo._pdfInfo.numPages;
  }
  ottenere impronte digitali() {
    restituisci questo._pdfInfo.impronte digitali;
  }
  ottieni isPureXfa() {
    return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  ottieni allXfaHtml() {
    restituisci questo._trasporto._htmlForXfa;
  }
  getPage(numeropagina) {
    restituisci questo._transport.getPage(pageNumber);
  }
  getPageIndex(rif) {
    restituisci questo._transport.getPageIndex(ref);
  }
  getDestinations() {
    restituisci this._transport.getDestinations();
  }
  getDestination(id) {
    restituisci questo._transport.getDestination(id);
  }
  ottieniEtichettePagina() {
    restituisci this._transport.getPageLabels();
  }
  getPageLayout() {
    restituisci questo._transport.getPageLayout();
  }
  getPageMode() {
    restituisci this._transport.getPageMode();
  }
  getViewerPreferences() {
    restituisci this._transport.getViewerPreferences();
  }
  getOpenAction() {
    restituisci this._transport.getOpenAction();
  }
  ottieniAllegati() {
    restituisci questo._transport.getAttachments();
  }
  getJSActions() {
    restituisci this._transport.getDocJSActions();
  }
  ottieniContorno() {
    restituisci questo._trasporto.getOutline();
  }
  getOptionalContentConfig() {
    restituisci this._transport.getOptionalContentConfig();
  }
  ottieniPermessi() {
    restituisci this._transport.getPermissions();
  }
  ottieniMetadati() {
    restituisci questo._trasporto.getMetadata();
  }
  getMarkInfo() {
    restituisci questo._transport.getMarkInfo();
  }
  getData() {
    restituisci questo._trasporto.getData();
  }
  salvaDocumento() {
    restituisci this._transport.saveDocument();
  }
  ottieniInformazioniScarica() {
    restituisci this._transport.downloadInfoCapability.promise;
  }
  cleanup(keepLoadedFonts = false) {
    restituisci this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
  }
  distruggere() {
    restituisci this.loadingTask.destroy();
  }
  ottieni loadingParams() {
    restituisci questo._trasporto.parametri di caricamento;
  }
  ottieni loadingTask() {
    restituisci questo._trasporto.caricamentoTask;
  }
  getFieldObjects() {
    restituisci questo._transport.getFieldObjects();
  }
  haJSAzioni() {
    restituisci this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    restituisci this._transport.getCalculationOrderIds();
  }
}
esportazioni.PDFDocumentProxy = PDFDocumentProxy;
classe PDFPageProxy {
  #delayedCleanupTimeout = null;
  #pendingCleanup = false;
  costruttore(pageIndex, pageInfo, trasporto, pdfBug = false) {
    this._pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = trasporto;
    this._stats = pdfBug ? new _display_utils.StatTimer() : null;
    questo._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this._maybeCleanupAfterRender = false;
    this._intentStates = new Map();
    questo.distrutto = falso;
  }
  ottieni numeropagina() {
    restituisci questo._pageIndex + 1;
  }
  ottieni ruota() {
    restituisci this._pageInfo.rotate;
  }
  ottieni ref() {
    restituisci this._pageInfo.ref;
  }
  ottieni userUnit() {
    restituisci this._pageInfo.userUnit;
  }
  ottieni vista() {
    restituisci this._pageInfo.view;
  }
  getViewport({
    scala,
    rotazione = questo.ruota,
    offsetX = 0,
    offsetY = 0,
    dontFlip = falso
  } = {}) {
    restituisci nuovo _display_utils.PageViewport({
      viewBox: questa vista,
      scala,
      rotazione,
      offsetX,
      offsetY,
      non capovolgere
    });
  }
  ottieniAnnotazioni({
    intento = "visualizzazione"
  } = {}) {
    const intentArgs = this._transport.getRenderingIntent(intento);
    restituisci this._transport.getAnnotations(this._pageIndex, intentArgs.renderingIntent);
  }
  getJSActions() {
    restituisci this._transport.getPageJSActions(this._pageIndex);
  }
  ottieni filterFactory() {
    restituisci this._transport.filterFactory;
  }
  ottieni isPureXfa() {
    return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  getXfa asincrono() {
    restituisci this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  rendere({
    contestotela,
    finestra,
    intento = "visualizzazione",
    annotationMode = _util.AnnotationMode.ENABLE,
    trasformare = null,
    sfondo = nullo,
    optionalContentConfigPromise = null,
    annotationCanvasMap = null,
    pageColors = null,
    printAnnotationStorage = null
  }) {
    this._stats?.time("Complessivo");
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage);
    questo.#pendingCleanup = false;
    questo.#abortDelayedCleanup();
    se (!optionalContentConfigPromise) {
      optionalContentConfigPromise = this._transport.getOptionalContentConfig();
    }
    lascia intentState = this._intentStates.get(intentArgs.cacheKey);
    se (!intentState) {
      intentState = Object.create(null);
      this._intentStates.set(intentArgs.cacheKey, intentState);
    }
    se (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    const intentPrint = !!(intentArgs.renderingIntent & _util.RenderingIntentFlag.PRINT);
    se (!intentState.displayReadyCapability) {
      intentState.displayReadyCapability = new _util.PromiseCapability();
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: falso,
        separateAnnots: null
      };
      this._stats?.time("Richiesta di pagina");
      this._pumpOperatorList(intentArgs );
    }
    const complete = errore => {
      intentState.renderTasks.delete(internalRenderTask);
      se (this._maybeCleanupAfterRender || intentPrint) {
        questo.#pendingCleanup = true;
      }
      questo.#tryCleanup(!intentPrint);
      se (errore) {
        internalRenderTask.capability.reject(errore);
        this._abortOperatorList({
          Stato di intenzione,
          motivo: errore instanceof Errore ? errore : nuovo Errore(errore)
        });
      } altro {
        internalRenderTask.capability.resolve();
      }
      this._stats?.timeEnd("Rendering");
      this._stats?.timeEnd("Complessivo");
    };
    const internalRenderTask = new InternalRenderTask({
      callback: completo,
      parametri: {
        contestotela,
        finestra,
        trasformare,
        sfondo
      },
      objs: questo.objs,
      commonObjs: questo.commonObjs,
      annotazioneCanvasMap,
      operatorList: intentState.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !intentPrint,
      pdfBug: questo._pdfBug,
      Colori di pagina
    });
    (intentState.renderTasks ||= new Set()).add(internalRenderTask);
    const renderTask = internalRenderTask.task;
    Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
      se (questo.distrutto) {
        completare();
        ritorno;
      }
      this._stats?.time("Rendering");
      internalRenderTask.initializeGraphics({
        trasparenza,
        optionalContentConfig
      });
      internalRenderTask.operatorListChanged();
    }).catch(completo);
    restituisci renderTask;
  }
  getOperatorList({
    intento = "visualizzazione",
    annotationMode = _util.AnnotationMode.ENABLE,
    printAnnotationStorage = null
  } = {}) {
    funzione operatorListChanged() {
      se (intentState.operatorList.lastChunk) {
        intentState.opListReadCapability.resolve(intentState.operatorList);
        intentState.renderTasks.delete(opListTask);
      }
    }
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, true);
    lascia intentState = this._intentStates.get(intentArgs.cacheKey);
    se (!intentState) {
      intentState = Object.create(null);
      this._intentStates.set(intentArgs.cacheKey, intentState);
    }
    lascia opListTask;
    se (!intentState.opListReadCapability) {
      opListTask = Object.create(null);
      opListTask.operatorListChanged = operatorListChanged;
      intentState.opListReadCapability = new _util.PromiseCapability();
      (intentState.renderTasks ||= new Set()).add(opListTask);
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: falso,
        separateAnnots: null
      };
      this._stats?.time("Richiesta di pagina");
      this._pumpOperatorList(intentArgs);
    }
    restituisci intentState.opListReadCapability.promise;
  }
  flussoTestoContenuto({
    includeMarkedContent = false,
    disableNormalization = false
  } = {}) {
    const DIMENSIONE_CENSO_CONTENUTO_TESTO = 100;
    restituisci questo._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: includeMarkedContent === true,
      disableNormalization: disableNormalization === true
    }, {
      highWaterMark: DIMENSIONE_FONDO_CONTENUTO_TESTO,
      dimensione(testoContenuto) {
        restituisci textContent.items.length;
      }
    });
  }
  getTextContent(parametri = {}) {
    se (this._transport._htmlForXfa) {
      restituisci this.getXfa().then(xfa => {
        restituisci _xfa_text.XfaText.textContent(xfa);
      });
    }
    const readableStream = this.streamTextContent(params);
    restituisci nuova Promessa(funzione (risolvi, rifiuta) {
      funzione pompa() {
        reader.read().then(funzione ({
          valore,
          Fatto
        }) {
          se (fatto) {
            resolve(textContent);
            ritorno;
          }
          Oggetto.assegna(testoContenuto.stili, valore.stili);
          textContent.items.push(...value.items);
          pompa();
        }, rifiutare);
      }
      const reader = readableStream.getReader();
      const textContent = {
        elementi: [],
        stili: Object.create(null)
      };
      pompa();
    });
  }
  getStructTree() {
    restituisci this._transport.getStructTree(this._pageIndex);
  }
  _distruggi() {
    questo.distrutto = vero;
    const waitOn = [];
    per (const intentState di this._intentStates.values()) {
      this._abortOperatorList({
        Stato di intenzione,
        motivo: nuovo errore("La pagina è stata distrutta.")
        forza: vero
      });
      se (intentState.opListReadCapability) {
        continuare;
      }
      per (const internalRenderTask di intentState.renderTasks) {
        waitOn.push(internalRenderTask.completed);
        internalRenderTask.annulla();
      }
    }
    questo.oggetto.chiaro();
    questo.#pendingCleanup = false;
    questo.#abortDelayedCleanup();
    restituisci Promise.all(waitOn);
  }
  cleanup(resetStats = false) {
    questo.#pendingCleanup = true;
    const success = this.#tryCleanup(false);
    se (resetStats && successo) {
      this._stats &&= new _display_utils.StatTimer();
    }
    ritorno di successo;
  }
  #tryCleanup(ritardato = falso) {
    questo.#abortDelayedCleanup();
    se (!this.#pendingCleanup || this.destroyed) {
      restituisci falso;
    }
    se (ritardato) {
      questo.#delayedCleanupTimeout = setTimeout(() => {
        questo.#delayedCleanupTimeout = null;
        questo.#tryCleanup(false);
      }, DELAYED_CLEANUP_TIMEOUT);
      restituisci falso;
    }
    per (cost {
      renderTasks,
      lista degli operatori
    } di questo._intentStates.values()) {
      se (renderTasks.size > 0 || !operatorList.lastChunk) {
        restituisci falso;
      }
    }
    questo._intentStates.clear();
    questo.oggetto.chiaro();
    questo.#pendingCleanup = false;
    restituisci vero;
  }
  #abortDelayedCleanup() {
    se (questo.#delayedCleanupTimeout) {
      clearTimeout(this.#delayedCleanupTimeout);
      questo.#delayedCleanupTimeout = null;
    }
  }
  _startRenderPage(trasparenza, cacheKey) {
    const intentState = this._intentStates.get(cacheKey);
    se (!intentState) {
      ritorno;
    }
    this._stats?.timeEnd("Richiesta di pagina");
    intentState.displayReadyCapability?.resolve(trasparenza);
  }
  _renderPageChunk(operatorListChunk, intentState) {
    per (lascia che i = 0, ii = operatorListChunk.length; i < ii; i++) {
      intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
      intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
    }
    intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
    intentState.operatorList.separateAnnots = operatorListChunk.separateAnnots;
    per (const internalRenderTask di intentState.renderTasks) {
      internalRenderTask.operatorListChanged();
    }
    se (operatorListChunk.lastChunk) {
      questo.#tryCleanup(true);
    }
  }
  _pumpOperatorList({
    renderingIntent,
    chiave della cache,
    annotazioneStorageSerializable
  }) {
    costante {
      mappa,
      trasferimenti
    } = annotationStorageSerializable;
    const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intento: renderingIntent,
      chiave della cache,
      annotazioneArchiviazione: mappa
    }, trasferimenti);
    const reader = readableStream.getReader();
    const intentState = this._intentStates.get(cacheKey);
    intentState.streamReader = lettore;
    const pompa = () => {
      lettore.leggi().quindi(({
        valore,
        Fatto
      }) => {
        se (fatto) {
          intentState.streamReader = null;
          ritorno;
        }
        se (questo._trasporto.distrutto) {
          ritorno;
        }
        this._renderPageChunk(valore, intentState);
        pompa();
      }, motivo => {
        intentState.streamReader = null;
        se (questo._trasporto.distrutto) {
          ritorno;
        }
        se (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;
          per (const internalRenderTask di intentState.renderTasks) {
            internalRenderTask.operatorListChanged();
          }
          questo.#tryCleanup(true);
        }
        se (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(motivo);
        } altrimenti se (intentState.opListReadCapability) {
          intentState.opListReadCapability.reject(motivo);
        } altro {
          gettare la ragione;
        }
      });
    };
    pompa();
  }
  _abortOperatorList({
    Stato di intenzione,
    motivo,
    forza = falso
  }) {
    se (!intentState.streamReader) {
      ritorno;
    }
    se (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    se (!forza) {
      se (intentState.renderTasks.size > 0) {
        ritorno;
      }
      se (motivo instanceof _display_utils.RenderingCancelledException) {
        lascia ritardo = RENDERING_CANCELLED_TIMEOUT;
        se (motivo.extraDelay > 0 e motivo.extraDelay < 1000) {
          ritardo += motivo.ritardoextra;
        }
        intentState.streamReaderCancelTimeout = setTimeout(() => {
          intentState.streamReaderCancelTimeout = null;
          this._abortOperatorList({
            Stato di intenzione,
            motivo,
            forza: vero
          });
        }, ritardo);
        ritorno;
      }
    }
    intentState.streamReader.cancel(new _util.AbortException(reason.message)).catch(() => {});
    intentState.streamReader = null;
    se (questo._trasporto.distrutto) {
      ritorno;
    }
    per (const [curCacheKey, curIntentState] di this._intentStates) {
      se (curIntentState === intentState) {
        this._intentStates.delete(curCacheKey);
        rottura;
      }
    }
    questo.pulizia();
  }
  ottieni statistiche() {
    restituisci questo._stats;
  }
}
esportazioni.PDFPageProxy = PDFPageProxy;
classe LoopbackPort {
  #ascoltatori = nuovo Set();
  #differito = Promessa.risolvi();
  postMessage(obj, trasferimento) {
    evento costante = {
      dati: structuredClone(obj, trasferimento ? {
        trasferire
      } : nullo)
    };
    questo.#differito.allora(() => {
      per (const ascoltatore di questo.#ascoltatori) {
        listener.call(questo, evento);
      }
    });
  }
  addEventListener(nome, ascoltatore) {
    questo.#ascoltatori.aggiungi(ascoltatore);
  }
  removeEventListener(nome, ascoltatore) {
    questo.#ascoltatori.elimina(ascoltatore);
  }
  termina() {
    questo.#ascoltatori.chiaro();
  }
}
esportazioni.LoopbackPort = LoopbackPort;
const PDFWorkerUtil = {
  isWorkerDisabled: falso,
  fallbackWorkerSrc: nullo,
  fakeWorkerId: 0
};
esportazioni.PDFWorkerUtil = PDFWorkerUtil;
{
  se (_util.isNodeJS && typeof require === "funzione") {
    PDFWorkerUtil.isWorkerDisabled = true;
    PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
  } else if (tipo di documento === "oggetto") {
    const pdfjsFilePath = document?.currentScript?.src;
    se (pdfjsFilePath) {
      PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
    }
  }
  PDFWorkerUtil.isSameOrigin = funzione (baseUrl, otherUrl) {
    lascia la base;
    Tentativo {
      base = nuovo URL(baseUrl);
      se (!base.origin || base.origin === "null") {
        restituisci falso;
      }
    } presa {
      restituisci falso;
    }
    const altro = nuovo URL(altroUrl, base);
    restituisci base.origin === other.origin;
  };
  PDFWorkerUtil.createCDNWrapper = funzione (url) {
    const wrapper = `importScripts("${url}");`;
    restituisci URL.createObjectURL(nuovo Blob([wrapper]));
  };
}
classe PDFWorker {
  #workerPorts statico;
  costruttore({
    nome = nullo,
    porta = null,
    verbosità = (0, _util.getVerbosityLevel)()
  } = {}) {
    questo.nome = nome;
    questo.distrutto = falso;
    this.verbosity = verbosità;
    this._readyCapability = new _util.PromiseCapability();
    this._port = null;
    this._webWorker = null;
    this._messageHandler = null;
    se (porta) {
      se (PDFWorker.#workerPorts?.has(porta)) {
        throw new Error("Impossibile utilizzare più di un PDFWorker per porta.");
      }
      (PDFWorker.#workerPorts ||= new WeakMap()).set(porta, questo);
      this._initializeFromPort(porta);
      ritorno;
    }
    questo._inizializza();
  }
  ottieni promessa() {
    restituisci this._readyCapability.promise;
  }
  ottieni porta() {
    restituisci questo._porta;
  }
  ottieni messageHandler() {
    restituisci questo._messageHandler;
  }
  _initializeFromPort(porta) {
    this._port = porta;
    this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);
    this._messageHandler.on("pronto", function () {});
    this._readyCapability.resolve();
    this._messageHandler.send("configura", {
      verbosità: this.verbosity
    });
  }
  _inizializza() {
    se (!PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
      permettere {
        workerSrc
      } = PDFWorker;
      Tentativo {
        se (!PDFWorkerUtil.isSameOrigin(window.location.href, workerSrc)) {
          workerSrc = PDFWorkerUtil.createCDNWrapper(nuovo URL(workerSrc, window.location).href);
        }
        const worker = new Worker(workerSrc);
        const messageHandler = new _message_handler.MessageHandler("principale", "lavoratore", lavoratore);
        const terminateEarly = () => {
          worker.removeEventListener("errore", onWorkerError);
          messageHandler.destroy();
          lavoratore.termina();
          se (questo.distrutto) {
            this._readyCapability.reject(new Error("Il lavoratore è stato distrutto"));
          } altro {
            questo._setupFakeWorker();
          }
        };
        const onWorkerError = () => {
          se (!this._webWorker) {
            terminare in anticipo();
          }
        };
        worker.addEventListener("errore", onWorkerError);
        messageHandler.on("test", dati => {
          worker.removeEventListener("errore", onWorkerError);
          se (questo.distrutto) {
            terminare in anticipo();
            ritorno;
          }
          se (dati) {
            this._messageHandler = messageHandler;
            this._port = worker;
            this._webWorker = lavoratore;
            this._readyCapability.resolve();
            messageHandler.send("configura", {
              verbosità: this.verbosity
            });
          } altro {
            questo._setupFakeWorker();
            messageHandler.destroy();
            lavoratore.termina();
          }
        });
        messageHandler.on("pronto", dati => {
          worker.removeEventListener("errore", onWorkerError);
          se (questo.distrutto) {
            terminare in anticipo();
            ritorno;
          }
          Tentativo {
            inviaTest();
          } presa {
            questo._setupFakeWorker();
          }
        });
        const sendTest = () => {
          const testObj = new Uint8Array();
          messageHandler.send("test", testObj, [testObj.buffer]);
        };
        inviaTest();
        ritorno;
      } presa {
        (0, _util.info)("Il lavoratore è stato disabilitato.");
      }
    }
    questo._setupFakeWorker();
  }
  _setupFakeWorker() {
    se (!PDFWorkerUtil.isWorkerDisabled) {
      (0, _util.warn)("Impostazione del falso worker.");
      PDFWorkerUtil.isWorkerDisabled = true;
    }
    PDFWorker._setupFakeWorkerGlobal.then(WorkerMessageHandler => {
      se (questo.distrutto) {
        this._readyCapability.reject(new Error("Il lavoratore è stato distrutto"));
        ritorno;
      }
      const porta = nuova LoopbackPort();
      this._port = porta;
      const id = `fake${PDFWorkerUtil.fakeWorkerId++}`;
      const workerHandler = new _message_handler.MessageHandler(id + "_worker", id, porta);
      WorkerMessageHandler.setup(workerHandler, porta);
      const messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
      this._messageHandler = messageHandler;
      this._readyCapability.resolve();
      messageHandler.send("configura", {
        verbosità: this.verbosity
      });
    }).catch(motivo => {
      this._readyCapability.reject(new Error(`Impostazione del falso worker non riuscita: "${reason.message}".`));
    });
  }
  distruggere() {
    questo.distrutto = vero;
    se (this._webWorker) {
      this._webWorker.terminate();
      this._webWorker = null;
    }
    PDFWorker.#workerPorts?.delete(this._port);
    this._port = null;
    se (this._messageHandler) {
      this._messageHandler.destroy();
      this._messageHandler = null;
    }
  }
  statico fromPort(parametri) {
    se (!parametri?.porta) {
      genera un nuovo errore("PDFWorker.fromPort - firma del metodo non valida.");
    }
    const cachedPort = this.#workerPorts?.get(params.port);
    se (cachedPort) {
      se (cachedPort._pendingDestroy) {
        throw new Error("PDFWorker.fromPort - il worker verrà distrutto.\n" + "Ricordatevi di attendere le chiamate `PDFDocumentLoadingTask.destroy()`.");
      }
      restituisci cachedPort;
    }
    restituisci nuovo PDFWorker(parametri);
  }
  static get workerSrc() {
    se (_worker_options.GlobalWorkerOptions.workerSrc) {
      restituisci _worker_options.GlobalWorkerOptions.workerSrc;
    }
    se (PDFWorkerUtil.fallbackWorkerSrc !== null) {
      se (!_util.isNodeJS) {
        (0, _display_utils.deprecated)('Nessun "GlobalWorkerOptions.workerSrc" specificato.');
      }
      restituisci PDFWorkerUtil.fallbackWorkerSrc;
    }
    throw new Error('Nessun "GlobalWorkerOptions.workerSrc" specificato.');
  }
  statico ottieni _mainThreadWorkerMessageHandler() {
    Tentativo {
      restituisci globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } presa {
      restituisci null;
    }
  }
  statico ottieni _setupFakeWorkerGlobal() {
    caricatore costante = asincrono () => {
      const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
      se (mainWorkerMessageHandler) {
        restituisci mainWorkerMessageHandler;
      }
      se (_util.isNodeJS && typeof require === "funzione") {
        const worker = eval("require")(this.workerSrc);
        restituisci worker.WorkerMessageHandler;
      }
      attendi (0, _display_utils.loadScript)(this.workerSrc);
      restituisci window.pdfjsWorker.WorkerMessageHandler;
    };
    return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
  }
}
esportazioni.PDFWorker = PDFWorker;
classe WorkerTransport {
  #methodPromises = nuova mappa();
  #pageCache = nuova mappa();
  #pagePromises = nuova mappa();
  #passwordCapability = null;
  costruttore(messaggioHandler, caricamentoTask, flusso di rete, parametri, fabbrica) {
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = nuovo _font_loader.FontLoader({
      ownerDocument: params.ownerDocument,
      styleElement: params.styleElement
    });
    questo._parametri = parametri;
    this.canvasFactory = factory.canvasFactory;
    this.filterFactory = factory.filterFactory;
    this.cMapReaderFactory = factory.cMapReaderFactory;
    this.standardFontDataFactory = factory.standardFontDataFactory;
    questo.distrutto = falso;
    this.destroyCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.downloadInfoCapability = new _util.PromiseCapability();
    questo.setupMessageHandler();
  }
  #cacheSimpleMethod(nome, dati = null) {
    const cachedPromise = this.#methodPromises.get(name);
    se (cachedPromise) {
      restituisci cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise(nome, dati);
    questo.#methodPromises.set(nome, promessa);
    promessa di ritorno;
  }
  ottieni annotationStorage() {
    return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
  }
  getRenderingIntent(intento, annotationMode = _util.AnnotationMode.ENABLE, printAnnotationStorage = null, isOpList = false) {
    lascia renderingIntent = _util.RenderingIntentFlag.DISPLAY;
    lascia annotationStorageSerializable = _annotation_storage.SerializableEmpty;
    interruttore (intento) {
      caso "qualsiasi":
        renderingIntent = _util.RenderingIntentFlag.ANY;
        rottura;
      caso "display":
        rottura;
      caso "stampa":
        renderingIntent = _util.RenderingIntentFlag.PRINT;
        rottura;
      predefinito:
        (0, _util.warn)(`getRenderingIntent - intento non valido: ${intent}`);
    }
    switch (annotationMode) {
      caso _util.AnnotationMode.DISABLE:
        renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
        rottura;
      caso _util.AnnotationMode.ENABLE:
        rottura;
      caso _util.AnnotationMode.ENABLE_FORMS:
        renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
        rottura;
      caso _util.AnnotationMode.ENABLE_STORAGE:
        renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
        const annotationStorage = renderingIntent & _util.RenderingIntentFlag.PRINT && printAnnotationStorage instanceof _annotation_storage.PrintAnnotationStorage ? printAnnotationStorage : this.annotationStorage;
        annotationStorageSerializable = annotationStorage.serializable;
        rottura;
      predefinito:
        (0, _util.warn)(`getRenderingIntent - annotationMode non valido: ${annotationMode}`);
    }
    se (isOpList) {
      renderingIntent += _util.RenderingIntentFlag.OPLIST;
    }
    ritorno {
      renderingIntent,
      cacheKey: `${renderingIntent}_${annotationStorageSerializable.hash}`,
      annotazioneStorageSerializable
    };
  }
  distruggere() {
    se (this.destroyCapability) {
      restituisci this.destroyCapability.promise;
    }
    questo.distrutto = vero;
    this.destroyCapability = new _util.PromiseCapability();
    this.#passwordCapability?.reject(new Error("Il worker è stato distrutto durante il callback onPassword"));
    const waitOn = [];
    per (const pagina di questo.#pageCache.values()) {
      waitOn.push(page._destroy());
    }
    questo.#pageCache.clear();
    questo.#pagePromises.clear();
    se (this.hasOwnProperty("annotationStorage")) {
      this.annotationStorage.resetModified();
    }
    const terminated = this.messageHandler.sendWithPromise("Terminate", null);
    waitOn.push(terminato);
    Promessa.all(waitOn).then(() => {
      questo.commonObjs.clear();
      questo.fontLoader.clear();
      questo.#methodPromises.clear();
      this.filterFactory.destroy();
      this._networkStream?.cancelAllRequests(new _util.AbortException("Il lavoratore è stato terminato."));
      se (questo.gestoremessaggi) {
        questo.gestoredelmessaggio.distruggi();
        this.messageHandler = null;
      }
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    restituisci this.destroyCapability.promise;
  }
  setupMessageHandler() {
    costante {
      gestore dei messaggi,
      caricamentoAttività
    } = questo;
    messageHandler.on("GetReader", (dati, sink) => {
      (0, _util.assert)(this._networkStream, "GetReader - nessuna istanza di `IPDFStream` disponibile.");
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = evt => {
        questo._ultimoProgresso = {
          caricato: evt.loaded,
          totale: evt.total
        };
      };
      sink.onPull = () => {
        this._fullReader.read().then(funzione ({
          valore,
          Fatto
        }) {
          se (fatto) {
            lavandino.chiudi();
            ritorno;
          }
          (0, _util.assert)(value instanceof ArrayBuffer, "GetReader - previsto un ArrayBuffer.");
          sink.enqueue(new Uint8Array(valore), 1, [valore]);
        }).catch(motivo => {
          sink.error(motivo);
        });
      };
      sink.onCancel = motivo => {
        this._fullReader.cancel(motivo);
        sink.ready.catch(readyReason => {
          se (questo.distrutto) {
            ritorno;
          }
          lancio prontoMotivo;
        });
      };
    });
    messageHandler.on("ReaderHeadersReady", data => {
      const headersCapability = new _util.PromiseCapability();
      const fullReader = this._fullReader;
      fullReader.headersReady.then(() => {
        se (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
          se (this._lastProgress) {
            caricamentoTask.onProgress?.(this._lastProgress);
          }
          fullReader.onProgress = evt => {
            caricamentoAttività.inProgresso?.({
              caricato: evt.loaded,
              totale: evt.total
            });
          };
        }
        intestazioniCapability.resolve({
          isStreamingSupported: fullReader.isStreamingSupported,
          isRangeSupported: fullReader.isRangeSupported,
          lunghezza del contenuto: fullReader.lunghezza del contenuto
        });
      }, headersCapability.reject);
      restituisci intestazioniCapability.promise;
    });
    messageHandler.on("GetRangeReader", (dati, sink) => {
      (0, _util.assert)(this._networkStream, "GetRangeReader - nessuna istanza di `IPDFStream` disponibile.");
      const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
      se (!rangeReader) {
        lavandino.chiudi();
        ritorno;
      }
      sink.onPull = () => {
        rangeReader.read().then(funzione ({
          valore,
          Fatto
        }) {
          se (fatto) {
            lavandino.chiudi();
            ritorno;
          }
          (0, _util.assert)(value instanceof ArrayBuffer, "GetRangeReader - previsto un ArrayBuffer.");
          sink.enqueue(new Uint8Array(valore), 1, [valore]);
        }).catch(motivo => {
          sink.error(motivo);
        });
      };
      sink.onCancel = motivo => {
        rangeReader.cancel(motivo);
        sink.ready.catch(readyReason => {
          se (questo.distrutto) {
            ritorno;
          }
          lancio prontoMotivo;
        });
      };
    });
    messageHandler.on("GetDoc", ({
      pdfInfo
    }) => {
      this._numPages = pdfInfo.numPages;
      this._htmlForXfa = pdfInfo.htmlForXfa;
      elimina pdfInfo.htmlForXfa;
      loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
    });
    messageHandler.on("DocException", funzione (es.) {
      lascia che la ragione;
      switch (es.nome) {
        caso "PasswordException":
          motivo = nuovo _util.PasswordException(es.messaggio, es.codice);
          rottura;
        caso "InvalidPDFException":
          motivo = nuovo _util.InvalidPDFException(ex.message);
          rottura;
        caso "MissingPDFException":
          motivo = nuovo _util.MissingPDFException(ex.message);
          rottura;
        caso "UnexpectedResponseException":
          motivo = nuovo _util.UnexpectedResponseException(es.messaggio, es.stato);
          rottura;
        caso "UnknownErrorException":
          motivo = nuovo _util.UnknownErrorException(es.messaggio, es.dettagli);
          rottura;
        predefinito:
          (0, _util.unreachable)("DocException - previsto un errore valido.");
      }
      loadingTask._capability.reject(motivo);
    });
    messageHandler.on("PasswordRequest", eccezione => {
      questo.#passwordCapability = nuovo _util.PromiseCapability();
      se (loadingTask.onPassword) {
        const updatePassword = password => {
          se (password instanceof Errore) {
            questo.#passwordCapability.reject(password);
          } altro {
            questo.#passwordCapability.resolve({
              password
            });
          }
        };
        Tentativo {
          caricamentoAttività.onPassword(updatePassword, eccezione.codice);
        } catturare (es.) {
          questo.#passwordCapability.reject(es);
        }
      } altro {
        this.#passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
      }
      restituisci questo.#passwordCapability.promise;
    });
    messageHandler.on("Dati caricati", dati => {
      caricamentoAttività.inProgresso?.({
        caricato: data.length,
        totale: lunghezza dati
      });
      this.downloadInfoCapability.resolve(dati);
    });
    messageHandler.on("StartRenderPage", dati => {
      se (questo.distrutto) {
        ritorno;
      }
      const pagina = this.#pageCache.get(data.pageIndex);
      pagina._startRenderPage(dati.trasparenza, dati.cacheKey);
    });
    messageHandler.on("commonobj", ([id, tipo, dati esportati]) => {
      se (questo.distrutto) {
        ritorno;
      }
      se (this.commonObjs.has(id)) {
        ritorno;
      }
      interruttore (tipo) {
        caso "Font":
          const params = this._params;
          se ("errore" in exportedData) {
            const exportedError = exportedData.error;
            (0, _util.warn)(`Errore durante il caricamento del font: ${exportedError}`);
            this.commonObjs.resolve(id, exportedError);
            rottura;
          }
          const inspectFont = params.pdfBug && globalThis.FontInspector?.enabled ? (font, url) => globalThis.FontInspector.fontAdded(font, url) : null;
          const font = new _font_loader.FontFaceObject(exportedData, {
            isEvalSupported: params.isEvalSupported,
            disableFontFace: parametri.disableFontFace,
            ignoreErrors: params.ignoreErrors,
            ispezionaFont
          });
          this.fontLoader.bind(font).catch(reason => {
            restituisci messageHandler.sendWithPromise("FontFallback", {
              id
            });
          }).finally(() => {
            se (!params.fontExtraProperties && font.data) {
              font.data = null;
            }
            this.commonObjs.resolve(id, font);
          });
          rottura;
        caso "FontPath":
        caso "Immagine":
        caso "Modello":
          this.commonObjs.resolve(id, exportedData);
          rottura;
        predefinito:
          throw new Error(`È stato ottenuto un tipo di oggetto comune sconosciuto ${type}`);
      }
    });
    messageHandler.on("obj", ([id, pageIndex, tipo, imageData]) => {
      se (questo.distrutto) {
        ritorno;
      }
      const pageProxy = this.#pageCache.get(pageIndex);
      se (pageProxy.objs.has(id)) {
        ritorno;
      }
      interruttore (tipo) {
        caso "Immagine":
          pageProxy.objs.resolve(id, imageData);
          se (datiimmagine) {
            lascia la lunghezza;
            se (imageData.bitmap) {
              costante {
                larghezza,
                altezza
              } = datiimmagine;
              lunghezza = larghezza * altezza * 4;
            } altro {
              lunghezza = imageData.data?.length || 0;
            }
            se (lunghezza > _util.MAX_IMAGE_SIZE_TO_CACHE) {
              pageProxy._maybeCleanupAfterRender = true;
            }
          }
          rottura;
        caso "Modello":
          pageProxy.objs.resolve(id, imageData);
          rottura;
        predefinito:
          lancia un nuovo errore(`Tipo di oggetto sconosciuto ${type}`);
      }
    });
    messageHandler.on("DocProgress", dati => {
      se (questo.distrutto) {
        ritorno;
      }
      caricamentoAttività.inProgresso?.({
        caricato: dati.caricati,
        totale: dati.totale
      });
    });
    messageHandler.on("FetchBuiltInCMap", dati => {
      se (questo.distrutto) {
        return Promise.reject(new Error("Il lavoratore è stato distrutto."));
      }
      se (!this.cMapReaderFactory) {
        return Promise.reject(new Error("CMapReaderFactory non inizializzato, vedere il parametro `useWorkerFetch`."));
      }
      restituisci this.cMapReaderFactory.fetch(data);
    });
    messageHandler.on("FetchStandardFontData", dati => {
      se (questo.distrutto) {
        return Promise.reject(new Error("Il lavoratore è stato distrutto."));
      }
      se (!this.standardFontDataFactory) {
        return Promise.reject(new Error("StandardFontDataFactory non inizializzato, vedere il parametro `useWorkerFetch`."));
      }
      restituisci questo.standardFontDataFactory.fetch(dati);
    });
  }
  getData() {
    restituisci this.messageHandler.sendWithPromise("GetData", null);
  }
  salvaDocumento() {
    se (questa.annotazioneStorage.dimensione <= 0) {
      (0, _util.warn)("saveDocument chiamato mentre `annotationStorage` è vuoto, " + "utilizzare invece il metodo getData.");
    }
    costante {
      mappa,
      trasferimenti
    } = this.annotationStorage.serializable;
    restituisci this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: questo._numPages,
      annotazioneArchiviazione: mappa,
      nome file: this._fullReader?.filename ?? null
    }, trasferimenti).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(numeropagina) {
    if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPagine) {
      return Promise.reject(new Error("Richiesta di pagina non valida."));
    }
    const indicepagina = numeropagina - 1,
      cachedPromise = this.#pagePromises.get(pageIndex);
    se (cachedPromise) {
      restituisci cachedPromise;
    }
    promessa costante = this.messageHandler.sendWithPromise("GetPage", {
      indice della pagina
    }).then(pageInfo => {
      se (questo.distrutto) {
        genera un nuovo errore("Trasporto distrutto");
      }
      const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.pdfBug);
      questo.#pageCache.set(pageIndex, pagina);
      pagina di ritorno;
    });
    questo.#pagePromises.set(pageIndex, promise);
    promessa di ritorno;
  }
  getPageIndex(rif) {
    se (tipo di riferimento !== "oggetto" || riferimento === null || !Numero.èIntero(rif.num) || rif.num < 0 || !Numero.èIntero(rif.gen) || rif.gen < 0) {
      return Promise.reject(new Error("Richiesta pageIndex non valida."));
    }
    restituisci this.messageHandler.sendWithPromise("GetPageIndex", {
      num: rif.num,
      gen: ref.gen
    });
  }
  getAnnotations(pageIndex, intent) {
    restituisci this.messageHandler.sendWithPromise("OttieniAnnotazioni", {
      indice della pagina,
      intento
    });
  }
  getFieldObjects() {
    restituisci questo.#cacheSimpleMethod("GetFieldObjects");
  }
  haJSAzioni() {
    restituisci questo.#cacheSimpleMethod("HasJSActions");
  }
  getCalculationOrderIds() {
    restituisci this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    restituisci this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(id) {
    se (tipo di id !== "stringa") {
      return Promise.reject(new Error("Richiesta di destinazione non valida."));
    }
    restituisci this.messageHandler.sendWithPromise("GetDestination", {
      id
    });
  }
  ottieniEtichettePagina() {
    restituisci this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    restituisci this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    restituisci this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    restituisci this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    restituisci this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  ottieniAllegati() {
    restituisci this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    restituisci questo.#cacheSimpleMethod("GetDocJSActions");
  }
  getPageJSActions(indicepagina) {
    restituisci this.messageHandler.sendWithPromise("GetPageJSActions", {
      indice della pagina
    });
  }
  getStructTree(indicepagina) {
    restituisci this.messageHandler.sendWithPromise("GetStructTree", {
      indice della pagina
    });
  }
  ottieniContorno() {
    restituisci this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig() {
    restituisci this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(results => {
      restituisci nuovo _optional_content_config.OptionalContentConfig(risultati);
    });
  }
  ottieniPermessi() {
    restituisci this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  ottieniMetadati() {
    const name = "GetMetadata",
      cachedPromise = this.#methodPromises.get(name);
    se (cachedPromise) {
      restituisci cachedPromise;
    }
    promessa costante = this.messageHandler.sendWithPromise(nome, null).then(risultati => {
      ritorno {
        informazioni: risultati[0],
        metadati: risultati[1] ? nuovo _metadata.Metadata(risultati[1]) : null,
        contentDispositionFilename: this._fullReader?.filename ?? null,
        lunghezza del contenuto: this._fullReader?.lunghezza del contenuto ?? null
      };
    });
    questo.#methodPromises.set(nome, promessa);
    promessa di ritorno;
  }
  getMarkInfo() {
    restituisci this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(keepLoadedFonts = false) {
    se (questo.distrutto) {
      ritorno;
    }
    attendi this.messageHandler.sendWithPromise("Cleanup", null);
    per (const pagina di questo.#pageCache.values()) {
      const cleanupSuccessful = page.cleanup();
      se (!cleanupSuccessful) {
        throw new Error(`startCleanup: la pagina ${page.pageNumber} è attualmente in fase di rendering.`);
      }
    }
    questo.commonObjs.clear();
    se (!keepLoadedFonts) {
      questo.fontLoader.clear();
    }
    questo.#methodPromises.clear();
    this.filterFactory.destroy(true);
  }
  ottieni loadingParams() {
    costante {
      Disabilita AutoFetch,
      enableXfa
    } = questo._parametri;
    return (0, _util.shadow)(this, "loadingParams", {
      Disabilita AutoFetch,
      enableXfa
    });
  }
}
classe PDFObjects {
  #objs = Object.create(null);
  #ensureObj(objId) {
    restituisci questo.#objs[objId] ||= {
      capacità: nuovo _util.PromiseCapability(),
      dati: nulli
    };
  }
  get(objId, callback = null) {
    se (richiamata) {
      const obj = this.#ensureObj(objId);
      obj.capability.promise.then(() => callback(obj.data));
      restituisci null;
    }
    const obj = this.#objs[objId];
    se (!obj?.capacità.risolto) {
      throw new Error(`Richiesta di un oggetto non ancora risolto ${objId}.`);
    }
    restituisci obj.data;
  }
  ha(objId) {
    const obj = this.#objs[objId];
    restituisci obj?.capability.settled || falso;
  }
  resolve(objId, data = null) {
    const obj = this.#ensureObj(objId);
    obj.data = dati;
    obj.capacità.risolvi();
  }
  chiaro() {
    per (const objId in questo.#objs) {
      costante {
        dati
      } = questo.#objs[objId];
      dati?.bitmap?.chiudi();
    }
    questo.#objs = Object.create(null);
  }
}
classe RenderTask {
  #internalRenderTask = null;
  costruttore(internalRenderTask) {
    questo.#internalRenderTask = internalRenderTask;
    this.onContinue = null;
  }
  ottieni promessa() {
    restituisci questo.#internalRenderTask.capability.promise;
  }
  annulla(ritardoextra = 0) {
    questo.#internalRenderTask.cancel(null, extraDelay);
  }
  ottieni separateAnnots() {
    costante {
      separateAnnots
    } = this.#internalRenderTask.operatorList;
    se (!separateAnnots) {
      restituisci falso;
    }
    costante {
      annotazioneCanvasMap
    } = questo.#internalRenderTask;
    restituisci separateAnnots.form || separateAnnots.canvas && annotationCanvasMap?.size > 0;
  }
}
esportazioni.RenderTask = RenderTask;
classe InternalRenderTask {
  statico #canvasInUse = new WeakSet();
  costruttore({
    richiamare,
    parametri,
    oggetti,
    commonObjs,
    annotazioneCanvasMap,
    elenco degli operatori,
    indice della pagina,
    Fabbrica di tele,
    filterFactory,
    useRequestAnimationFrame = false,
    pdfBug = falso,
    pageColors = null
  }) {
    questo.callback = callback;
    questo.parametri = parametri;
    questo.objs = objs;
    questo.commonObjs = commonObjs;
    this.annotationCanvasMap = annotationCanvasMap;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this._pageIndex = pageIndex;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    questo._pdfBug = pdfBug;
    this.pageColors = pageColors;
    questo.in esecuzione = falso;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame = useRequestAnimationFrame === true && tipo di finestra !== "non definito";
    questo.annullato = falso;
    this.capability = new _util.PromiseCapability();
    questo.task = nuovo RenderTask(questo);
    this._cancelBound = this.cancel.bind(this);
    questo._continuaBound = questo._continua.lega(questo);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvasContext.canvas;
  }
  ottenere completato() {
    restituisci this.capability.promise.catch(function () {});
  }
  inizializzaGrafica({
    trasparenza = falso,
    optionalContentConfig
  }) {
    se (questo.annullato) {
      ritorno;
    }
    se (this._canvas) {
      se (InternalRenderTask.#canvasInUse.has(this._canvas)) {
        throw new Error("Impossibile utilizzare la stessa tela durante più operazioni render(). " + "Utilizzare una tela diversa o assicurarsi che le operazioni precedenti siano state " + "annullate o completate.");
      }
      InternalRenderTask.#canvasInUse.add(this._canvas);
    }
    se (this._pdfBug && globalThis.StepperManager?.enabled) {
      questo.stepper = globaleQuesto.StepperManager.create(questo._pageIndex);
      questo.stepper.init(questo.elencooperatori);
      questo.stepper.nextBreakPoint = questo.stepper.getNextBreakPoint();
    }
    costante {
      contestotela,
      finestra,
      trasformare,
      sfondo
    } = questo.parametri;
    this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig
    }, this.annotationCanvasMap, this.pageColors);
    this.gfx.beginDrawing({
      trasformare,
      finestra,
      trasparenza,
      sfondo
    });
    questo.operatorListIdx = 0;
    this.graphicsReady = true;
    this.graphicsReadyCallback?.();
  }
  annulla(errore = null, ritardo extra = 0) {
    questo.in esecuzione = falso;
    questo.annullato = vero;
    questo.gfx?.endDrawing();
    InternalRenderTask.#canvasInUse.delete(this._canvas);
    this.callback(error || new _display_utils.RenderingCancelledException(`Rendering annullato, pagina ${this._pageIndex + 1}`, extraDelay));
  }
  operatorListChanged() {
    se (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      ritorno;
    }
    questo.stepper?.updateOperatorList(questo.operatorList);
    se (questo.in esecuzione) {
      ritorno;
    }
    questo._continua();
  }
  _continua() {
    questo.in esecuzione = vero;
    se (questo.annullato) {
      ritorno;
    }
    se (this.task.onContinue) {
      this.task.onContinue(this._scheduleNextBound);
    } altro {
      questo._scheduleNext();
    }
  }
  _scheduleNext() {
    se (this._useRequestAnimationFrame) {
      finestra.requestAnimationFrame(() => {
        this._nextBound().catch(this._cancelBound);
      });
    } altro {
      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
  }
  asincrono _next() {
    se (questo.annullato) {
      ritorno;
    }
    this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
    se (this.operatorListIdx === this.operatorList.argsArray.length) {
      questo.in esecuzione = falso;
      se (questo.elencooperatori.ultimoChunk) {
        questo.gfx.endDrawing();
        InternalRenderTask.#canvasInUse.delete(this._canvas);
        questo.callback();
      }
    }
  }
}
versione costante = '3.11.174';
exports.version = versione;
const build = 'ce8716743';
esportazioni.build = build;

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.SerializableEmpty = esportazioni.PrintAnnotationStorage = esportazioni.AnnotationStorage = void 0;
var _util = __w_pdfjs_require__(1);
var _editor = __w_pdfjs_require__(4);
var _murmurhash = __w_pdfjs_require__(8);
const SerializableEmpty = Object.freeze({
  mappa: nullo,
  cancelletto: "",
  trasferimenti: indefiniti
});
esportazioni.SerializableEmpty = SerializableEmpty;
classe AnnotationStorage {
  #modificato = falso;
  #archiviazione = nuova mappa();
  costruttore() {
    this.onSetModified = null;
    this.onResetModified = null;
    this.onAnnotationEditor = null;
  }
  getValue(chiave, valorepredefinito) {
    valore costante = questo.#archiviazione.get(chiave);
    se (valore === indefinito) {
      restituisci valorepredefinito;
    }
    restituisci Object.assign(defaultValue, valore);
  }
  getRawValue(chiave) {
    restituisci questo.#storage.get(key);
  }
  rimuovi(chiave) {
    questo.#storage.delete(chiave);
    se (questo.#dimensione.archiviazione === 0) {
      questo.resetModificato();
    }
    se (tipo di this.onAnnotationEditor === "funzione") {
      per (valore costante di questo.#storage.values()) {
        se (valore instanceof _editor.AnnotationEditor) {
          ritorno;
        }
      }
      this.onAnnotationEditor(null);
    }
  }
  setValue(chiave, valore) {
    const obj = this.#storage.get(key);
    lascia modificato = falso;
    se (oggetto !== indefinito) {
      per (const [voce, valore] di Object.entries(valore)) {
        se (oggetto[voce] !== valore) {
          modificato = vero;
          oggetto[voce] = valore;
        }
      }
    } altro {
      modificato = vero;
      questo.#storage.set(chiave, valore);
    }
    se (modificato) {
      questo.#setModified();
    }
    if (value instanceof _editor.AnnotationEditor && typeof this.onAnnotationEditor === "function") {
      this.onAnnotationEditor(value.constructor._type);
    }
  }
  ha(chiave) {
    restituisci questo.#storage.has(key);
  }
  ottieniTutto() {
    restituisci questo.#storage.size > 0 ? (0, _util.objectFromMap)(this.#storage) : null;
  }
  imposta tutto (oggetto) {
    per (const [chiave, val] di Object.entries(obj)) {
      this.setValue(chiave, valore);
    }
  }
  ottieni dimensione() {
    restituisci questo.#storage.size;
  }
  #setModified() {
    se (!questo.#modificato) {
      questo.#modificato = vero;
      se (tipo di this.onSetModified === "funzione") {
        questo.onSetModified();
      }
    }
  }
  resetModificato() {
    se (questo.#modificato) {
      questo.#modificato = falso;
      se (tipo di this.onResetModified === "funzione") {
        questo.onResetModified();
      }
    }
  }
  ottieni stampa() {
    restituisci nuovo PrintAnnotationStorage(this);
  }
  ottieni serializzabile() {
    se (questo.#dimensione.archiviazione === 0) {
      restituisci SerializableEmpty;
    }
    const map = nuova mappa(),
      hash = nuovo _murmurhash.MurmurHash3_64(),
      trasferimenti = [];
    const contesto = Object.create(null);
    lascia che hasBitmap = false;
    per (const [chiave, valore] di questo.#archiviazione) {
      const serialized = val instanceof _editor.AnnotationEditor ? val.serialize(false, context) : val;
      se (serializzato) {
        map.set(chiave, serializzato);
        hash.update(`${key}:${JSON.stringify(serializzato)}`);
        hasBitmap ||= !!serialized.bitmap;
      }
    }
    se (haBitmap) {
      per (valore costante di map.values()) {
        se (valore.bitmap) {
          trasferimenti.push(valore.bitmap);
        }
      }
    }
    restituisci map.size > 0 ? {
      mappa,
      hash: hash.hexdigest(),
      trasferimenti
    } : SerializableEmpty;
  }
}
esportazioni.AnnotationStorage = AnnotationStorage;
classe PrintAnnotationStorage estende AnnotationStorage {
  #serializzabile;
  costruttore(genitore) {
    super();
    costante {
      mappa,
      hashish,
      trasferimenti
    } = genitore.serializzabile;
    const clone = structuredClone(map, trasferimenti ? {
      trasferimento: trasferimenti
    } : nullo);
    questo.#serializzabile = {
      mappa: clone,
      hashish,
      trasferimenti
    };
  }
  ottieni stampa() {
    (0, _util.unreachable)("Non dovrebbe chiamare PrintAnnotationStorage.print");
  }
  ottieni serializzabile() {
    restituisci questo.#serializable;
  }
}
esportazioni.PrintAnnotationStorage = PrintAnnotationStorage;

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.AnnotationEditor = void 0;
var _tools = __w_pdfjs_require__(5);
var _util = __w_pdfjs_require__(1);
var _display_utils = __w_pdfjs_require__(6);
classe AnnotationEditor {
  #testoalt = "";
  #altTextDecorative = false;
  #altTextButton = null;
  #altTextTooltip = null;
  #altTextTooltipTimeout = null;
  #keepAspectRatio = false;
  #resizersDiv = null;
  #boundFocusin = this.focusin.bind(this);
  #boundFocusout = this.focusout.bind(this);
  #hasBeenClicked = false;
  #isEditing = false;
  #isInEditMode = false;
  _initialOptions = Object.create(null);
  _uiManager = null;
  _focusEventsAllowed = true;
  _l10nPromise = null;
  #isDraggable = false;
  #zIndex = AnnotationEditor._zIndex++;
  statico _borderLineWidth = -1;
  static _colorManager = new _tools.ColorManager();
  statico _zIndex = 1;
  statico SMALL_EDITOR_SIZE = 0;
  costruttore(parametri) {
    se (questo.costruttore === AnnotationEditor) {
      (0, _util.unreachable)("Impossibile inizializzare AnnotationEditor.");
    }
    questo.genitore = parametri.genitore;
    questo.id = parametri.id;
    questa.larghezza = questa.altezza = null;
    this.pageIndex = parametri.parent.pageIndex;
    questo.nome = parametri.nome;
    questo.div = null;
    this._uiManager = parametri.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = parametri.isCentered;
    this._structTreeParentId = null;
    costante {
      rotazione,
      rawDims: {
        Larghezza pagina,
        altezza della pagina,
        paginaX,
        paginaY
      }
    } = this.parent.viewport;
    this.rotation = rotazione;
    this.pageRotation = (360 + rotazione - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [larghezzapagina, altezzapagina];
    this.pageTranslation = [paginaX, paginaY];
    const [larghezza, altezza] = this.parentDimensions;
    questo.x = parametri.x / larghezza;
    this.y = parametri.y / altezza;
    this.isAttachedToDOM = false;
    questo.eliminato = falso;
  }
  ottieni editorType() {
    restituisci Object.getPrototypeOf(this).constructor._type;
  }
  statico ottieni _defaultLineColor() {
    return (0, _util.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(editor) {
    const fakeEditor = new FakeEditor({
      id: editor.parent.getNextId(),
      genitore: editor.genitore,
      uiManager: editor._uiManager
    });
    fakeEditor.annotationElementId = editor.annotationElementId;
    fakeEditor.deleted = true;
    fakeEditor._uiManager.addToAnnotationStorage(fakeEditor);
  }
  static initialize(l10n, options = null) {
    AnnotationEditor._l10nPromise ||= new Map(["editor_alt_text_button_label", "editor_alt_text_edit_button_label", "editor_alt_text_decorative_tooltip"].map(str => [str, l10n.get(str)]));
    se (opzioni?.stringhe) {
      per (const str di opzioni.stringhe) {
        AnnotationEditor._l10nPromise.set(str, l10n.get(str));
      }
    }
    se (AnnotationEditor._borderLineWidth !== -1) {
      ritorno;
    }
    stile const = getComputedStyle(document.documentElement);
    AnnotationEditor._borderLineWidth = parseFloat(style.getPropertyValue("--outline-width")) || 0;
  }
  aggiornamento staticoDefaultParams(_tipo, _valore) {}
  statico ottieni defaultPropertiesToUpdate() {
    ritorno [];
  }
  statico isHandlingMimeForPasting(mime) {
    restituisci falso;
  }
  static paste(elemento, genitore) {
    (0, _util.unreachable)("Non implementato");
  }
  ottieni propertiesToUpdate() {
    ritorno [];
  }
  ottieni _isDraggable() {
    restituisci questo.#isDraggable;
  }
  imposta _isDraggable(valore) {
    questo.#ètrascinabile = valore;
    this.div?.classList.toggle("trascinabile", valore);
  }
  centro() {
    const [larghezzapagina, altezzapagina] = this.pageDimensions;
    switch (this.parentRotation) {
      caso 90:
        this.x -= this.height * pageHeight / (pageWidth * 2);
        this.y += this.width * pageWidth / (pageHeight * 2);
        rottura;
      caso 180:
        questo.x += questa.larghezza / 2;
        questo.y += questa.altezza / 2;
        rottura;
      caso 270:
        this.x += this.height * pageHeight / (pageWidth * 2);
        this.y -= this.width * pageWidth / (pageHeight * 2);
        rottura;
      predefinito:
        questo.x -= questa.larghezza / 2;
        questo.y -= questa.altezza / 2;
        rottura;
    }
    questo.fixAndSetPosition();
  }
  aggiungiComandi(parametri) {
    this._uiManager.addCommands(parametri);
  }
  ottieni currentLayer() {
    restituisci questo._uiManager.currentLayer;
  }
  impostaInSfondo() {
    questo.div.style.zIndex = 0;
  }
  impostaInPrimo Piano() {
    questo.div.style.zIndex = questo.#zIndex;
  }
  setParent(genitore) {
    se (genitore !== null) {
      this.pageIndex = parent.pageIndex;
      this.pageDimensions = parent.pageDimensions;
    }
    questo.genitore = genitore;
  }
  focusin(evento) {
    se (!this._focusEventsAllowed) {
      ritorno;
    }
    se (!this.#hasBeenClicked) {
      questo.genitore.setSelected(questo);
    } altro {
      questo.#hasBeenClicked = false;
    }
  }
  focusout(evento) {
    se (!this._focusEventsAllowed) {
      ritorno;
    }
    se (!this.isAttachedToDOM) {
      ritorno;
    }
    const target = event.relatedTarget;
    se (target?.closest(`#${this.id}`)) {
      ritorno;
    }
    evento.prevenzioneDefault();
    se (!this.parent?.isMultipleSelection) {
      questo.commitOrRemove();
    }
  }
  commitOrRemove() {
    se (questo.èVuoto()) {
      questo.rimuovi();
    } altro {
      questo.commit();
    }
  }
  commetti() {
    this.addToAnnotationStorage();
  }
  aggiungiAlloStorageAnnotazione() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(x, y, tx, ty) {
    const [larghezza, altezza] = this.parentDimensions;
    [tx, ty] = this.screenToPageTranslation(tx, ty);
    this.x = (x + tx) / larghezza;
    this.y = (y + ty) / altezza;
    questo.fixAndSetPosition();
  }
  #translate([larghezza, altezza], x, y) {
    [x, y] = this.screenToPageTranslation(x, y);
    questo.x += x / larghezza;
    this.y += y / altezza;
    questo.fixAndSetPosition();
  }
  traduci(x, y) {
    questo.#translate(questo.parentDimensions, x, y);
  }
  traduciInPagina(x, y) {
    questo.#translate(questo.pageDimensions, x, y);
    this.div.scrollIntoView({
      blocco: "più vicino"
    });
  }
  trascina(tx, ty) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.x += tx / parentWidth;
    this.y += ty / parentHeight;
    se (questo.genitore && (questo.x < 0 || questo.x > 1 || questo.y < 0 || questo.y > 1)) {
      costante {
        X,
        e
      } = this.div.getBoundingClientRect();
      se (questo.genitore.trovaNuovoGenitore(questo, x, y)) {
        questo.x -= Math.floor(questo.x);
        questo.y -= Math.floor(questo.y);
      }
    }
    permettere {
      X,
      e
    } = questo;
    const [bx, by] = this.#getBaseTranslation();
    x += bx;
    y += di;
    questo.div.style.left = `${(100 * x).toFixed(2)}%`;
    this.div.style.top = `${(100 * y).toFixed(2)}%`;
    this.div.scrollIntoView({
      blocco: "più vicino"
    });
  }
  #getBaseTranslation() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    costante {
      _larghezza della linea di confine
    } = Editor di annotazioni;
    const x = _borderLineWidth / parentWidth;
    const y = _borderLineWidth / parentHeight;
    interruttore (questa rotazione) {
      caso 90:
        ritorno [-x, y];
      caso 180:
        ritorno [x, y];
      caso 270:
        ritorno [x, -y];
      predefinito:
        ritorno [-x, -y];
    }
  }
  fixAndSetPosition() {
    const [larghezzapagina, altezzapagina] = this.pageDimensions;
    permettere {
      X,
      e,
      larghezza,
      altezza
    } = questo;
    larghezza *= larghezzapagina;
    altezza *= altezzapagina;
    x *= larghezzapagina;
    y *= altezzapagina;
    interruttore (questa rotazione) {
      caso 0:
        x = Math.max(0, Math.min(pageWidth - larghezza, x));
        y = Math.max(0, Math.min(pageHeight - altezza, y));
        rottura;
      caso 90:
        x = Math.max(0, Math.min(larghezza pagina - altezza, x));
        y = Math.min(altezzapagina, Math.max(larghezza, y));
        rottura;
      caso 180:
        x = Math.min(larghezzapagina, Math.max(larghezza, x));
        y = Math.min(altezzapagina, Math.max(altezza, y));
        rottura;
      caso 270:
        x = Math.min(larghezzapagina, Math.max(altezza, x));
        y = Math.max(0, Math.min(pageHeight - width, y));
        rottura;
    }
    this.x = x /= larghezzapagina;
    this.y = y /= altezzapagina;
    const [bx, by] = this.#getBaseTranslation();
    x += bx;
    y += di;
    costante {
      stile
    } = questo.div;
    stile.sinistra = `${(100 * x).toFixed(2)}%`;
    stile.top = `${(100 * y).toFixed(2)}%`;
    questo.moveInDOM();
  }
  static #rotatePoint(x, y, angolo) {
    interruttore (angolo) {
      caso 90:
        ritorno [y, -x];
      caso 180:
        ritorno [-x, -y];
      caso 270:
        ritorno [-y, x];
      predefinito:
        ritorno [x, y];
    }
  }
  screenToPageTranslation(x, y) {
    restituisci AnnotationEditor.#rotatePoint(x, y, this.parentRotation);
  }
  paginaTraduzioneSuSchermo(x, y) {
    restituisci AnnotationEditor.#rotatePoint(x, y, 360 - this.parentRotation);
  }
  #getRotationMatrix(rotazione) {
    interruttore (rotazione) {
      caso 90:
        {
          const [larghezzapagina, altezzapagina] = this.pageDimensions;
          ritorna [0, -pageWidth / pageHeight, pageHeight / pageWidth, 0];
        }
      caso 180:
        ritorno [-1, 0, 0, -1];
      caso 270:
        {
          const [larghezzapagina, altezzapagina] = this.pageDimensions;
          restituisci [0, larghezzapagina / altezzapagina, -altezzapagina / larghezzapagina, 0];
        }
      predefinito:
        ritorno [1, 0, 0, 1];
    }
  }
  ottieni parentScale() {
    restituisce this._uiManager.viewParameters.realScale;
  }
  ottieni parentRotation() {
    restituisci (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  ottieni parentDimensions() {
    costante {
      parentScale,
      pageDimensions: [larghezza pagina, altezza pagina]
    } = questo;
    const scaledWidth = pageWidth * parentScale;
    const scaledHeight = pageHeight * parentScale;
    restituisce _util.FeatureTest.isCSSRoundSupported ? [Math.round(scaledWidth), Math.round(scaledHeight)] : [scaledWidth, scaledHeight];
  }
  setDims(larghezza, altezza) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.div.style.width = `${(100 * larghezza / parentWidth).toFixed(2)}%`;
    se (!this.#keepAspectRatio) {
      this.div.style.height = `${(100 * altezza / parentHeight).toFixed(2)}%`;
    }
    questo.#altTextButton?.classList.toggle("piccolo", larghezza < AnnotationEditor.SMALL_EDITOR_SIZE || altezza < AnnotationEditor.SMALL_EDITOR_SIZE);
  }
  fixDims() {
    costante {
      stile
    } = questo.div;
    costante {
      altezza,
      larghezza
    } = stile;
    const widthPercent = width.endsWith("%");
    const heightPercent = !this.#keepAspectRatio && height.endsWith("%");
    se (larghezzaPercentuale && altezzaPercentuale) {
      ritorno;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    se (!larghezzaPercentuale) {
      style.width = `${(100 * parseFloat(width) / parentWidth).toFixed(2)}%`;
    }
    se (!this.#keepAspectRatio && !heightPercent) {
      style.height = `${(100 * parseFloat(altezza) / parentHeight).toFixed(2)}%`;
    }
  }
  getInitialTranslation() {
    ritorno [0, 0];
  }
  #createResizers() {
    se (questo.#resizersDiv) {
      ritorno;
    }
    questo.#resizersDiv = document.createElement("div");
    questo.#resizersDiv.classList.add("resizers");
    classi costanti = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
    se (!this._willKeepAspectRatio) {
      classes.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
    }
    per (const nome delle classi) {
      const div = document.createElement("div");
      questo.#resizersDiv.append(div);
      div.classList.add("resizer", nome);
      div.addEventListener("puntatoregiù", this.#resizerPointerdown.bind(this, name));
      div.addEventListener("menu contestuale", _display_utils.noContextMenu);
    }
    this.div.prepend(this.#resizersDiv);
  }
  #resizerPointerdown(nome, evento) {
    evento.prevenzioneDefault();
    costante {
      èMac
    } = _util.FeatureTest.platform;
    se (evento.pulsante !== 0 || evento.ctrlKey && isMac) {
      ritorno;
    }
    const boundResizerPointermove = this.#resizerPointermove.bind(this, name);
    const savedDraggable = this._isDraggable;
    this._isDraggable = false;
    const pointerMoveOptions = {
      passivo: vero,
      cattura: vero
    };
    window.addEventListener("pointermove", boundResizerPointermove, pointerMoveOptions);
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const savedParentCursor = this.parent.div.style.cursor;
    const savedCursor = this.div.style.cursor;
    questo.div.style.cursor = questo.parent.div.style.cursor = window.getComputedStyle(event.target).cursor;
    const pointerUpCallback = () => {
      this._isDraggable = savedDraggable;
      window.removeEventListener("pointerup", pointerUpCallback);
      window.removeEventListener("sfocatura", pointerUpCallback);
      window.removeEventListener("pointermove", boundResizerPointermove, pointerMoveOptions);
      questo.parent.div.style.cursor = savedParentCursor;
      this.div.style.cursor = savedCursor;
      const newX = this.x;
      const newY = this.y;
      const newWidth = this.width;
      const newHeight = this.height;
      if (nuovaX === salvataX && nuovaY === salvataY && nuovaWidth === salvataWidth && nuovaAltezza === salvataAltezza) {
        ritorno;
      }
      questo.aggiungiComandi({
        comando: () => {
          questa.larghezza = nuovaLarghezza;
          this.height = newHeight;
          questo.x = nuovoX;
          questo.y = nuovoY;
          const [parentWidth, parentHeight] = this.parentDimensions;
          this.setDims(parentWidth * newWidth, parentHeight * newHeight);
          questo.fixAndSetPosition();
        },
        annulla: () => {
          questa.larghezza = larghezza salvata;
          this.height = savedHeight;
          questo.x = salvatoX;
          questo.y = salvatoY;
          const [parentWidth, parentHeight] = this.parentDimensions;
          this.setDims(parentWidth * savedWidth, parentHeight * savedHeight);
          questo.fixAndSetPosition();
        },
        mustExec: vero
      });
    };
    window.addEventListener("pointerup", pointerUpCallback);
    window.addEventListener("sfocatura", pointerUpCallback);
  }
  #resizerPointermove(nome, evento) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = AnnotationEditor.MIN_SIZE / parentHeight;
    const round = x => Math.round(x * 10000) / 10000;
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const invRotationMatrix = this.#getRotationMatrix(360 - this.rotation);
    const invTransf = (x, y) => [invRotationMatrix[0] * x + invRotationMatrix[2] * y, invRotationMatrix[1] * x + invRotationMatrix[3] * y];
    lascia getPoint;
    lascia ottenereOpposite;
    lascia che isDiagonal = false;
    lascia che sia orizzontale = falso;
    interruttore (nome) {
      caso "topLeft":
        è Diagonale = vero;
        getPoint = (w, h) => [0, 0];
        getOpposite = (w, h) => [w, h];
        rottura;
      caso "topMiddle":
        getPoint = (w, h) => [w / 2, 0];
        getOpposite = (w, h) => [w / 2, h];
        rottura;
      caso "topRight":
        è Diagonale = vero;
        getPoint = (w, h) => [w, 0];
        getOpposite = (w, h) => [0, h];
        rottura;
      caso "centro-destra":
        èOrizzontale = vero;
        getPoint = (w, h) => [w, h / 2];
        getOpposite = (w, h) => [0, h / 2];
        rottura;
      caso "in basso a destra":
        è Diagonale = vero;
        getPoint = (w, h) => [w, h];
        getOpposite = (w, h) => [0, 0];
        rottura;
      caso "bottomMiddle":
        getPoint = (w, h) => [w / 2, h];
        getOpposite = (w, h) => [w / 2, 0];
        rottura;
      caso "bottomLeft":
        è Diagonale = vero;
        getPoint = (w, h) => [0, h];
        getOpposite = (w, h) => [w, 0];
        rottura;
      caso "centro-sinistra":
        èOrizzontale = vero;
        getPoint = (w, h) => [0, h / 2];
        getOpposite = (w, h) => [w, h / 2];
        rottura;
    }
    const point = getPoint(larghezza salvata, altezza salvata);
    const oppositePoint = getOpposite(savedWidth, savedHeight);
    lascia transfOppositePoint = transf(...oppositePoint);
    const oppositeX = round(savedX + transfOppositePoint[0]);
    const oppositeY = round(savedY + transfOppositePoint[1]);
    lascia rapportoX = 1;
    lascia rapportoY ​​= 1;
    lascia [deltaX, deltaY] = this.screenToPageTranslation(evento.movimentoX, evento.movimentoY);
    [deltaX, deltaY] = invTransf(deltaX / larghezza genitore, deltaY / altezza genitore);
    se (è Diagonale) {
      const oldDiag = Math.hypot(savedWidth, savedHeight);
      ratioX = ratioY = Math.max(Math.min(Math.hypot(oppositePoint[0] - point[0] - deltaX, oppositePoint[1] - point[1] - deltaY) / oldDiag, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    } altrimenti se (è orizzontale) {
      ratioX = Math.max(minWidth, Math.min(1, Math.abs(oppositePoint[0] - point[0] - deltaX))) / savedWidth;
    } altro {
      ratioY = Math.max(minHeight, Math.min(1, Math.abs(oppositePoint[1] - point[1] - deltaY))) / savedHeight;
    }
    const newWidth = round(savedWidth * ratioX);
    const newHeight = round(savedHeight * ratioY);
    transfOppositePoint = transf(...getOpposite(newWidth, newHeight));
    const newX = oppositeX - transfOppositePoint[0];
    const newY = oppostoY - transfOppositePoint[1];
    questa.larghezza = nuovaLarghezza;
    this.height = newHeight;
    questo.x = nuovoX;
    questo.y = nuovoY;
    this.setDims(parentWidth * newWidth, parentHeight * newHeight);
    questo.fixAndSetPosition();
  }
  asincrono addAltTextButton() {
    se (questo.#altTextButton) {
      ritorno;
    }
    const altText = this.#altTextButton = document.createElement("button");
    altText.className = "altText";
    const msg = await AnnotationEditor._l10nPromise.get("editor_alt_text_button_label");
    altText.textContent = msg;
    altText.setAttribute("etichetta-aria", msg);
    altText.tabIndex = "0";
    altText.addEventListener("menu contestuale", _display_utils.noContextMenu);
    altText.addEventListener("puntatore in basso", evento => evento.stopPropagation());
    altText.addEventListener("clic", evento => {
      evento.prevenzioneDefault();
      this._uiManager.editAltText(this);
    }, {
      cattura: vero
    });
    altText.addEventListener("tasto premuto", evento => {
      se (evento.target === altText && evento.chiave === "Invio") {
        evento.prevenzioneDefault();
        this._uiManager.editAltText(this);
      }
    });
    questo.#setAltTextButtonState();
    questo. div.append(altText);
    se (!AnnotationEditor.SMALL_EDITOR_SIZE) {
      costante PERCENTUALE = 40;
      AnnotationEditor.SMALL_EDITOR_SIZE = Math.min(128, Math.round(altText.getBoundingClientRect().width * (1 + PERCENT / 100)));
    }
  }
  asincrono #setAltTextButtonState() {
    const button = this.#altTextButton;
    se (!pulsante) {
      ritorno;
    }
    se (!this.#altText && !this.#altTextDecorative) {
      button.classList.remove("fatto");
      questo.#altTextTooltip?.remove();
      ritorno;
    }
    AnnotationEditor._l10nPromise.get("editor_alt_text_edit_button_label").then(msg => {
      button.setAttribute("aria-label", msg);
    });
    lascia tooltip = this.#altTextTooltip;
    se (!tooltip) {
      questo.#altTextTooltip = tooltip = document.createElement("span");
      tooltip.className = "tooltip";
      tooltip.setAttribute("ruolo", "tooltip");
      const id = tooltip.id = `alt-text-tooltip-${this.id}`;
      button.setAttribute("aria-descritta da", id);
      const DELAY_TO_SHOW_TOOLTIP = 100;
      button.addEventListener("mouseenter", () => {
        questo.#altTextTooltipTimeout = setTimeout(() => {
          questo.#altTextTooltipTimeout = null;
          questo.#altTextTooltip.classList.add("mostra");
          this._uiManager._eventBus.dispatch("reporttelemetry", {
            fonte: questo,
            dettagli: {
              tipo: "modifica",
              sottotipo: this.editorType,
              dati: {
                azione: "alt_text_tooltip"
              }
            }
          });
        }, DELAY_TO_SHOW_TOOLTIP);
      });
      button.addEventListener("mouseleave", () => {
        clearTimeout(this.#altTextTooltipTimeout);
        questo.#altTextTooltipTimeout = null;
        questo.#altTextTooltip?.classList.remove("mostra");
      });
    }
    button.classList.add("fatto");
    tooltip.innerText = this.#altTextDecorative ? await AnnotationEditor._l10nPromise.get("editor_alt_text_decorative_tooltip") : this.#altText;
    se (!tooltip.parentNode) {
      pulsante.append(tooltip);
    }
  }
  getClientDimensions() {
    restituisci this.div.getBoundingClientRect();
  }
  ottieni altTextData() {
    ritorno {
      altText: questo.#altText,
      decorativo: questo.#altTextDecorative
    };
  }
  imposta altTextData({
    testo alternativo,
    decorativo
  }) {
    se (questo.#altText === altText && questo.#altTextDecorativo === decorativo) {
      ritorno;
    }
    questo.#altText = altText;
    questo.#altTextDecorative = decorativo;
    questo.#setAltTextButtonState();
  }
  render() {
    questo.div = document.createElement("div");
    this.div.setAttribute("rotazione-editor-dati", (360 - this.rotation) % 360);
    questo.div.className = questo.nome;
    questo.div.setAttribute("id", questo.id);
    this.div.setAttribute("tabIndex", 0);
    questo.impostaInPrimoPiano();
    this.div.addEventListener("focusin", this.#boundFocusin);
    this.div.addEventListener("focusout", this.#boundFocusout);
    const [parentWidth, parentHeight] = this.parentDimensions;
    se (this.parentRotation % 180 !== 0) {
      this.div.style.maxWidth = `${(100 * parentHeight / parentWidth).toFixed(2)}%`;
      this.div.style.maxHeight = `${(100 * parentWidth / parentHeight).toFixed(2)}%`;
    }
    const [tx, ty] = this.getInitialTranslation();
    questo.traduci(tx, ty);
    (0, _tools.bindEvents)(this, this.div, ["pointerdown"]);
    restituisci questo.div;
  }
  puntatoregiù(evento) {
    costante {
      èMac
    } = _util.FeatureTest.platform;
    se (evento.pulsante !== 0 || evento.ctrlKey && isMac) {
      evento.prevenzioneDefault();
      ritorno;
    }
    questo.#hasBeenClicked = true;
    questo.#setUpDragSession(evento);
  }
  #setUpDragSession(evento) {
    se (!this._isDraggable) {
      ritorno;
    }
    const isSelected = this._uiManager.isSelected(this);
    this._uiManager.setUpDragSession();
    lascia puntatoreMoveOptions, puntatoreMoveCallback;
    se (è selezionato) {
      pointerMoveOptions = {
        passivo: vero,
        cattura: vero
      };
      puntatoreMoveCallback = e => {
        const [tx, ty] = this.screenToPageTranslation(e.movementX, e.movementY);
        this._uiManager.dragSelectedEditors(tx, ty);
      };
      window.addEventListener("pointermove", pointerMoveCallback, pointerMoveOptions);
    }
    const pointerUpCallback = () => {
      window.removeEventListener("pointerup", pointerUpCallback);
      window.removeEventListener("sfocatura", pointerUpCallback);
      se (è selezionato) {
        window.removeEventListener("pointermove", pointerMoveCallback, pointerMoveOptions);
      }
      questo.#hasBeenClicked = false;
      se (!this._uiManager.endDragSession()) {
        costante {
          èMac
        } = _util.FeatureTest.platform;
        se (evento.ctrlKey && !isMac || evento.shiftKey || evento.metaKey && isMac) {
          questo.genitore.toggleSelected(questo);
        } altro {
          questo.genitore.setSelected(questo);
        }
      }
    };
    window.addEventListener("pointerup", pointerUpCallback);
    window.addEventListener("sfocatura", pointerUpCallback);
  }
  spostaInDOM() {
    questo.genitore?.moveEditorInDOM(questo);
  }
  _setParentAndPosition(genitore, x, y) {
    genitore.cambiaParente(questo);
    questo.x = x;
    questo.y = y;
    questo.fixAndSetPosition();
  }
  getRect(tx, ty) {
    const scale = this.parentScale;
    const [larghezzapagina, altezzapagina] = this.pageDimensions;
    const [paginaX, paginaY] = this.pageTranslation;
    const shiftX = tx / scala;
    const shiftY = ty / scala;
    const x = this.x * pageWidth;
    const y = this.y * pageHeight;
    const width = this.width * pageWidth;
    const altezza = this.height * pageHeight;
    interruttore (questa rotazione) {
      caso 0:
        ritorno [x + shiftX + pageX, pageHeight - y - shiftY - altezza + pageY, x + shiftX + larghezza + pageX, pageHeight - y - shiftY + pageY];
      caso 90:
        ritorno [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + altezza + pageX, pageHeight - y + shiftX + larghezza + pageY];
      caso 180:
        ritorno [x - shiftX - larghezza + paginaX, altezzapagina - y + shiftY + paginaY, x - shiftX + paginaX, altezzapagina - y + shiftY + altezza + paginaY];
      caso 270:
        ritorno [x - shiftY - altezza + paginaX, altezzapagina - y - shiftX - larghezza + paginaY, x - shiftY + paginaX, altezzapagina - y - shiftX + paginaY];
      predefinito:
        genera un nuovo errore("Rotazione non valida");
    }
  }
  getRectInCurrentCoords(rettangolo, altezzapagina) {
    const [x1, y1, x2, y2] = rettangolo;
    larghezza costante = x2 - x1;
    altezza costante = y2 - y1;
    interruttore (questa rotazione) {
      caso 0:
        restituisci [x1, altezza pagina - y2, larghezza, altezza];
      caso 90:
        restituisci [x1, altezza pagina - y1, altezza, larghezza];
      caso 180:
        restituisci [x2, altezzapagina - y1, larghezza, altezza];
      caso 270:
        restituisci [x2, altezza pagina - y2, altezza, larghezza];
      predefinito:
        genera un nuovo errore("Rotazione non valida");
    }
  }
  una voltaAggiunto() {}
  èVuoto() {
    restituisci falso;
  }
  enableEditMode() {
    questo.#isInEditMode = vero;
  }
  disableEditMode() {
    questo.#isInEditMode = false;
  }
  isInEditMode() {
    restituisci questo.#isInEditMode;
  }
  shouldGetKeyboardEvents() {
    restituisci falso;
  }
  ha bisogno di essere ricostruito() {
    restituisci questo.div && !this.isAttachedToDOM;
  }
  ricostruisci() {
    this.div?.addEventListener("focusin", this.#boundFocusin);
    this.div?.addEventListener("focusout", this.#boundFocusout);
  }
  serialize(isForCopying = false, context = null) {
    (0, _util.unreachable)("Un editor deve essere serializzabile");
  }
  deserialize statico (dati, genitore, uiManager) {
    const editor = new this.prototype.constructor({
      genitore,
      id: parent.getNextId(),
      uiManager
    });
    editor.rotazione = dati.rotazione;
    const [larghezzapagina, altezzapagina] = editor.dimensionipagina;
    const [x, y, larghezza, altezza] = editor.getRectInCurrentCoords(data.rect, pageHeight);
    editor.x = x / larghezzapagina;
    editor.y = y / altezzapagina;
    editor.width = larghezza / larghezzapagina;
    editor.height = altezza / altezzapagina;
    editor di ritorno;
  }
  rimuovi() {
    this.div.removeEventListener("focusin", this.#boundFocusin);
    this.div.removeEventListener("focusout", this.#boundFocusout);
    se (!this.isEmpty()) {
      questo.commit();
    }
    se (questo.genitore) {
      questo.genitore.rimuovi(questo);
    } altro {
      questo._uiManager.removeEditor(questo);
    }
    questo.#altTextButton?.remove();
    questo.#altTextButton = null;
    questo.#altTextTooltip = null;
  }
  ottieni isResizable() {
    restituisci falso;
  }
  rendiRidimensionabile() {
    se (questo.èRidimensionabile) {
      questo.#createResizers();
      questo.#resizersDiv.classList.remove("nascosto");
    }
  }
  seleziona() {
    questo.rendiridimensionabile();
    this.div?.classList.add("editorselezionato");
  }
  deseleziona() {
    questo.#resizersDiv?.classList.add("nascosto");
    this.div?.classList.remove("editorselezionato");
    se (this.div?.contains(document.activeElement)) {
      this._uiManager.currentLayer.div.focus();
    }
  }
  updateParams(tipo, valore) {}
  disabilitaModifica() {
    se (questo.#altTextButton) {
      questo.#altTextButton.hidden = true;
    }
  }
  abilitaModifica() {
    se (questo.#altTextButton) {
      questo.#altTextButton.hidden = false;
    }
  }
  entraInModalitàModifica() {}
  ottenere contentDiv() {
    restituisci questo.div;
  }
  ottieni isEditing() {
    restituisci questo.#isEditing;
  }
  imposta isEditing(valore) {
    questo.#isEditing = valore;
    se (!questo.genitore) {
      ritorno;
    }
    se (valore) {
      questo.genitore.setSelected(questo);
      questo.genitore.impostaActiveEditor(questo);
    } altro {
      questo.genitore.setActiveEditor(null);
    }
  }
  setAspectRatio(larghezza, altezza) {
    questo.#keepAspectRatio = true;
    const aspectRatio = larghezza / altezza;
    costante {
      stile
    } = questo.div;
    stile.aspectRatio = aspectRatio;
    stile.altezza = "auto";
  }
  statico ottieni MIN_SIZE() {
    ritorno 16;
  }
}
esportazioni.AnnotationEditor = AnnotationEditor;
classe FakeEditor estende AnnotationEditor {
  costruttore(parametri) {
    super(parametri);
    this.annotationElementId = params.annotationElementId;
    questo.eliminato = vero;
  }
  serializzare() {
    ritorno {
      id: this.annotationElementId,
      cancellato: vero,
      pageIndex: this.pageIndex
    };
  }
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.KeyboardManager = exports.CommandManager = exports.ColorManager = exports.AnnotationEditorUIManager = void 0;
esportazioni.bindEvents = bindEvents;
esportazioni.opacityToHex = opacityToHex;
var _util = __w_pdfjs_require__(1);
var _display_utils = __w_pdfjs_require__(6);
funzione bindEvents(oggetto, elemento, nomi) {
  per (const nome dei nomi) {
    element.addEventListener(nome, oggetto[nome].bind(oggetto));
  }
}
funzione opacityToHex(opacità) {
  restituisci Math.round(Math.min(255, Math.max(1, 255 * opacità))).toString(16).padStart(2, "0");
}
classe IdManager {
  #id = 0;
  getId() {
    restituisci `${_util.AnnotationEditorPrefix}${this.#id++}`;
  }
}
classe ImageManager {
  #baseId = (0, _util.getUuid)();
  #id = 0;
  #cache = null;
  statico ottieni _isSVGFittingCanvas() {
    const svg = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>`;
    const canvas = new OffscreenCanvas(1, 3);
    const ctx = canvas.getContext("2d");
    const image = nuova immagine();
    immagine.src = svg;
    promessa costante = immagine.decode().then(() => {
      ctx.drawImage(immagine, 0, 0, 1, 1, 0, 0, 1, 3);
      restituisce nuovo Uint32Array(ctx.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
    });
    return (0, _util.shadow)(this, "_isSVGFittingCanvas", promise);
  }
  asincrono #get(chiave, dati grezzi) {
    questo.#cache ||= nuova mappa();
    lascia dati = questo.#cache.get(chiave);
    se (dati === null) {
      restituisci null;
    }
    se (dati?.bitmap) {
      dati.refCounter += 1;
      restituire i dati;
    }
    Tentativo {
      dati ||= {
        bitmap: nullo,
        id: `image_${this.#baseId}_${this.#id++}`,
        refCounter: 0,
        isSvg: falso
      };
      lascia immagine;
      se (tipo di dati grezzi === "stringa") {
        dati.url = dati grezzi;
        risposta costante = attendi fetch(rawData);
        se (!risposta.ok) {
          genera un nuovo errore (response.statusText);
        }
        immagine = attendi risposta.blob();
      } altro {
        immagine = dati.file = rawData;
      }
      se (immagine.tipo === "immagine/svg+xml") {
        const mustRemoveAspectRatioPromise = ImageManager._isSVGFittingCanvas;
        const fileReader = new FileReader();
        const imageElement = nuova immagine();
        const imagePromise = new Promise((resolve, reject) => {
          imageElement.onload = () => {
            dati.bitmap = elementoimmagine;
            dati.isSvg = vero;
            risolvere();
          };
          fileReader.onload = async () => {
            const url = data.svgUrl = fileReader.result;
            imageElement.src = (await mustRemoveAspectRatioPromise) ? `${url}#svgView(preserveAspectRatio(none))` : url;
          };
          imageElement.onerror = fileReader.onerror = reject;
        });
        fileReader.readAsDataURL(immagine);
        attendi imagePromise;
      } altro {
        data.bitmap = attendi createImageBitmap(immagine);
      }
      dati.refCounter = 1;
    } cattura (e) {
      console.errore(e);
      dati = null;
    }
    questo.#cache.set(chiave, dati);
    se (dati) {
      questo.#cache.set(data.id, data);
    }
    restituire i dati;
  }
  asincrono getFromFile(file) {
    costante {
      ultima modifica,
      nome,
      misurare,
      tipo
    } = file;
    restituisci questo.#get(`${lastModified}_${name}_${size}_${type}`, file);
  }
  asincrono getFromUrl(url) {
    restituisci questo.#get(url, url);
  }
  getFromId(id) asincrono {
    questo.#cache ||= nuova mappa();
    dati costanti = questo.#cache.get(id);
    se (!dati) {
      restituisci null;
    }
    se (dati.bitmap) {
      dati.refCounter += 1;
      restituire i dati;
    }
    se (file di dati) {
      restituisci questo.getFromFile(data.file);
    }
    restituisci questo.getFromUrl(data.url);
  }
  getSvgUrl(id) {
    dati costanti = questo.#cache.get(id);
    se (!dati?.isSvg) {
      restituisci null;
    }
    restituisci dati.svgUrl;
  }
  eliminaId(id) {
    questo.#cache ||= nuova mappa();
    dati costanti = questo.#cache.get(id);
    se (!dati) {
      ritorno;
    }
    dati.refCounter -= 1;
    se (data.refCounter !== 0) {
      ritorno;
    }
    dati.bitmap = null;
  }
  isValidId(id) {
    restituisci id.startsWith(`image_${this.#baseId}_`);
  }
}
classe CommandManager {
  #comandi = [];
  #bloccato = falso;
  #dimensionemassima;
  #posizione = -1;
  costruttore(maxSize = 128) {
    questo.#maxSize = maxSize;
  }
  aggiungere({
    comando,
    disfare,
    deveEseguire,
    tipo = NaN,
    sovrascriviSeSameType = falso,
    keepUndo = falso
  }) {
    se (deveEseguire) {
      comando();
    }
    se (questo.#bloccato) {
      ritorno;
    }
    const salva = {
      comando,
      disfare,
      tipo
    };
    se (questo.#posizione === -1) {
      se (questo.#comandi.lunghezza > 0) {
        questo.#comandi.lunghezza = 0;
      }
      questo.#posizione = 0;
      questo.#comandi.push(salva);
      ritorno;
    }
    se (sovrascriviSeStessoTipo && questo.#comandi[questo.#posizione].tipo === tipo) {
      se (mantieniAnnulla) {
        salva.annulla = questo.#comandi[questo.#posizione].annulla;
      }
      questo.#comandi[questo.#posizione] = salva;
      ritorno;
    }
    const next = this.#posizione + 1;
    se (successivo === questo.#maxSize) {
      questo.#comandi.splice(0, 1);
    } altro {
      questo.#posizione = prossimo;
      se (next < this.#commands.length) {
        questo.#comandi.splice(successivo);
      }
    }
    questo.#comandi.push(salva);
  }
  disfare() {
    se (questo.#posizione === -1) {
      ritorno;
    }
    questo.#bloccato = vero;
    questo.#comandi[questo.#posizione].annulla();
    questo.#bloccato = falso;
    questo.#posizione -= 1;
  }
  ripeti() {
    se (questo.#posizione < questo.#comandi.lunghezza - 1) {
      questo.#posizione += 1;
      questo.#bloccato = vero;
      questo.#comandi[questo.#posizione].cmd();
      questo.#bloccato = falso;
    }
  }
  haQualcosaDaAnnullare() {
    restituisci questo.#posizione !== -1;
  }
  haQualcosaDaRifare() {
    restituisci questo.#posizione < questo.#comandi.lunghezza - 1;
  }
  distruggere() {
    questo.#comandi = null;
  }
}
esportazioni.CommandManager = CommandManager;
classe KeyboardManager {
  costruttore(callback) {
    questo.buffer = [];
    this.callbacks = new Map();
    this.allKeys = new Set();
    costante {
      èMac
    } = _util.FeatureTest.platform;
    per (const [chiavi, callback, opzioni = {}] di callback) {
      per (const chiave di chiavi) {
        const isMacKey = key.startsWith("mac+");
        se (isMac && isMacKey) {
          questo.callback.set(key.slice(4), {
            richiamare,
            opzioni
          });
          this.allKeys.add(key.split("+").at(-1));
        } altrimenti se (!isMac && !isMacKey) {
          questo.callback.set(chiave, {
            richiamare,
            opzioni
          });
          this.allKeys.add(key.split("+").at(-1));
        }
      }
    }
  }
  #serialize(evento) {
    se (evento.altKey) {
      questo.buffer.push("alt");
    }
    se (evento.ctrlKey) {
      questo.buffer.push("ctrl");
    }
    se (evento.metaKey) {
      questo.buffer.push("meta");
    }
    se (evento.shiftKey) {
      this.buffer.push("shift");
    }
    questo.buffer.push(evento.chiave);
    const str = this.buffer.join("+");
    lunghezza.di.questo.buffer = 0;
    ritorno str;
  }
  exec(self, evento) {
    se (!this.allKeys.has(event.key)) {
      ritorno;
    }
    const info = this.callbacks.get(this.#serialize(event));
    se (!info) {
      ritorno;
    }
    costante {
      richiamare,
      opzioni: {
        bolle = falso,
        argomenti = [],
        verificatore = null
      }
    } = informazioni;
    se (checker && !checker(self, evento)) {
      ritorno;
    }
    callback.bind(self, ...args)();
    se (!bolle) {
      evento.stopPropagation();
      evento.prevenzioneDefault();
    }
  }
}
esportazioni.KeyboardManager = KeyboardManager;
classe ColorManager {
  static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  ottieni _colori() {
    const colors = new Map([["CanvasText", null], ["Canvas", null]]);
    (0, _display_utils.getColorValues)(colori);
    return (0, _util.shadow)(this, "_colors", colors);
  }
  convert(colore) {
    const rgb = (0, _display_utils.getRGB)(colore);
    se (!window.matchMedia("(forced-colors: active)").matches) {
      restituisci rgb;
    }
    per (const [nome, RGB] di questo._colori) {
      se (RGB.ogni((x, i) => x === rgb[i])) {
        restituisci ColorManager._colorsMapping.get(nome);
      }
    }
    restituisci rgb;
  }
  getHexCode(nome) {
    const rgb = this._colors.get(nome);
    se (!rgb) {
      nome di ritorno;
    }
    restituisci _util.Util.makeHexColor(...rgb);
  }
}
esportazioni.ColorManager = ColorManager;
classe AnnotationEditorUIManager {
  #activeEditor = null;
  #allEditors = nuova mappa();
  #allLayers = nuova mappa();
  #altTextManager = null;
  #annotationStorage = null;
  #commandManager = nuovo CommandManager();
  #indicepaginacorrente = 0;
  #deletedAnnotationsElementIds = new Set();
  #draggingEditors = null;
  #editorTypes = null;
  #editorsToRescale = new Set();
  #filterFactory = null;
  #idManager = nuovo IdManager();
  #isEnabled = falso;
  #isWaiting = falso;
  #lastActiveElement = null;
  #mode = _util.AnnotationEditorType.NONE;
  #selectedEditors = new Set();
  #coloripagina = null;
  #boundBlur = this.blur.bind(this);
  #boundFocus = this.focus.bind(this);
  #boundCopy = this.copy.bind(this);
  #boundCut = this.cut.bind(this);
  #boundPaste = this.paste.bind(this);
  #boundKeydown = this.keydown.bind(this);
  #boundOnEditingAction = this.onEditingAction.bind(this);
  #boundOnPageChanging = this.onPageChanging.bind(this);
  #boundOnScaleChanging = this.onScaleChanging.bind(this);
  #boundOnRotationChanging = this.onRotationChanging.bind(this);
  #StatiPrecedenti = {
    isEditing: falso,
    è vuoto: vero,
    hasSomethingToUndo: falso,
    hasSomethingToRedo: falso,
    hasSelectedEditor: falso
  };
  #traduzione = [0, 0];
  #translationTimeoutId = null;
  #contenitore = null;
  #viewer = null;
  statico TRANSLATE_SMALL = 1;
  statico TRANSLATE_BIG = 10;
  statico ottieni _keyboardManager() {
    const proto = AnnotationEditorUIManager.prototype;
    const arrowChecker = self => {
      costante {
        elemento attivo
      } = documento;
      restituisci activeElement && self.#container.contains(activeElement) && self.hasSomethingToControl();
    };
    const small = this.TRANSLATE_SMALL;
    const big = this.TRANSLATE_BIG;
    return (0, _util.shadow)(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], proto.selectAll], [["ctrl+z", "mac+meta+z"], proto.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], proto.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "maiusc+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Elimina", "ctrl+Elimina", "maiusc+Elimina", "mac+Elimina"], proto.delete], [["Escape", "mac+Escape"], proto.unselectAll], [["ArrowLeft", "mac+FrecciaSinistra"], proto.translateSelectedEditors, {
      argomenti: [-piccolo, 0],
      verificatore: arrowChecker
    }], [["ctrl+freccia sinistra", "mac+maiusc+freccia sinistra"], proto.translateSelectedEditors, {
      argomenti: [-grande, 0],
      verificatore: arrowChecker
    }], [["Freccia destra", "mac+Freccia destra"], proto.translateSelectedEditors, {
      argomenti: [piccolo, 0],
      verificatore: arrowChecker
    }], [["ctrl+freccia destra", "mac+maiusc+freccia destra"], proto.translateSelectedEditors, {
      argomenti: [grande, 0],
      verificatore: arrowChecker
    }], [["Freccia su", "mac+Freccia su"], proto.translateSelectedEditors, {
      argomenti: [0, -piccolo],
      verificatore: arrowChecker
    }], [["ctrl+Freccia su", "mac+shift+Freccia su"], proto.translateSelectedEditors, {
      argomenti: [0, -grande],
      verificatore: arrowChecker
    }], [["Freccia giù", "mac+Freccia giù"], proto.translateSelectedEditors, {
      argomenti: [0, piccolo],
      verificatore: arrowChecker
    }], [["ctrl+freccia giù", "mac+shift+freccia giù"], proto.translateSelectedEditors, {
      argomenti: [0, grande],
      verificatore: arrowChecker
    }]]));
  }
  costruttore(contenitore, visualizzatore, altTextManager, eventBus, pdfDocument, pageColors) {
    questo.#contenitore = contenitore;
    questo.#viewer = viewer;
    questo.#altTextManager = altTextManager;
    questo._eventBus = eventBus;
    this._eventBus._on("azione di modifica", this.#boundOnEditingAction);
    this._eventBus._on("cambiopagina", this.#boundOnPageChanging);
    this._eventBus._on("cambiamento di scala", this.#boundOnScaleChanging);
    this._eventBus._on("rotazione che cambia", this.#boundOnRotationChanging);
    questo.#annotationStorage = pdfDocument.annotationStorage;
    questo.#filterFactory = pdfDocument.filterFactory;
    questo.#pageColors = pageColors;
    questo.parametri di visualizzazione = {
      realScale: _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS,
      rotazione: 0
    };
  }
  distruggere() {
    questo.#removeKeyboardManager();
    questo.#removeFocusManager();
    this._eventBus._off("azione di modifica", this.#boundOnEditingAction);
    this._eventBus._off("cambio di pagina", this.#boundOnPageChanging);
    this._eventBus._off("cambiamento di scala", this.#boundOnScaleChanging);
    this._eventBus._off("rotazione che cambia", this.#boundOnRotationChanging);
    per (const layer di questo.#allLayers.values()) {
      strato.distruggi();
    }
    questo.#tuttiilivelli.cancella();
    questo.#allEditors.clear();
    questo.#editorsToRescale.clear();
    questo.#activeEditor = null;
    questo.#selectedEditors.clear();
    questo.#commandManager.destroy();
    questo.#altTextManager.destroy();
  }
  ottieni hcmFilter() {
    return (0, _util.shadow)(this, "hcmFilter", this.#pageColors ? this.#filterFactory.addHCMFilter(this.#pageColors.foreground, this.#pageColors.background) : "none");
  }
  ottenere la direzione() {
    return (0, _util.shadow)(this, "direzione", getCputedStyle(this.#container).direction);
  }
  editAltText(editor) {
    questo.#altTextManager?.editAltText(questo, editor);
  }
  onPageChanging({
    numero di pagina
  }) {
    questo.#currentPageIndex = pageNumber - 1;
  }
  focusMainContainer() {
    questo.#contenitore.focus();
  }
  trovaGenitore(x, y) {
    per (const layer di questo.#allLayers.values()) {
      costante {
        x: stratoX,
        y: stratoY,
        larghezza,
        altezza
      } = layer.div.getBoundingClientRect();
      se (x >= layerX && x <= layerX + larghezza && y >= layerY && y <= layerY + altezza) {
        strato di ritorno;
      }
    }
    restituisci null;
  }
  disableUserSelect(valore = falso) {
    questo.#viewer.classList.toggle("noUserSelect", valore);
  }
  addShouldRescale(editor) {
    questo.#editorsToRescale.add(editor);
  }
  removeShouldRescale(editor) {
    questo.#editorsToRescale.delete(editor);
  }
  onScaleChanging({
    scala
  }) {
    questo.commitOrRemove();
    this.viewParameters.realScale = scala * _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS;
    per (const editor di questo.#editorsToRescale) {
      editor.onScaleChanging();
    }
  }
  onRotationChanging({
    pagineRotazione
  }) {
    questo.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  addToAnnotationStorage(editor) {
    se (!editor.isEmpty() && this.#annotationStorage && !this.#annotationStorage.has(editor.id)) {
      questo.#annotationStorage.setValue(editor.id, editor);
    }
  }
  #addFocusManager() {
    window.addEventListener("focus", this.#boundFocus);
    window.addEventListener("sfocatura", this.#boundBlur);
  }
  #removeFocusManager() {
    window.removeEventListener("focus", this.#boundFocus);
    window.removeEventListener("sfocatura", this.#boundBlur);
  }
  sfocatura() {
    se (!this.hasSelection) {
      ritorno;
    }
    costante {
      elemento attivo
    } = documento;
    per (const editor di questo.#selectedEditors) {
      se (editor.div.contains(activeElement)) {
        questo.#ultimoElementoAttivo = [editor, elementoattivo];
        editor._focusEventsAllowed = false;
        rottura;
      }
    }
  }
  messa a fuoco() {
    se (!this.#lastActiveElement) {
      ritorno;
    }
    const [lastEditor, lastActiveElement] = this.#lastActiveElement;
    questo.#lastActiveElement = null;
    lastActiveElement.addEventListener("focusin", () => {
      lastEditor._focusEventsAllowed = true;
    }, {
      una volta: vero
    });
    ultimoElementoAttivo.focus();
  }
  #addKeyboardManager() {
    window.addEventListener("keydown", this.#boundKeydown, {
      cattura: vero
    });
  }
  #removeKeyboardManager() {
    window.removeEventListener("keydown", this.#boundKeydown, {
      cattura: vero
    });
  }
  #aggiungiCopiaIncollaListener() {
    document.addEventListener("copia", this.#boundCopy);
    document.addEventListener("cut", this.#boundCut);
    document.addEventListener("incolla", this.#boundPaste);
  }
  #removeCopyPasteListeners() {
    document.removeEventListener("copia", this.#boundCopy);
    document.removeEventListener("cut", this.#boundCut);
    document.removeEventListener("incolla", this.#boundPaste);
  }
  aggiungiModificaListener() {
    questo.#addKeyboardManager();
    questo.#addCopyPasteListeners();
  }
  rimuoviModificaListeners() {
    questo.#removeKeyboardManager();
    questo.#removeCopyPasteListeners();
  }
  copia(evento) {
    evento.prevenzioneDefault();
    questo.#activeEditor?.commitOrRemove();
    se (!this.hasSelection) {
      ritorno;
    }
    editor costanti = [];
    per (const editor di questo.#selectedEditors) {
      const serializzato = editor.serialize(true);
      se (serializzato) {
        editors.push(serializzato);
      }
    }
    se (editors.length === 0) {
      ritorno;
    }
    event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
  }
  cut(evento) {
    questo.copia(evento);
    questo.elimina();
  }
  incolla(evento) {
    evento.prevenzioneDefault();
    costante {
      dati degli appunti
    } = evento;
    per (elemento costante di clipboardData.items) {
      per (const editorType di questo.#editorTypes) {
        se (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          ritorno;
        }
      }
    }
    lascia dati = clipboardData.getData("application/pdfjs");
    se (!dati) {
      ritorno;
    }
    Tentativo {
      dati = JSON.parse(dati);
    } catturare (es.) {
      (0, _util.warn)(`incolla: "${ex.message}".`);
      ritorno;
    }
    se (!Array.isArray(dati)) {
      ritorno;
    }
    questo.deselezionaTutto();
    const layer = this.currentLayer;
    Tentativo {
      const nuoviEditori = [];
      per (editor costante di dati) {
        const deserializedEditor = layer.deserialize(editor);
        se (!deserializedEditor) {
          ritorno;
        }
        newEditors.push(deserializedEditor);
      }
      const cmd = () => {
        per (const editor di newEditors) {
          this.#addEditorToLayer(editor);
        }
        questo.#selectEditors(newEditors);
      };
      const undo = () => {
        per (const editor di newEditors) {
          editor.remove();
        }
      };
      questo.aggiungiComandi({
        comando,
        disfare,
        mustExec: vero
      });
    } catturare (es.) {
      (0, _util.warn)(`incolla: "${ex.message}".`);
    }
  }
  keydown(evento) {
    se (!this.getActive()?.shouldGetKeyboardEvents()) {
      AnnotationEditorUIManager._keyboardManager.exec(questo, evento);
    }
  }
  onEditingAction(dettagli) {
    if (["annulla", "ripristina", "elimina", "seleziona tutto"].includes(dettagli.nome)) {
      questo[dettagli.nome]();
    }
  }
  #dispatchUpdateStates(dettagli) {
    const hasChanged = Object.entries(details).some(([key, value]) => this.#previousStates[key] !== value);
    se (è cambiato) {
      this._eventBus.dispatch("annotationeditorstateschanged", {
        fonte: questo,
        dettagli: Object.assign(this.#previousStates, dettagli)
      });
    }
  }
  #dispatchUpdateUI(dettagli) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      fonte: questo,
      dettagli
    });
  }
  setEditingState(isEditing) {
    se (isEditing) {
      questo.#addFocusManager();
      questo.#addKeyboardManager();
      questo.#addCopyPasteListeners();
      questo.#dispatchUpdateStates({
        isEditing: this.#mode !== _util.AnnotationEditorType.NONE,
        èVuoto: questo.#èVuoto(),
        hasSomethingToUndo: questo.#commandManager.hasSomethingToUndo(),
        hasSomethingToRedo: questo.#commandManager.hasSomethingToRedo(),
        hasSelectedEditor: falso
      });
    } altro {
      questo.#removeFocusManager();
      questo.#removeKeyboardManager();
      questo.#removeCopyPasteListeners();
      questo.#dispatchUpdateStates({
        isEditing: falso
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(tipi) {
    se (questo.#editorTypes) {
      ritorno;
    }
    questo.#editorTypes = tipi;
    per (const editorType di questo.#editorTypes) {
      questo.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
    }
  }
  getId() {
    restituisci questo.#idManager.getId();
  }
  ottieni currentLayer() {
    restituisci questo.#allLayers.get(questo.#currentPageIndex);
  }
  getLayer(indicepagina) {
    restituisci questo.#allLayers.get(pageIndex);
  }
  ottieni currentPageIndex() {
    restituisci questo.#currentPageIndex;
  }
  addLayer(strato) {
    questo.#allLayers.set(layer.pageIndex, layer);
    se (questo.#èAbilitato) {
      layer.enable();
    } altro {
      layer.disable();
    }
  }
  removeLayer(layer) {
    questo.#allLayers.delete(layer.pageIndex);
  }
  updateMode(modalità, editId = null) {
    se (questo.#modalità === modalità) {
      ritorno;
    }
    questo.#mode = modalità;
    se (modalità === _util.AnnotationEditorType.NONE) {
      this.setEditingState(false);
      questo.#disableAll();
      ritorno;
    }
    this.setEditingState(true);
    questo.#abilitaTutto();
    questo.deselezionaTutto();
    per (const layer di questo.#allLayers.values()) {
      layer.updateMode(modalità);
    }
    se (!editId) {
      ritorno;
    }
    per (const editor di questo.#allEditors.values()) {
      se (editor.annotationElementId === editId) {
        questo.setSelected(editor);
        editor.enterInEditMode();
        rottura;
      }
    }
  }
  updateToolbar(modalità) {
    se (modalità === questo.#modalità) {
      ritorno;
    }
    this._eventBus.dispatch("switchannotationeditormode", {
      fonte: questo,
      modalità
    });
  }
  updateParams(tipo, valore) {
    se (!questo.#editorTypes) {
      ritorno;
    }
    se (tipo === _util.AnnotationEditorParamsType.CREATE) {
      this.currentLayer.addNewEditor(tipo);
      ritorno;
    }
    per (const editor di questo.#selectedEditors) {
      editor.updateParams(tipo, valore);
    }
    per (const editorType di questo.#editorTypes) {
      editorType.updateDefaultParams(tipo, valore);
    }
  }
  enableWaiting(mustWait = false) {
    se (questo.#èinAttesa === deveAttesa) {
      ritorno;
    }
    questo.#isWaiting = mustWait;
    per (const layer di questo.#allLayers.values()) {
      se (deve attendere) {
        layer.disableClick();
      } altro {
        layer.enableClick();
      }
      layer.div.classList.toggle("in attesa", mustWait);
    }
  }
  #abilitaTutti() {
    se (!questo.#èAbilitato) {
      questo.#èAbilitato = vero;
      per (const layer di questo.#allLayers.values()) {
        layer.enable();
      }
    }
  }
  #disabilitaTutto() {
    questo.deselezionaTutto();
    se (questo.#èAbilitato) {
      questo.#èAbilitato = falso;
      per (const layer di questo.#allLayers.values()) {
        layer.disable();
      }
    }
  }
  getEditors(indicepagina) {
    editor costanti = [];
    per (const editor di questo.#allEditors.values()) {
      se (editor.pageIndex === pageIndex) {
        editori.push(editor);
      }
    }
    editori di ritorno;
  }
  getEditor(id) {
    restituisci questo.#allEditors.get(id);
  }
  addEditor(editor) {
    questo.#allEditors.set(editor.id, editor);
  }
  removeEditor(editor) {
    questo.#allEditors.delete(editor.id);
    questo.unselect(editor);
    se (!editor.annotationElementId || !this.#deletedAnnotationsElementIds.has(editor.annotationElementId)) {
      questo.#annotationStorage?.remove(editor.id);
    }
  }
  addDeletedAnnotationElement(editor) {
    questo.#deletedAnnotationsElementIds.add(editor.annotationElementId);
    editor.deleted = true;
  }
  isDeletedAnnotationElement(annotationElementId) {
    restituisci questo.#deletedAnnotationsElementIds.has(annotationElementId);
  }
  removeDeletedAnnotationElement(editor) {
    questo.#deletedAnnotationsElementIds.delete(editor.annotationElementId);
    editor.deleted = false;
  }
  #addEditorToLayer(editor) {
    const layer = this.#allLayers.get(editor.pageIndex);
    se (strato) {
      layer.addOrRebuild(editor);
    } altro {
      this.addEditor(editor);
    }
  }
  setActiveEditor(editor) {
    se (questo.#activeEditor === editor) {
      ritorno;
    }
    questo.#activeEditor = editor;
    se (editor) {
      questo.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  toggleSelected(editor) {
    se (questo.#selectedEditors.has(editor)) {
      questo.#selectedEditors.delete(editor);
      editor.unselect();
      questo.#dispatchUpdateStates({
        hasSelectedEditor: this.hasSelection
      });
      ritorno;
    }
    questo.#selectedEditors.add(editor);
    editor.select();
    questo.#dispatchUpdateUI(editor.propertiesToUpdate);
    questo.#dispatchUpdateStates({
      hasSelectedEditor: vero
    });
  }
  setSelected(editor) {
    per (const ed di questo.#selectedEditors) {
      se (ed !== editor) {
        ed.unselect();
      }
    }
    questo.#selectedEditors.clear();
    questo.#selectedEditors.add(editor);
    editor.select();
    questo.#dispatchUpdateUI(editor.propertiesToUpdate);
    questo.#dispatchUpdateStates({
      hasSelectedEditor: vero
    });
  }
  èSelezionato(editor) {
    restituisci questo.#selectedEditors.has(editor);
  }
  deseleziona(editor) {
    editor.unselect();
    questo.#selectedEditors.delete(editor);
    questo.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  ottieni hasSelection() {
    restituisci questo.#selectedEditors.size !== 0;
  }
  disfare() {
    questo.#commandManager.undo();
    questo.#dispatchUpdateStates({
      hasSomethingToUndo: questo.#commandManager.hasSomethingToUndo(),
      hasSomethingToRedo: vero,
      isEmpty: questo.#isEmpty()
    });
  }
  ripeti() {
    questo.#commandManager.redo();
    questo.#dispatchUpdateStates({
      hasSomethingToUndo: vero,
      hasSomethingToRedo: questo.#commandManager.hasSomethingToRedo(),
      isEmpty: questo.#isEmpty()
    });
  }
  aggiungiComandi(parametri) {
    questo.#commandManager.add(params);
    questo.#dispatchUpdateStates({
      hasSomethingToUndo: vero,
      hasSomethingToRedo: falso,
      isEmpty: questo.#isEmpty()
    });
  }
  #èVuoto() {
    se (questo.#tuttiglieditor.dimensione === 0) {
      restituisci vero;
    }
    se (questo.#tuttiglieditor.dimensione === 1) {
      per (const editor di questo.#allEditors.values()) {
        restituisci editor.isEmpty();
      }
    }
    restituisci falso;
  }
  eliminare() {
    questo.commitOrRemove();
    se (!this.hasSelection) {
      ritorno;
    }
    const editors = [...this.#selectedEditors];
    const cmd = () => {
      per (const editor di editor) {
        editor.remove();
      }
    };
    const undo = () => {
      per (const editor di editor) {
        this.#addEditorToLayer(editor);
      }
    };
    questo.aggiungiComandi({
      comando,
      disfare,
      mustExec: vero
    });
  }
  commitOrRemove() {
    questo.#activeEditor?.commitOrRemove();
  }
  haQualcosaDaControllare() {
    restituisci questo.#activeEditor || this.hasSelection;
  }
  #selectEditors(editor) {
    questo.#selectedEditors.clear();
    per (const editor di editor) {
      se (editor.isEmpty()) {
        continuare;
      }
      questo.#selectedEditors.add(editor);
      editor.select();
    }
    questo.#dispatchUpdateStates({
      hasSelectedEditor: vero
    });
  }
  selezionaTutto() {
    per (const editor di questo.#selectedEditors) {
      editor.commit();
    }
    questo.#selectEditors(questo.#allEditors.values());
  }
  deseleziona tutto() {
    se (questo.#activeEditor) {
      questo.#activeEditor.commitOrRemove();
      ritorno;
    }
    se (!this.hasSelection) {
      ritorno;
    }
    per (const editor di questo.#selectedEditors) {
      editor.unselect();
    }
    questo.#selectedEditors.clear();
    questo.#dispatchUpdateStates({
      hasSelectedEditor: falso
    });
  }
  translateSelectedEditors(x, y, noCommit = false) {
    se (!noCommit) {
      questo.commitOrRemove();
    }
    se (!this.hasSelection) {
      ritorno;
    }
    questo.#traduzione[0] += x;
    questo.#traduzione[1] += y;
    const [totaleX, totaleY] = questo.#traduzione;
    const editors = [...this.#selectedEditors];
    const TEMPO_DI_ATTESA = 1000;
    se (questo.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
    }
    questo.#translationTimeoutId = setTimeout(() => {
      questo.#translationTimeoutId = null;
      questo.#traduzione[0] = questo.#traduzione[1] = 0;
      questo.aggiungiComandi({
        comando: () => {
          per (const editor di editor) {
            se (questo.#tuttiglieditori.has(editor.id)) {
              editor.translateInPage(totaleX, totaleY);
            }
          }
        },
        annulla: () => {
          per (const editor di editor) {
            se (questo.#tuttiglieditori.has(editor.id)) {
              editor.translateInPage(-totalX, -totalY);
            }
          }
        },
        mustExec: falso
      });
    }, TEMPO_DI_ATTESA);
    per (const editor di editor) {
      editor.translateInPage(x, y);
    }
  }
  impostaSessioneDrag() {
    se (!this.hasSelection) {
      ritorno;
    }
    this.disableUserSelect(true);
    questo.#draggingEditors = nuova mappa();
    per (const editor di questo.#selectedEditors) {
      questo.#draggingEditors.set(editor, {
        salvatoX: editor.x,
        salvatoY: editor.y,
        savedPageIndex: editor.pageIndex,
        nuovoX: 0,
        nuovoY: 0,
        newPageIndex: -1
      });
    }
  }
  fineTrascinaSessione() {
    se (!this.#draggingEditors) {
      restituisci falso;
    }
    this.disableUserSelect(false);
    const map = this.#draggingEditors;
    questo.#draggingEditors = null;
    lascia che mustBeAddedInUndoStack = false;
    per (const [{
      X,
      e,
      indice della pagina
    }, valore] della mappa) {
      valore.newX = x;
      valore.newY = y;
      valore.newPageIndex = pageIndex;
      mustBeAddedInUndoStack ||= x !== valore.salvatoX || y !== valore.salvatoY || pageIndex !== valore.salvatoPageIndex;
    }
    se (!mustBeAddedInUndoStack) {
      restituisci falso;
    }
    const move = (editor, x, y, pageIndex) => {
      se (questo.#tuttiglieditori.has(editor.id)) {
        const parent = this.#allLayers.get(pageIndex);
        se (genitore) {
          editor._setParentAndPosition(genitore, x, y);
        } altro {
          editor.pageIndex = pageIndex;
          editor.x = x;
          editor.y = y;
        }
      }
    };
    questo.aggiungiComandi({
      comando: () => {
        per (const [editor, {
          nuovoX,
          nuovoY,
          newPageIndex
        }] della mappa) {
          sposta(editor, nuovaX, nuovaY, nuovaPaginaIndex);
        }
      },
      annulla: () => {
        per (const [editor, {
          salvatoX,
          salvatoY,
          IndicePaginaSalvato
        }] della mappa) {
          sposta(editor, salvatoX, salvatoY, salvatoPageIndex);
        }
      },
      mustExec: vero
    });
    restituisci vero;
  }
  dragSelectedEditors(tx, ty) {
    se (!this.#draggingEditors) {
      ritorno;
    }
    per (const editor di questo.#draggingEditors.keys()) {
      editor.drag(tx, ty);
    }
  }
  ricostruisci(editor) {
    se (editor.parent === null) {
      const genitore = this.getLayer(editor.pageIndex);
      se (genitore) {
        genitore.cambiaGenitore(editor);
        genitore.addOrRebuild(editor);
      } altro {
        this.addEditor(editor);
        this.addToAnnotationStorage(editor);
        editor.rebuild();
      }
    } altro {
      editor.parent.addOrRebuild(editor);
    }
  }
  èAttivo(editor) {
    restituisci questo.#activeEditor === editor;
  }
  getActive() {
    restituisci questo.#activeEditor;
  }
  getMode() {
    restituisci questo.#mode;
  }
  ottieni imageManager() {
    return (0, _util.shadow)(this, "imageManager", new ImageManager());
  }
}
esportazioni.AnnotationEditorUIManager = AnnotationEditorUIManager;

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.StatTimer = exports.RenderingCancelledException = exports.PixelsPerInch = exports.PageViewport = exports.PDFDateString = exports.DOMStandardFontDataFactory = exports.DOMSVGFactory = exports.DOMFilterFactory = exports.DOMCanvasFactory = exports.DOMCMapReaderFactory = void 0;
exports.deprecated = deprecato;
esportazioni.getColorValues ​​= getColorValues;
esportazioni.getCurrentTransform = getCurrentTransform;
esportazioni.getCurrentTransformInverse = getCurrentTransformInverse;
esportazioni.getFilenameFromUrl = getFilenameFromUrl;
esportazioni.getPdfFilenameFromUrl = getPdfFilenameFromUrl;
esportazioni.getRGB = getRGB;
esportazioni.getXfaPageViewport = getXfaPageViewport;
esportazioni.isDataScheme = isDataScheme;
esportazioni.isPdfFile = isPdfFile;
esportazioni.isValidFetchUrl = isValidFetchUrl;
esportazioni.loadScript = loadScript;
esportazioni.noContextMenu = noContextMenu;
esportazioni.setLayerDimensions = setLayerDimensions;
var _base_factory = __w_pdfjs_require__(7);
var _util = __w_pdfjs_require__(1);
const SVG_NS = "http://www.w3.org/2000/svg";
classe PixelPerPollice {
  CSS statico = 96.0;
  PDF statico = 72,0;
  static PDF_TO_CSS_UNITS = questo.CSS / questo.PDF;
}
esportazioni.PixelPerPollice = PixelPerPollice;
classe DOMFilterFactory estende _base_factory.BaseFilterFactory {
  #_cache;
  #_defs;
  #docId;
  #documento;
  #hcmFilter;
  #hcmKey;
  #hcmUrl;
  #hcmHighlightFilter;
  #hcmHighlightKey;
  #hcmHighlightUrl;
  #id = 0;
  costruttore({
    ID documento,
    ownerDocument = globalThis.document
  } = {}) {
    super();
    questo.#docId = docId;
    questo.#documento = ownerDocument;
  }
  ottieni #cache() {
    restituisci questo.#_cache ||= nuova mappa();
  }
  ottieni #defs() {
    se (!questo.#_defs) {
      const div = this.#document.createElement("div");
      costante {
        stile
      } = div;
      style.visibility = "nascosto";
      stile.contain = "strict";
      stile.larghezza = stile.altezza = 0;
      stile.posizione = "assoluto";
      stile.alto = stile.sinistra = 0;
      stile.zIndex = -1;
      const svg = this.#document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("larghezza", 0);
      svg.setAttribute("altezza", 0);
      questo.#_defs = questo.#document.createElementNS(SVG_NS, "defs");
      div.append(svg);
      svg.append(this.#_defs);
      questo.#document.body.append(div);
    }
    restituisci questo.#_defs;
  }
  addFilter(mappe) {
    se (!mappe) {
      restituisci "nessuno";
    }
    lascia valore = questo.#cache.get(mappe);
    se (valore) {
      valore di ritorno;
    }
    lascia che tabellaR, tabellaG, tabellaB, chiave;
    se (maps.length === 1) {
      const mapR = mappe[0];
      const buffer = nuovo Array(256);
      per (lascia che i = 0; i < 256; i++) {
        buffer[i] = mappaR[i] / 255;
      }
      chiave = tabellaR = tabellaG = tabellaB = buffer.join(",");
    } altro {
      const [mapR, mapG, mapB] = mappe;
      const bufferR = new Array(256);
      const bufferG = new Array(256);
      const bufferB = nuovo Array(256);
      per (lascia che i = 0; i < 256; i++) {
        bufferR[i] = mappaR[i] / 255;
        bufferG[i] = mappaG[i] / 255;
        bufferB[i] = mappaB[i] / 255;
      }
      tabellaR = bufferR.join(",");
      tabellaG = bufferG.join(",");
      tabellaB = bufferB.join(",");
      chiave = `${tabellaR}${tabellaG}${tabellaB}`;
    }
    valore = questo.#cache.get(chiave);
    se (valore) {
      questo.#cache.set(mappe, valore);
      valore di ritorno;
    }
    const id = `g_${this.#docId}_transfer_map_${this.#id++}`;
    costante url = `url(#${id})`;
    questo.#cache.set(mappe, url);
    questo.#cache.set(chiave, url);
    const filter = this.#createFilter(id);
    questo.#addTransferMapConversion(tabellaR, tabellaG, tabellaB, filtro);
    URL di ritorno;
  }
  addHCMFilter(fgColor, bgColor) {
    const key = `${fgColor}-${bgColor}`;
    se (questo.#hcmKey === chiave) {
      restituisci questo.#hcmUrl;
    }
    questo.#hcmKey = chiave;
    questo.#hcmUrl = "nessuno";
    questo.#hcmFilter?.remove();
    se (!fgColor || !bgColor) {
      restituisci questo.#hcmUrl;
    }
    const fgRGB = this.#getRGB(fgColor);
    fgColor = _util.Util.makeHexColor(...fgRGB);
    const bgRGB = this.#getRGB(bgColor);
    bgColor = _util.Util.makeHexColor(...bgRGB);
    questo.#defs.style.color = "";
    if (fgColor === "#000000" && bgColor === "#ffffff" || fgColor === bgColor) {
      restituisci questo.#hcmUrl;
    }
    const map = new Array(256);
    per (lascia che i = 0; i <= 255; i++) {
      costante x = i / 255;
      mappa[i] = x <= 0,03928 ? x / 12,92 : ((x + 0,055) / 1,055) ** 2,4;
    }
    const table = map.join(",");
    const id = `g_${this.#docId}_hcm_filter`;
    filtro costante = questo.#hcmHighlightFilter = questo.#createFilter(id);
    questo.#addTransferMapConversion(tabella, tabella, tabella, filtro);
    questo.#addGrayConversion(filtro);
    const getSteps = (c, n) => {
      const inizio = fgRGB[c] / 255;
      const fine = bgRGB[c] / 255;
      const arr = new Array(n + 1);
      per (lascia che i = 0; i <= n; i++) {
        arr[i] = inizio + i / n * (fine - inizio);
      }
      restituisci arr.join(",");
    };
    questo.#addTransferMapConversion(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), filtro);
    questo.#hcmUrl = `url(#${id})`;
    restituisci questo.#hcmUrl;
  }
  addHighlightHCMFilter(fgColor, bgColor, newFgColor, newBgColor) {
    const key = `${fgColor}-${bgColor}-${newFgColor}-${newBgColor}`;
    se (questo.#hcmHighlightKey === chiave) {
      restituisci questo.#hcmHighlightUrl;
    }
    questo.#hcmHighlightKey = chiave;
    questo.#hcmHighlightUrl = "nessuno";
    questo.#hcmHighlightFilter?.remove();
    se (!fgColor || !bgColor) {
      restituisci questo.#hcmHighlightUrl;
    }
    const [fgRGB, bgRGB] = [fgColor, bgColor].map(this.#getRGB.bind(this));
    lascia fgGray = Math.round(0,2126 * fgRGB[0] + 0,7152 * fgRGB[1] + 0,0722 * fgRGB[2]);
    lascia bgGray = Math.round(0,2126 * bgRGB[0] + 0,7152 * bgRGB[1] + 0,0722 * bgRGB[2]);
    lascia [newFgRGB, newBgRGB] = [newFgColor, newBgColor].map(this.#getRGB.bind(this));
    se (bgGray < fgGray) {
      [fgGray, bgGray, newFgRGB, newBgRGB] = [bgGray, fgGray, newBgRGB, newFgRGB];
    }
    questo.#defs.style.color = "";
    const getSteps = (fg, bg, n) => {
      const arr = new Array(256);
      passo costante = (bgGray - fgGray) / n;
      const newStart = fg / 255;
      const newStep = (bg - fg) / (255 * n);
      lascia prev = 0;
      per (lascia che i = 0; i <= n; i++) {
        const k = Math.round(fgGray + i * step);
        valore costante = newStart + i * newStep;
        per (lascia che j = prev; j <= k; j++) {
          arr[j] = valore;
        }
        precedente = k + 1;
      }
      per (lascia che i = prev; i < 256; i++) {
        arr[i] = arr[prec - 1];
      }
      restituisci arr.join(",");
    };
    const id = `g_${this.#docId}_hcm_highlight_filter`;
    filtro costante = questo.#hcmHighlightFilter = questo.#createFilter(id);
    questo.#addGrayConversion(filtro);
    questo.#addTransferMapConversion(getSteps(newFgRGB[0], newBgRGB[0], 5), getSteps(newFgRGB[1], newBgRGB[1], 5), getSteps(newFgRGB[2], newBgRGB[2], 5), filtro);
    questo.#hcmHighlightUrl = `url(#${id})`;
    restituisci questo.#hcmHighlightUrl;
  }
  distruggi(keepHCM = false) {
    se (keepHCM && (this.#hcmUrl || this.#hcmHighlightUrl)) {
      ritorno;
    }
    se (questo.#_defs) {
      questo.#_defs.parentNode.parentNode.remove();
      questo.#_defs = null;
    }
    se (questo.#_cache) {
      questo.#_cache.clear();
      questo.#_cache = null;
    }
    questo.#id = 0;
  }
  #addGrayConversion(filtro) {
    const feColorMatrix = this.#document.createElementNS(SVG_NS, "feColorMatrix");
    feColorMatrix.setAttribute("tipo", "matrice");
    feColorMatrix.setAttribute("valori", "0,2126 0,7152 0,0722 0 0 0,2126 0,7152 0,0722 0 0 0,2126 0,7152 0,0722 0 0 0 0 0 1 0");
    filtro.append(feColorMatrix);
  }
  #creaFilter(id) {
    const filter = this.#document.createElementNS(SVG_NS, "filtro");
    filter.setAttribute("filtri-di-interpolazione-del-colore", "sRGB");
    filtro.setAttribute("id", id);
    questo.#defs.append(filtro);
    filtro di ritorno;
  }
  #appendFeFunc(feComponentTransfer, func, table) {
    const feFunc = this.#document.createElementNS(SVG_NS, func);
    feFunc.setAttribute("tipo", "discreto");
    feFunc.setAttribute("tableValues", tabella);
    feComponentTransfer.append(feFunc);
  }
  #addTransferMapConversion(rTable, gTable, bTable, filtro) {
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filtro.append(feComponentTransfer);
    questo.#appendFeFunc(feComponentTransfer, "feFuncR", rTable);
    questo.#appendFeFunc(feComponentTransfer, "feFuncG", gTable);
    questo.#appendFeFunc(feComponentTransfer, "feFuncB", bTable);
  }
  #getRGB(colore) {
    questo.#defs.style.color = colore;
    restituisci getRGB(getComputedStyle(this.#defs).getPropertyValue("colore"));
  }
}
esportazioni.DOMFilterFactory = DOMFilterFactory;
classe DOMCanvasFactory estende _base_factory.BaseCanvasFactory {
  costruttore({
    ownerDocument = globalThis.document
  } = {}) {
    super();
    this._document = ownerDocument;
  }
  _createCanvas(larghezza, altezza) {
    const canvas = this._document.createElement("canvas");
    canvas.width = larghezza;
    canvas.height = altezza;
    restituire la tela;
  }
}
esportazioni.DOMCanvasFactory = DOMCanvasFactory;
funzione asincrona fetchData(url, asTypedArray = false) {
  se (isValidFetchUrl(url, document.baseURI)) {
    risposta costante = attendi fetch(url);
    se (!risposta.ok) {
      genera un nuovo errore (response.statusText);
    }
    restituisci asTypedArray ? new Uint8Array(await response.arrayBuffer()) : (0, _util.stringToBytes)(await response.text());
  }
  restituisci nuova promessa((risolvi, rifiuta) => {
    richiesta costante = nuova XMLHttpRequest();
    richiesta.apri("GET", url, true);
    se (comeArrayTipizzato) {
      request.responseType = "arraybuffer";
    }
    richiesta.onreadystatechange = () => {
      se (request.readyState !== XMLHttpRequest.DONE) {
        ritorno;
      }
      se (stato della richiesta === 200 || stato della richiesta === 0) {
        lascia i dati;
        se (asTypedArray && richiesta.risposta) {
          dati = nuovo Uint8Array(richiesta.risposta);
        } altrimenti se (!asTypedArray && request.responseText) {
          dati = (0, _util.stringToBytes)(richiesta.rispostaTesto);
        }
        se (dati) {
          risolvere(dati);
          ritorno;
        }
      }
      rifiuta(nuovo errore(richiesta.statoTesto));
    };
    richiesta.invia(null);
  });
}
classe DOMCMapReaderFactory estende _base_factory.BaseCMapReaderFactory {
  _fetchData(url, tipo di compressione) {
    restituisci fetchData(url, this.isCompressed).then(data => {
      ritorno {
        cMapData: dati,
        tipo di compressione
      };
    });
  }
}
esportazioni.DOMCMapReaderFactory = DOMCMapReaderFactory;
classe DOMStandardFontDataFactory estende _base_factory.BaseStandardFontDataFactory {
  _fetchData(url) {
    restituisci fetchData(url, true);
  }
}
esportazioni.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
classe DOMSVGFactory estende _base_factory.BaseSVGFactory {
  _createSVG(tipo) {
    restituisci document.createElementNS(SVG_NS, tipo);
  }
}
esportazioni.DOMSVGFactory = DOMSVGFactory;
classe PageViewport {
  costruttore({
    viewBox,
    scala,
    rotazione,
    offsetX = 0,
    offsetY = 0,
    dontFlip = falso
  }) {
    questo.viewBox = viewBox;
    this.scale = scala;
    this.rotation = rotazione;
    questo.offsetX = offsetX;
    questo.offsetY = offsetY;
    const centerX = (viewBox[2] + viewBox[0]) / 2;
    const centerY = (viewBox[3] + viewBox[1]) / 2;
    lascia ruotareA, ruotareB, ruotareC, ruotareD;
    rotazione %= 360;
    se (rotazione < 0) {
      rotazione += 360;
    }
    interruttore (rotazione) {
      caso 180:
        ruotaA = -1;
        ruotaB = 0;
        ruotaC = 0;
        ruotatoD = 1;
        rottura;
      caso 90:
        ruotaA = 0;
        ruotaB = 1;
        ruotaC = 1;
        ruotatoD = 0;
        rottura;
      caso 270:
        ruotaA = 0;
        ruotaB = -1;
        ruotaC = -1;
        ruotatoD = 0;
        rottura;
      caso 0:
        ruotaA = 1;
        ruotaB = 0;
        ruotaC = 0;
        ruotatoD = -1;
        rottura;
      predefinito:
        throw new Error("PageViewport: rotazione non valida, deve essere un multiplo di 90 gradi.");
    }
    se (non capovolgere) {
      ruotaC = -ruotaC;
      ruotaD = -ruotaD;
    }
    lascia offsetCanvasX, offsetCanvasY;
    lascia larghezza, altezza;
    se (ruotaA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scala + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scala + offsetY;
      larghezza = (viewBox[3] - viewBox[1]) * scala;
      altezza = (viewBox[2] - viewBox[0]) * scala;
    } altro {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scala + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scala + offsetY;
      larghezza = (viewBox[2] - viewBox[0]) * scala;
      altezza = (viewBox[3] - viewBox[1]) * scala;
    }
    this.transform = [rotateA * scala, rotateB * scala, rotateC * scala, rotateD * scala, offsetCanvasX - rotateA * scala * centroX - rotateC * scala * centroY, offsetCanvasY - rotateB * scala * centroX - rotateD * scala * centroY];
    this.width = larghezza;
    this.height = altezza;
  }
  ottieni rawDims() {
    costante {
      viewBox
    } = questo;
    return (0, _util.shadow)(this, "rawDims", {
      Larghezza pagina: viewBox[2] - viewBox[0],
      altezza pagina: viewBox[3] - viewBox[1],
      paginaX: viewBox[0],
      paginaY: viewBox[1]
    });
  }
  clone({
    scala = questa.scala,
    rotazione = questa.rotazione,
    offsetX = questo.offsetX,
    offsetY = questo.offsetY,
    dontFlip = falso
  } = {}) {
    restituisci nuovo PageViewport({
      viewBox: this.viewBox.slice(),
      scala,
      rotazione,
      offsetX,
      offsetY,
      non capovolgere
    });
  }
  convertToViewportPoint(x, y) {
    restituisci _util.Util.applyTransform([x, y], this.transform);
  }
  convertToViewportRectangle(rect) {
    const topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);
    const bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);
    ritorno [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
  }
  convertToPdfPoint(x, y) {
    restituisci _util.Util.applyInverseTransform([x, y], this.transform);
  }
}
esportazioni.PageViewport = PageViewport;
classe RenderingCancelledException estende _util.BaseException {
  costruttore(msg, extraDelay = 0) {
    super(msg, "RenderingCancelledException");
    questo.ritardoextra = ritardoextra;
  }
}
esportazioni.RenderingCancelledException = RenderingCancelledException;
funzione isDataScheme(url) {
  const ii = url.length;
  sia i = 0;
  mentre (i < ii && url[i].trim() === "") {
    i++;
  }
  restituisci url.substring(i, i + 5).toLowerCase() === "dati:";
}
funzione isPdfFile(nomefile) {
  restituisci il tipo di nome file === "stringa" && /\.pdf$/i.test(nome file);
}
funzione getFilenameFromUrl(url, onlyStripPath = false) {
  se (!onlyStripPath) {
    [url] = url.split(/[#?]/, 1);
  }
  restituisci url.substring(url.lastIndexOf("/") + 1);
}
funzione getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
  se (tipo di URL !== "stringa") {
    restituisci defaultFilename;
  }
  se (isDataScheme(url)) {
    (0, _util.warn)('getPdfFilenameFromUrl: ignora "data:"-URL per motivi di prestazioni.');
    restituisci defaultFilename;
  }
  const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  const splitURI = reURI.exec(url);
  lascia suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
  se (nomefile suggerito) {
    suggestedFilename = suggestedFilename[0];
    se (suggestedFilename.includes("%")) {
      Tentativo {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } presa {}
    }
  }
  restituisci suggestedFilename || defaultFilename;
}
classe StatTimer {
  avviato = Object.create(null);
  volte = [];
  tempo(nome) {
    se (nome in this.started) {
      (0, _util.warn)(`Il timer è già in esecuzione per ${name}`);
    }
    questo.iniziato[nome] = Data.ora();
  }
  timeEnd(nome) {
    se (!(nome in questo.iniziato)) {
      (0, _util.warn)(`Il timer non è stato avviato per ${name}`);
    }
    questo.volte.spinta({
      nome,
      inizio: questo.iniziato[nome],
      fine: Data.ora()
    });
    elimina questo.avviato[nome];
  }
  alla stringa() {
    const outBuf = [];
    lascia più lungo = 0;
    per (cost {
      nome
    } di questo.volte) {
      più lungo = Math.max(nome.lunghezza, più lungo);
    }
    per (cost {
      nome,
      inizio,
      FINE
    } di questo.volte) {
      outBuf.push(`${name.padEnd(più lungo)} ${end - start}ms\n`);
    }
    restituisci outBuf.join("");
  }
}
esportazioni.StatTimer = StatTimer;
funzione isValidFetchUrl(url, baseUrl) {
  Tentativo {
    costante {
      protocollo
    } = baseUrl ? nuovo URL(url, baseUrl) : nuovo URL(url);
    protocollo di ritorno === "http:" || protocollo === "https:";
  } presa {
    restituisci falso;
  }
}
funzione noContextMenu(e) {
  e.preventDefault();
}
funzione loadScript(src, removeScriptElement = false) {
  restituisci nuova promessa((risolvi, rifiuta) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = funzione (evt) {
      se (rimuoviScriptElement) {
        script.remove();
      }
      risolvere(evt);
    };
    script.onerror = funzione () {
      reject(new Error(`Impossibile caricare lo script in: ${script.src}`));
    };
    (documento.head || documento.documentElement).append(script);
  });
}
funzione deprecata (dettagli) {
  console.log("Utilizzo API obsoleto: " + dettagli);
}
lascia pdfDateStringRegex;
classe PDFDateString {
  statico toDateObject(input) {
    se (!input || tipo di input !== "stringa") {
      restituisci null;
    }
    pdfDateStringRegex ||= new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
    corrispondenze costanti = pdfDateStringRegex.exec(input);
    se (!corrisponde) {
      restituisci null;
    }
    const anno = parseInt(matches[1], 10);
    lascia mese = parseInt(matches[2], 10);
    mese = mese >= 1 e mese <= 12 ? mese - 1 : 0;
    let giorno = parseInt(corrisponde[3], 10);
    giorno = giorno >= 1 && giorno <= 31 ? giorno : 1;
    lascia ora = parseInt(matches[4], 10);
    ora = ora >= 0 e ora <= 23 ? ora : 0;
    lascia minuto = parseInt(matches[5], 10);
    minuto = minuto >= 0 && minuto <= 59 ? minuto : 0;
    lascia secondo = parseInt(matches[6], 10);
    secondo = secondo >= 0 && secondo <= 59 ? secondo : 0;
    const universalTimeRelation = matches[7] || "Z";
    lascia offsetHour = parseInt(matches[8], 10);
    offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
    lascia offsetMinute = parseInt(matches[9], 10) || 0;
    offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
    se (universalTimeRelation === "-") {
      ora += offsetHour;
      minuto += offsetMinuto;
    } altrimenti se (universalTimeRelation === "+") {
      ora -= offsetHour;
      minuto -= offsetMinuto;
    }
    restituisci nuova Data(Data.UTC(anno, mese, giorno, ora, minuto, secondo));
  }
}
esportazioni.PDFDateString = PDFDateString;
funzione getXfaPageViewport(xfaPage, {
  scala = 1,
  rotazione = 0
}) {
  costante {
    larghezza,
    altezza
  } = xfaPage.attributes.style;
  const viewBox = [0, 0, parseInt(larghezza), parseInt(altezza)];
  restituisci nuovo PageViewport({
    viewBox,
    scala,
    rotazione
  });
}
funzione getRGB(colore) {
  se (colore.iniziaCon("#")) {
    const colorRGB = parseInt(color.slice(1), 16);
    ritorna [(colorRGB & 0xff0000) >> 16, (colorRGB & 0x00ff00) >> 8, colorRGB & 0x0000ff];
  }
  se (colore.iniziaCon("rgb(")) {
    restituisci colore.fetta(4, -1).split(",").map(x => parseInt(x));
  }
  se (colore.iniziaCon("rgba(")) {
    restituisci colore.fetta(5, -1).dividi(",").mappa(x => parseInt(x)).fetta(0, 3);
  }
  (0, _util.warn)(`Non è un formato di colore valido: "${color}"`);
  ritorno [0, 0, 0];
}
funzione getColorValues(colori) {
  const span = document.createElement("span");
  span.style.visibility = "nascosto";
  documento.corpo.append(span);
  per (const nome di colors.keys()) {
    span.style.color = nome;
    const computedColor = window.getComputedStyle(span).color;
    colors.set(nome, getRGB(colore calcolato));
  }
  span.remove();
}
funzione getCurrentTransform(ctx) {
  costante {
    UN,
    B,
    C,
    D,
    e,
    F
  } = ctx.getTransform();
  ritorno [a, b, c, d, e, f];
}
funzione getCurrentTransformInverse(ctx) {
  costante {
    UN,
    B,
    C,
    D,
    e,
    F
  } = ctx.getTransform().invertSelf();
  ritorno [a, b, c, d, e, f];
}
funzione setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
  se (istanza viewport di PageViewport) {
    costante {
      Larghezza pagina,
      altezza della pagina
    } = viewport.rawDims;
    costante {
      stile
    } = div;
    const useRound = _util.FeatureTest.isCSSRoundSupported;
    const w = `var(--fattore di scala) * ${pageWidth}px`,
      h = `var(--fattore-scala) * ${pageHeight}px`;
    const widthStr = useRound ? `round(${w}, 1px)` : `calc(${w})`,
      heightStr = useRound ? `round(${h}, 1px)` : `calc(${h})`;
    se (!mustFlip || viewport.rotation % 180 === 0) {
      stile.larghezza = widthStr;
      stile.altezza = heightStr;
    } altro {
      stile.larghezza = altezzaStr;
      stile.altezza = larghezzaStr;
    }
  }
  se (deveRuotare) {
    div.setAttribute("rotazione-principale-dati", viewport.rotation);
  }
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.BaseStandardFontDataFactory = esportazioni.BaseSVGFactory = esportazioni.BaseFilterFactory = esportazioni.BaseCanvasFactory = esportazioni.BaseCMapReaderFactory = void 0;
var _util = __w_pdfjs_require__(1);
classe BaseFilterFactory {
  costruttore() {
    se (questo.costruttore === BaseFilterFactory) {
      (0, _util.unreachable)("Impossibile inizializzare BaseFilterFactory.");
    }
  }
  addFilter(mappe) {
    restituisci "nessuno";
  }
  addHCMFilter(fgColor, bgColor) {
    restituisci "nessuno";
  }
  addHighlightHCMFilter(fgColor, bgColor, newFgColor, newBgColor) {
    restituisci "nessuno";
  }
  distruggi(keepHCM = false) {}
}
esportazioni.BaseFilterFactory = BaseFilterFactory;
classe BaseCanvasFactory {
  costruttore() {
    se (questo.costruttore === BaseCanvasFactory) {
      (0, _util.unreachable)("Impossibile inizializzare BaseCanvasFactory.");
    }
  }
  crea(larghezza, altezza) {
    se (larghezza <= 0 || altezza <= 0) {
      genera un nuovo errore("Dimensione della tela non valida");
    }
    const canvas = this._createCanvas(larghezza, altezza);
    ritorno {
      tela,
      contesto: canvas.getContext("2d")
    };
  }
  reset(canvasAndContext, larghezza, altezza) {
    se (!canvasAndContext.canvas) {
      genera un nuovo errore("La tela non è specificata");
    }
    se (larghezza <= 0 || altezza <= 0) {
      genera un nuovo errore("Dimensione della tela non valida");
    }
    canvasAndContext.canvas.width = larghezza;
    canvasAndContext.canvas.height = altezza;
  }
  distruggere(canvasAndContext) {
    se (!canvasAndContext.canvas) {
      genera un nuovo errore("La tela non è specificata");
    }
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
  _createCanvas(larghezza, altezza) {
    (0, _util.unreachable)("Metodo astratto `_createCanvas` chiamato.");
  }
}
esportazioni.BaseCanvasFactory = BaseCanvasFactory;
classe BaseCMapReaderFactory {
  costruttore({
    baseUrl = null,
    è compresso = vero
  }) {
    se (questo.costruttore === BaseCMapReaderFactory) {
      (0, _util.unreachable)("Impossibile inizializzare BaseCMapReaderFactory.");
    }
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }
  recupero asincrono({
    nome
  }) {
    se (!this.baseUrl) {
      throw new Error('È necessario specificare il parametro "baseUrl" di CMap, assicurarsi che siano forniti i parametri API "cMapUrl" e "cMapPacked".');
    }
    se (!nome) {
      throw new Error("È necessario specificare il nome CMap.");
    }
    const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
    const compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;
    restituisci questo._fetchData(url, compressionType).catch(reason => {
      throw new Error(`Impossibile caricare ${this.isCompressed ? "binary " : ""}CMap in: ${url}`);
    });
  }
  _fetchData(url, tipo di compressione) {
    (0, _util.unreachable)("Metodo astratto `_fetchData` chiamato.");
  }
}
esportazioni.BaseCMapReaderFactory = BaseCMapReaderFactory;
classe BaseStandardFontDataFactory {
  costruttore({
    baseUrl = null
  }) {
    se (questo.costruttore === BaseStandardFontDataFactory) {
      (0, _util.unreachable)("Impossibile inizializzare BaseStandardFontDataFactory.");
    }
    this.baseUrl = baseUrl;
  }
  recupero asincrono({
    nome del file
  }) {
    se (!this.baseUrl) {
      throw new Error('È necessario specificare il parametro "baseUrl" del font standard, assicurarsi che sia fornito il parametro API "standardFontDataUrl".');
    }
    se (!nomefile) {
      throw new Error("È necessario specificare il nome del file del font.");
    }
    const url = `${this.baseUrl}${filename}`;
    restituisci questo._fetchData(url).catch(motivo => {
      throw new Error(`Impossibile caricare i dati del font in: ${url}`);
    });
  }
  _fetchData(url) {
    (0, _util.unreachable)("Metodo astratto `_fetchData` chiamato.");
  }
}
esportazioni.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
classe BaseSVGFactory {
  costruttore() {
    se (questo.costruttore === BaseSVGFactory) {
      (0, _util.unreachable)("Impossibile inizializzare BaseSVGFactory.");
    }
  }
  create(larghezza, altezza, skipDimensions = false) {
    se (larghezza <= 0 || altezza <= 0) {
      genera un nuovo errore("Dimensioni SVG non valide");
    }
    const svg = this._createSVG("svg:svg");
    svg.setAttribute("versione", "1.1");
    se (!skipDimensions) {
      svg.setAttribute("larghezza", `${larghezza}px`);
      svg.setAttribute("altezza", `${altezza}px`);
    }
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("viewBox", `0 0 ${larghezza} ${altezza}`);
    restituisci svg;
  }
  createElement(tipo) {
    se (tipo di tipo !== "stringa") {
      genera un nuovo errore("Tipo di elemento SVG non valido");
    }
    restituisci questo._createSVG(tipo);
  }
  _createSVG(tipo) {
    (0, _util.unreachable)("Metodo astratto `_createSVG` chiamato.");
  }
}
esportazioni.BaseSVGFactory = BaseSVGFactory;

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.MurmurHash3_64 = void 0;
var _util = __w_pdfjs_require__(1);
const SEED = 0xc3d2e1f0;
const MASK_HIGH = 0xffff0000;
const MASK_LOW = 0xffff;
classe MurmurHash3_64 {
  costruttore(seme) {
    this.h1 = seme ? seme & 0xffffffff : SEED;
    this.h2 = seme ? seme & 0xffffffff : SEED;
  }
  aggiorna(input) {
    lascia dati, lunghezza;
    se (tipo di input === "stringa") {
      dati = nuovo Uint8Array(input.lunghezza * 2);
      lunghezza = 0;
      per (lascia che i = 0, ii = input.length; i < ii; i++) {
        codice costante = input.charCodeAt(i);
        se (codice <= 0xff) {
          dati[lunghezza++] = codice;
        } altro {
          dati[lunghezza++] = codice >>> 8;
          dati[lunghezza++] = codice & 0xff;
        }
      }
    } altrimenti se ((0, _util.isArrayBuffer)(input)) {
      dati = input.slice();
      lunghezza = data.byteLength;
    } altro {
      throw new Error("Formato dati errato in MurmurHash3_64_update. " + "L'input deve essere una stringa o un array.");
    }
    const blockCounts = lunghezza >> 2;
    const tailLength = lunghezza - blockCounts * 4;
    const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
    sia k1 = 0,
      k2 = 0;
    lascia h1 = questo.h1,
      h2 = questo.h2;
    costante C1 = 0xcc9e2d51,
      C2 = 0x1b873593;
    const C1_LOW = C1 & MASK_LOW,
      C2_LOW = C2 & MASK_LOW;
    per (lascia che i = 0; i < conteggi blocco; i++) {
      se (i & 1) {
        k1 = dataUint32[i];
        k1 = k1 * C1 & MASCHERA_ALTA | k1 * C1_BASSA & MASCHERA_BASSA;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASCHERA_ALTA | k1 * C2_BASSA & MASCHERA_BASSA;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = h1 * 5 + 0xe6546b64;
      } altro {
        k2 = dataUint32[i];
        k2 = k2 * C1 & MASCHERA_ALTA | k2 * C1_BASSA & MASCHERA_BASSA;
        k2 = k2 << 15 | k2 >>> 17;
        k2 = k2 * C2 & MASCHERA_ALTA | k2 * C2_BASSA & MASCHERA_BASSA;
        h2 ^= k2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = h2 * 5 + 0xe6546b64;
      }
    }
    k1 = 0;
    switch (lunghezza della coda) {
      caso 3:
        k1 ^= dati[conteggiblocco * 4 + 2] << 16;
      caso 2:
        k1 ^= dati[conteggiblocco * 4 + 1] << 8;
      caso 1:
        k1 ^= dati[conteggiblocco * 4];
        k1 = k1 * C1 & MASCHERA_ALTA | k1 * C1_BASSA & MASCHERA_BASSA;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASCHERA_ALTA | k1 * C2_BASSA & MASCHERA_BASSA;
        se (conteggi blocco & 1) {
          h1 ^= k1;
        } altro {
          h2 ^= k1;
        }
    }
    questo.h1 = h1;
    questo.h2 = h2;
  }
  esadecimale() {
    lascia h1 = questo.h1,
      h2 = questo.h2;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0xed558ccd & MASK_HIGH | h1 * 0x8ccd & MASK_LOW;
    h2 = h2 * 0xff51afd7 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xafd7ed55 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0x1a85ec53 & MASCHERA_ALTA | h1 * 0xec53 & MASCHERA_BASSA;
    h2 = h2 * 0xc4ceb9fe & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xb9fe1a85 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    ritorno (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
  }
}
esportazioni.MurmurHash3_64 = MurmurHash3_64;

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.FontLoader = esportazioni.FontFaceObject = void 0;
var _util = __w_pdfjs_require__(1);
classe FontLoader {
  #systemFonts = new Set();
  costruttore({
    ownerDocument = globalThis.document,
    styleElement = null
  }) {
    this._document = ownerDocument;
    this.nativeFontFaces = new Set();
    questo.styleElement = null;
    questo.richieste di caricamento = [];
    questo.loadTestFontId = 0;
  }
  addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.add(nativeFontFace);
    this._document.fonts.add(nativeFontFace);
  }
  removeNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.delete(nativeFontFace);
    this._document.fonts.delete(nativeFontFace);
  }
  inserisciRegola(regola) {
    se (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    const styleSheet = this.styleElement.sheet;
    styleSheet.insertRule(regola, styleSheet.cssRules.length);
  }
  chiaro() {
    per (const nativeFontFace di this.nativeFontFaces) {
      this._document.fonts.delete(nativeFontFace);
    }
    this.nativeFontFaces.clear();
    questo.#systemFonts.clear();
    se (questo.elementostile) {
      questo.styleElement.remove();
      questo.styleElement = null;
    }
  }
  asincrono loadSystemFont(info) {
    se (!info || questo.#systemFonts.has(info.loadedName)) {
      ritorno;
    }
    (0, _util.assert)(!this.disableFontFace, "loadSystemFont non dovrebbe essere chiamato quando è impostato `disableFontFace`.");
    se (this.isFontLoadingAPISupported) {
      costante {
        Nome caricato,
        fonte,
        stile
      } = informazioni;
      const fontFace = new FontFace(loadedName, src, style);
      this.addNativeFontFace(fontFace);
      Tentativo {
        attendi fontFace.load();
        questo.#systemFonts.add(loadedName);
      } presa {
        (0, _util.warn)(`Impossibile caricare il font di sistema: ${info.baseFontName}, installarlo potrebbe aiutare a migliorare il rendering del PDF.`);
        this.removeNativeFontFace(fontFace);
      }
      ritorno;
    }
    (0, _util.unreachable)("Non implementato: loadSystemFont senza l'API di caricamento dei font.");
  }
  async bind(font) {
    se (font.attached || font.missingFile && !font.systemFontInfo) {
      ritorno;
    }
    font.attached = true;
    se (font.systemFontInfo) {
      attendi questo.loadSystemFont(font.systemFontInfo);
      ritorno;
    }
    se (this.isFontLoadingAPISupported) {
      const nativeFontFace = font.createNativeFontFace();
      se (nativeFontFace) {
        this.addNativeFontFace(nativeFontFace);
        Tentativo {
          attendi nativeFontFace.loaded;
        } catturare (es.) {
          (0, _util.warn)(`Impossibile caricare il font '${nativeFontFace.family}': '${ex}'.`);
          font.disableFontFace = true;
          lanciare ex;
        }
      }
      ritorno;
    }
    regola costante = font.createFontFaceRule();
    se (regola) {
      this.insertRule(regola);
      se (this.isSyncFontLoadingSupported) {
        ritorno;
      }
      attendi nuova promessa(risolvi => {
        richiesta costante = this._queueLoadingCallback(resolve);
        this._prepareFontLoadEvent(font, richiesta);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const hasFonts = !!this._document?.fonts;
    return (0, _util.shadow)(this, "isFontLoadingAPISupported", hasFonts);
  }
  ottieni isSyncFontLoadingSupported() {
    lascia supportato = falso;
    se (_util.isNodeJS) {
      supportato = vero;
    } else if (typeof navigator !== "undefined" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) {
      supportato = vero;
    }
    return (0, _util.shadow)(this, "isSyncFontLoadingSupported", supportato);
  }
  _queueLoadingCallback(callback) {
    funzione completeRequest() {
      (0, _util.assert)(!request.done, "completeRequest() non può essere chiamato due volte.");
      richiesta.fatto = vero;
      while (loadingRequests.length > 0 && loadingRequests[0].done) {
        const otherRequest = loadingRequests.shift();
        setTimeout(altraRichiesta.callback, 0);
      }
    }
    costante {
      caricamentoRichieste
    } = questo;
    richiesta costante = {
      fatto: falso,
      completo: completeRequest,
      richiamare
    };
    caricamentoRichieste.push(richiesta);
    richiesta di reso;
  }
  ottieni _loadTestFont() {
    const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAAA" + "AQAAAAEAAAAAAAAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAAA==");
    return (0, _util.shadow)(this, "_loadTestFont", testFont);
  }
  _prepareFontLoadEvent(font, richiesta) {
    funzione int32(dati, offset) {
      restituisci data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
    }
    funzione spliceString(s, offset, rimuovi, inserisci) {
      const chunk1 = s.substring(0, offset);
      const chunk2 = s.substring(offset + remove);
      restituisci chunk1 + inserisci + chunk2;
    }
    sia i, ii;
    const canvas = this._document.createElement("canvas");
    larghezza tela = 1;
    altezza tela = 1;
    const ctx = canvas.getContext("2d");
    lascia chiamato = 0;
    funzione isFontReady(nome, callback) {
      se (++chiamato > 30) {
        (0, _util.warn)("Il font del test di caricamento non è mai stato caricato.");
        richiamare();
        ritorno;
      }
      ctx.font = "30px " + nome;
      ctx.fillText(".", 0, 20);
      const imageData = ctx.getImageData(0, 0, 1, 1);
      se (imageData.data[3] > 0) {
        richiamare();
        ritorno;
      }
      setTimeout(isFontReady.bind(null, nome, callback));
    }
    const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
    lascia dati = this._loadTestFont;
    const COMMENT_OFFSET = 976;
    dati = spliceString(dati, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
    const CFF_CHECKSUM_OFFSET = 16;
    const XXXX_VALORE = 0x58585858;
    lascia checksum = int32(dati, CFF_CHECKSUM_OFFSET);
    per (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
    }
    se (i < loadTestFontId.length) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
    }
    dati = spliceString(dati, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
    const url = `url(data:font/opentype;base64,${btoa(data)});`;
    regola costante = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
    this.insertRule(regola);
    const div = this._document.createElement("div");
    div.style.visibility = "nascosto";
    div.style.width = div.style.height = "10px";
    div.style.position = "assoluto";
    div.style.top = div.style.left = "0px";
    per (const nome di [font.loadedName, loadTestFontId]) {
      const span = this._document.createElement("span");
      span.textContent = "Ciao";
      span.style.fontFamily = nome;
      div.append(span);
    }
    this._document.body.append(div);
    isFontReady(loadTestFontId, () => {
      div.remove();
      richiesta.completa();
    });
  }
}
esportazioni.FontLoader = FontLoader;
classe FontFaceObject {
  costruttore(dati tradotti, {
    isEvalSupported = true,
    disableFontFace = false,
    ignoreErrors = false,
    inspectFont = null
  }) {
    this.compiledGlyphs = Object.create(null);
    per (const i in translatedData) {
      questo[i] = dati tradotti[i];
    }
    this.isEvalSupported = isEvalSupported !== false;
    this.disableFontFace = disableFontFace === true;
    this.ignoreErrors = ignoreErrors === true;
    this._inspectFont = inspectFont;
  }
  createNativeFontFace() {
    se (!this.data || this.disableFontFace) {
      restituisci null;
    }
    lascia nativeFontFace;
    se (!this.cssFontInfo) {
      nativeFontFace = new FontFace(this.loadedName, this.data, {});
    } altro {
      css costante = {
        peso: this.cssFontInfo.fontWeight
      };
      se (this.cssFontInfo.italicAngle) {
        css.style = `obliquo ${this.cssFontInfo.italicAngle}deg`;
      }
      nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
    }
    questo._ispezionaFont?.(questo);
    restituisci nativeFontFace;
  }
  createFontFaceRule() {
    se (!this.data || this.disableFontFace) {
      restituisci null;
    }
    dati costanti = (0, _util.bytesToString)(this.data);
    const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
    lascia che governi;
    se (!this.cssFontInfo) {
      regola = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
    } altro {
      lascia css = `font-weight: ${this.cssFontInfo.fontWeight};`;
      se (this.cssFontInfo.italicAngle) {
        css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
      }
      regola = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
    }
    this._inspectFont?.(questo, url);
    regola di ritorno;
  }
  getPathGenerator(oggetti, carattere) {
    se (this.compiledGlyphs[carattere] !== indefinito) {
      restituisci this.compiledGlyphs[carattere];
    }
    lascia cmds;
    Tentativo {
      cmds = objs.get(this.loadedName + "_path_" + carattere);
    } catturare (es.) {
      se (!this.ignoreErrors) {
        lanciare ex;
      }
      (0, _util.warn)(`getPathGenerator - ignora il carattere: "${ex}".`);
      restituisci this.compiledGlyphs[carattere] = funzione (c, dimensione) {};
    }
    if (this.isEvalSupported && _util.FeatureTest.isEvalSupported) {
      const jsBuf = [];
      per (const corrente di cmds) {
        const args = current.args !== indefinito ? current.args.join(",") : "";
        jsBuf.push("c.", current.cmd, "(", argomenti, ");\n");
      }
      restituisci this.compiledGlyphs[carattere] = new Function("c", "size", jsBuf.join(""));
    }
    restituisci this.compiledGlyphs[carattere] = funzione (c, dimensione) {
      per (const corrente di cmds) {
        se (current.cmd === "scala") {
          argomenti correnti = [dimensione, -dimensione];
        }
        c[current.cmd].apply(c, current.args);
      }
    };
  }
}
esportazioni.FontFaceObject = FontFaceObject;

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.NodeStandardFontDataFactory = esportazioni.NodeFilterFactory = esportazioni.NodeCanvasFactory = esportazioni.NodeCMapReaderFactory = void 0;
var _base_factory = __w_pdfjs_require__(7);
var _util = __w_pdfjs_require__(1);
;
;
const fetchData = funzione (url) {
  restituisci nuova promessa((risolvi, rifiuta) => {
    const fs = require("fs");
    fs.readFile(url, (errore, dati) => {
      se (errore || !dati) {
        rifiuta(nuovo Errore(errore));
        ritorno;
      }
      resolve(new Uint8Array(data));
    });
  });
};
classe NodeFilterFactory estende _base_factory.BaseFilterFactory {}
esportazioni.NodeFilterFactory = NodeFilterFactory;
classe NodeCanvasFactory estende _base_factory.BaseCanvasFactory {
  _createCanvas(larghezza, altezza) {
    const Canvas = require("canvas");
    restituisci Canvas.createCanvas(larghezza, altezza);
  }
}
esportazioni.NodeCanvasFactory = NodeCanvasFactory;
classe NodeCMapReaderFactory estende _base_factory.BaseCMapReaderFactory {
  _fetchData(url, tipo di compressione) {
    restituisci fetchData(url).then(data => {
      ritorno {
        cMapData: dati,
        tipo di compressione
      };
    });
  }
}
esportazioni.NodeCMapReaderFactory = NodeCMapReaderFactory;
classe NodeStandardFontDataFactory estende _base_factory.BaseStandardFontDataFactory {
  _fetchData(url) {
    restituisci fetchData(url);
  }
}
esportazioni.NodeStandardFontDataFactory = NodeStandardFontDataFactory;

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.CanvasGraphics = void 0;
var _util = __w_pdfjs_require__(1);
var _display_utils = __w_pdfjs_require__(6);
var _pattern_helper = __w_pdfjs_require__(12);
var _image_utils = __w_pdfjs_require__(13);
const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 100;
const MAX_GROUP_SIZE = 4096;
const TEMPO_ESECUZIONE = 15;
const PASSI_DI_ESECUZIONE = 10;
const MAX_SIZE_TO_COMPILE = 1000;
const ALTEZZA_FULL_CHUNK = 16;
funzione mirrorContextOperations(ctx, destCtx) {
  se (ctx._removeMirroring) {
    throw new Error("Il contesto sta già inoltrando le operazioni.");
  }
  ctx.__originalSave = ctx.save;
  ctx.__originalRestore = ctx.restore;
  ctx.__originalRotate = ctx.rotate;
  ctx.__originalScale = ctx.scale;
  ctx.__originalTranslate = ctx.translate;
  ctx.__originalTransform = ctx.transform;
  ctx.__originalSetTransform = ctx.setTransform;
  ctx.__originalResetTransform = ctx.resetTransform;
  ctx.__originalClip = ctx.clip;
  ctx.__originalMoveTo = ctx.moveTo;
  ctx.__originalLineTo = ctx.lineTo;
  ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
  ctx.__originalRect = ctx.rect;
  ctx.__originalClosePath = ctx.closePath;
  ctx.__originalBeginPath = ctx.beginPath;
  ctx._removeMirroring = () => {
    ctx.save = ctx.__originalSave;
    ctx.restore = ctx.__originalRestore;
    ctx.rotate = ctx.__originalRotate;
    ctx.scale = ctx.__originalScale;
    ctx.translate = ctx.__originalTranslate;
    ctx.transform = ctx.__originalTransform;
    ctx.setTransform = ctx.__originalSetTransform;
    ctx.resetTransform = ctx.__originalResetTransform;
    ctx.clip = ctx.__originalClip;
    ctx.moveTo = ctx.__originalMoveTo;
    ctx.lineTo = ctx.__originalLineTo;
    ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
    ctx.rect = ctx.__originalRect;
    ctx.closePath = ctx.__originalClosePath;
    ctx.beginPath = ctx.__originalBeginPath;
    elimina ctx._removeMirroring;
  };
  ctx.save = funzione ctxSave() {
    destCtx.save();
    questo.__originaleSalva();
  };
  ctx.restore = funzione ctxRestore() {
    destCtx.restore();
    questo.__originalRestore();
  };
  ctx.translate = funzione ctxTranslate(x, y) {
    destCtx.translate(x, y);
    questo.__originalTranslate(x, y);
  };
  ctx.scale = funzione ctxScale(x, y) {
    destCtx.scale(x, y);
    this.__originalScale(x, y);
  };
  ctx.transform = funzione ctxTransform(a, b, c, d, e, f) {
    destCtx.transform(a, b, c, d, e, f);
    this.__originalTransform(a, b, c, d, e, f);
  };
  ctx.setTransform = funzione ctxSetTransform(a, b, c, d, e, f) {
    destCtx.setTransform(a, b, c, d, e, f);
    this.__originalSetTransform(a, b, c, d, e, f);
  };
  ctx.resetTransform = funzione ctxResetTransform() {
    destCtx.resetTransform();
    questo.__originalResetTransform();
  };
  ctx.rotate = funzione ctxRotate(angolo) {
    destCtx.rotate(angolo);
    this.__originalRotate(angolo);
  };
  ctx.clip = funzione ctxRotate(regola) {
    destCtx.clip(regola);
    this.__originalClip(regola);
  };
  ctx.moveTo = funzione (x, y) {
    destCtx.moveTo(x, y);
    questo.__originaleSpostaSu(x, y);
  };
  ctx.lineTo = funzione (x, y) {
    destCtx.lineTo(x, y);
    this.__originalLineTo(x, y);
  };
  ctx.bezierCurveTo = funzione (cp1x, cp1y, cp2x, cp2y, x, y) {
    destCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    this.__originalBezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };
  ctx.rect = funzione (x, y, larghezza, altezza) {
    destCtx.rect(x, y, larghezza, altezza);
    this.__originalRect(x, y, larghezza, altezza);
  };
  ctx.closePath = funzione () {
    destCtx.closePath();
    questo.__originalClosePath();
  };
  ctx.beginPath = funzione () {
    destCtx.beginPath();
    questo.__originalBeginPath();
  };
}
classe CachedCanvases {
  costruttore(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = Object.create(null);
  }
  getCanvas(id, larghezza, altezza) {
    lascia canvasEntry;
    se (this.cache[id] !== indefinito) {
      canvasEntry = this.cache[id];
      this.canvasFactory.reset(canvasEntry, larghezza, altezza);
    } altro {
      canvasEntry = this.canvasFactory.create(larghezza, altezza);
      this.cache[id] = canvasEntry;
    }
    restituisci canvasEntry;
  }
  elimina(id) {
    elimina this.cache[id];
  }
  chiaro() {
    per (id costante in this.cache) {
      const canvasEntry = this.cache[id];
      this.canvasFactory.destroy(canvasEntry);
      elimina this.cache[id];
    }
  }
}
function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
  const [a, b, c, d, tx, ty] = (0, _display_utils.getCurrentTransform)(ctx);
  se (b === 0 e c === 0) {
    const tlX = destX * a + tx;
    const rTlX = Math.round(tlX);
    const tlY = destY * d + ty;
    const rTlY = Math.round(tlY);
    const brX = (destX + destW) * a + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destY + destH) * d + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
    ctx.setTransform(a, b, c, d, tx, ty);
    restituisci [rLarghezza, rAltezza];
  }
  se (a === 0 e d === 0) {
    const tlX = destY * c + tx;
    const rTlX = Math.round(tlX);
    const tlY = destX * b + ty;
    const rTlY = Math.round(tlY);
    const brX = (destY + destH) * c + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destX + destW) * b + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
    ctx.setTransform(a, b, c, d, tx, ty);
    restituisci [rAltezza, rLarghezza];
  }
  ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
  const scaleX = Math.hypot(a, b);
  const scaleY = Math.hypot(c, d);
  ritorno [scalaX * destW, scalaY * destH];
}
funzione compileType3Glyph(imgData) {
  costante {
    larghezza,
    altezza
  } = imgData;
  se (larghezza > DIMENSIONE_MASSIMA_DA_COMPILARE || altezza > DIMENSIONE_MASSIMA_DA_COMPILARE) {
    restituisci null;
  }
  const POINT_TO_PROCESS_LIMIT = 1000;
  const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
  const width1 = larghezza + 1;
  lascia punti = nuovo Uint8Array(larghezza1 * (altezza + 1));
  siano i, j, j0;
  const lineSize = larghezza + 7 & ~7;
  lascia che i dati = new Uint8Array(lineSize * altezza),
    posizione = 0;
  per (elemento costante di imgData.data) {
    lascia maschera = 128;
    mentre (maschera > 0) {
      dati[pos++] = elemento e maschera ? 0:255;
      maschera >>= 1;
    }
  }
  lascia conteggio = 0;
  posizione = 0;
  se (dati[pos] !== 0) {
    punti[0] = 1;
    ++conteggio;
  }
  per (j = 1; j < larghezza; j++) {
    se (dati[pos] !== dati[pos + 1]) {
      punti[j] = dati[pos] ? 2 : 1;
      ++conteggio;
    }
    posizione++;
  }
  se (dati[pos] !== 0) {
    punti[j] = 2;
    ++conteggio;
  }
  per (i = 1; i < altezza; i++) {
    pos = i * dimensionelinea;
    j0 = i * larghezza1;
    se (dati[pos - dimensionelinea] !== dati[pos]) {
      punti[j0] = dati[pos] ? 1 : 8;
      ++conteggio;
    }
    lascia che la somma = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
    per (j = 1; j < larghezza; j++) {
      somma = (somma >> 2) + (dati[pos + 1] ? 4 : 0) + (dati[pos - lineSize + 1] ? 8 : 0);
      se (TIPI_PUNTO[somma]) {
        punti[j0 + j] = POINT_TYPES[somma];
        ++conteggio;
      }
      posizione++;
    }
    se (dati[pos - dimensionelinea] !== dati[pos]) {
      punti[j0 + j] = dati[pos] ? 2 : 4;
      ++conteggio;
    }
    se (conteggio > POINT_TO_PROCESS_LIMIT) {
      restituisci null;
    }
  }
  pos = lineSize * (altezza - 1);
  j0 = i * larghezza1;
  se (dati[pos] !== 0) {
    punti[j0] = 8;
    ++conteggio;
  }
  per (j = 1; j < larghezza; j++) {
    se (dati[pos] !== dati[pos + 1]) {
      punti[j0 + j] = dati[pos] ? 4 : 8;
      ++conteggio;
    }
    posizione++;
  }
  se (dati[pos] !== 0) {
    punti[j0 + j] = 4;
    ++conteggio;
  }
  se (conteggio > POINT_TO_PROCESS_LIMIT) {
    restituisci null;
  }
  const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  const path = new Path2D();
  per (i = 0; conta && i <= altezza; i++) {
    lascia p = i * larghezza1;
    const end = p + larghezza;
    mentre (p < fine && !punti[p]) {
      p++;
    }
    se (p === fine) {
      continuare;
    }
    percorso.sposta in(p % larghezza1, i);
    costante p0 = p;
    lascia tipo = punti[p];
    Fare {
      const step = steps[tipo];
      Fare {
        p += passo;
      } while (!punti[p]);
      const pp = punti[p];
      se (pp !== 5 e pp !== 10) {
        tipo = pp;
        punti[p] = 0;
      } altro {
        tipo = pp & 0x33 * tipo >> 4;
        punti[p] &= tipo >> 2 | tipo << 2;
      }
      percorso.lineTo(p % larghezza1, p/larghezza1 | 0);
      se (!punti[p]) {
        --contare;
      }
    } mentre (p0 !== p);
    --io;
  }
  dati = null;
  punti = nullo;
  const drawOutline = funzione (c) {
    c.save();
    c.scale(1 / larghezza, -1 / altezza);
    c.translate(0, -altezza);
    c.fill(percorso);
    c.beginPath();
    c.restore();
  };
  restituisci drawOutline;
}
classe CanvasExtraState {
  costruttore(larghezza, altezza) {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = _util.IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    questo.principale = 0;
    questo.x = 0;
    questo.y = 0;
    questa.lineaX = 0;
    questa.lineaY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.textRise = 0;
    this.fillColor = "#000000";
    this.strokeColor = "#000000";
    this.patternFill = false;
    questo.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.transferMaps = "nessuno";
    this.startNewPathAndClipBox([0, 0, larghezza, altezza]);
  }
  clona() {
    const clone = Object.create(this);
    clone.clipBox = this.clipBox.slice();
    restituisci clone;
  }
  impostaPuntoCorrente(x, y) {
    questo.x = x;
    questo.y = y;
  }
  updatePathMinMax(trasforma, x, y) {
    [x, y] = _util.Util.applyTransform([x, y], trasforma);
    questo.minX = Math.min(questo.minX, x);
    questo.minY = Math.min(questo.minY, y);
    questo.maxX = Math.max(questo.maxX, x);
    questo.maxY = Math.max(questo.maxY, y);
  }
  updateRectMinMax(trasforma, rettangolo) {
    const p1 = _util.Util.applyTransform(rect, transform);
    const p2 = _util.Util.applyTransform(rect.slice(2), transform);
    questo.minX = Math.min(questo.minX, p1[0], p2[0]);
    questo.minY = Math.min(questo.minY, p1[1], p2[1]);
    questo.maxX = Math.max(questo.maxX, p1[0], p2[0]);
    questo.maxY = Math.max(questo.maxY, p1[1], p2[1]);
  }
  updateScalingPathMinMax(trasforma, minMax) {
    _util.Util.scaleMinMax(trasforma, minMax);
    questo.minX = Math.min(questo.minX, minMax[0]);
    questo.maxX = Math.max(questo.maxX, minMax[1]);
    questo.minY = Math.min(questo.minY, minMax[2]);
    questo.maxY = Math.max(questo.maxY, minMax[3]);
  }
  updateCurvePathMinMax(trasforma, x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    const box = _util.Util.bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3);
    se (minMax) {
      minMax[0] = Math.min(minMax[0], box[0], box[2]);
      minMax[1] = Math.max(minMax[1], box[0], box[2]);
      minMax[2] = Math.min(minMax[2], box[1], box[3]);
      minMax[3] = Math.max(minMax[3], box[1], box[3]);
      ritorno;
    }
    this.updateRectMinMax(trasforma, box);
  }
  getPathBoundingBox(pathType = _pattern_helper.PathType.FILL, transform = null) {
    const box = [this.minX, this.minY, this.maxX, this.maxY];
    se (pathType === _pattern_helper.PathType.STROKE) {
      se (!trasforma) {
        (0, _util.unreachable)("Il riquadro di delimitazione del tratto deve includere la trasformazione.");
      }
      const scale = _util.Util.singularValueDecompose2dScale(trasforma);
      const xStrokePad = scale[0] * this.lineWidth / 2;
      const yStrokePad = scale[1] * this.lineWidth / 2;
      box[0] -= xStrokePad;
      box[1] -= yStrokePad;
      box[2] += xStrokePad;
      box[3] += yStrokePad;
    }
    scatola di reso;
  }
  aggiornaClipFromPath() {
    const intersect = _util.Util.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
  }
  èEmptyClip() {
    restituisci questo.minX === Infinito;
  }
  startNewPathAndClipBox(box) {
    this.clipBox = scatola;
    this.minX = Infinito;
    this.minY = Infinito;
    questo.maxX = 0;
    questo.maxY = 0;
  }
  getClippedPathBoundingBox(pathType = _pattern_helper.PathType.FILL, transform = null) {
    restituisci _util.Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
  }
}
funzione putBinaryImageData(ctx, imgData) {
  se (tipo di ImageData !== "non definito" e imgData istanza di ImageData) {
    ctx.putImageData(imgData, 0, 0);
    ritorno;
  }
  altezza costante = imgData.height,
    larghezza = imgData.width;
  const partialChunkHeight = altezza % FULL_CHUNK_HEIGHT;
  const fullChunks = (altezza - altezzaChunkparziale) / ALTEZZA_CHUNK_FULL;
  const totalChunks = partialChunkHeight === 0 ? blocchi completi: blocchi completi + 1;
  const chunkImgData = ctx.createImageData(larghezza, FULL_CHUNK_HEIGHT);
  lascia srcPos = 0,
    Posizione di destinazione;
  const src = imgData.data;
  const dest = chunkImgData.data;
  lascia i, j, thisChunkHeight, elemsInThisChunk;
  if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
    const lunghezzasrc = lunghezzabytesrc;
    const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
    const dest32DataLength = dest32.length;
    const fullSrcDiff = larghezza + 7 >> 3;
    const bianco = 0xffffffff;
    const nero = _util.FeatureTest.isLittleEndian ? 0xff000000: 0x000000ff;
    per (i = 0; i < totalChunks; i++) {
      thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      Posizione di destinazione = 0;
      per (j = 0; j < thisChunkHeight; j++) {
        const srcDiff = srcLength - srcPos;
        sia k = 0;
        const kEnd = srcDiff > fullSrcDiff ? larghezza : srcDiff * 8 - 7;
        const kEndUnrolled = kEnd & ~7;
        lascia maschera = 0;
        lascia che srcByte = 0;
        per (; k < kEndUnrolled; k += 8) {
          srcByte = src[srcPos++];
          dest32[destPos++] = srcByte & 128 ? bianco : nero;
          dest32[destPos++] = srcByte & 64 ? bianco : nero;
          dest32[destPos++] = srcByte & 32 ? bianco : nero;
          dest32[destPos++] = srcByte & 16 ? bianco : nero;
          dest32[destPos++] = srcByte & 8 ? bianco : nero;
          dest32[destPos++] = srcByte & 4 ? bianco : nero;
          dest32[destPos++] = srcByte & 2 ? bianco : nero;
          dest32[destPos++] = srcByte & 1 ? bianco : nero;
        }
        per (; k < kEnd; k++) {
          se (maschera === 0) {
            srcByte = src[srcPos++];
            maschera = 128;
          }
          dest32[destPos++] = srcByte & maschera ? bianco : nero;
          maschera >>= 1;
        }
      }
      mentre (destPos < dest32DataLength) {
        dest32[destPos++] = 0;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } altrimenti se (imgData.kind === _util.ImageKind.RGBA_32BPP) {
    j = 0;
    elemsInThisChunk = larghezza * ALTEZZA_CENTRO_COMPLETA * 4;
    per (i = 0; i < fullChunks; i++) {
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      srcPos += elemsInThisChunk;
      ctx.putImageData(chunkImgData, 0, j);
      j += ALTEZZA_FULL_CHUNK;
    }
    se (i < blocchi totali) {
      elemsInThisChunk = larghezza * altezzaChunkparziale * 4;
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      ctx.putImageData(chunkImgData, 0, j);
    }
  } altrimenti se (imgData.kind === _util.ImageKind.RGB_24BPP) {
    thisChunkHeight = ALTEZZA_CENTRO_COMPLETA;
    elemsInThisChunk = larghezza * altezzaChunk;
    per (i = 0; i < totalChunks; i++) {
      se (i >= fullChunks) {
        thisChunkHeight = partialChunkHeight;
        elemsInThisChunk = larghezza * altezzaChunk;
      }
      Posizione di destinazione = 0;
      per (j = elemsInThisChunk; j--;) {
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = 255;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } altro {
    genera un nuovo errore (`tipo di immagine non valido: ${imgData.kind}`);
  }
}
funzione putBinaryImageMask(ctx, imgData) {
  se (imgData.bitmap) {
    ctx.drawImage(imgData.bitmap, 0, 0);
    ritorno;
  }
  altezza costante = imgData.height,
    larghezza = imgData.width;
  const partialChunkHeight = altezza % FULL_CHUNK_HEIGHT;
  const fullChunks = (altezza - altezzaChunkparziale) / ALTEZZA_CHUNK_FULL;
  const totalChunks = partialChunkHeight === 0 ? blocchi completi: blocchi completi + 1;
  const chunkImgData = ctx.createImageData(larghezza, FULL_CHUNK_HEIGHT);
  lascia srcPos = 0;
  const src = imgData.data;
  const dest = chunkImgData.data;
  per (lascia che i = 0; i < totalChunks; i++) {
    const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
    ({
      srcPos
    } = (0, _image_utils.convertBlackAndWhiteToRGBA)({
      fonte,
      srcPos,
      destinazione,
      larghezza,
      altezza: thisChunkHeight,
      nonBlackColor: 0
    }));
    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
  }
}
funzione copyCtxState(sourceCtx, destCtx) {
  const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  per (proprietà costante delle proprietà) {
    se (sourceCtx[proprietà] !== indefinito) {
      destCtx[proprietà] = sourceCtx[proprietà];
    }
  }
  se (sourceCtx.setLineDash !== indefinito) {
    destCtx.setLineDash(sourceCtx.getLineDash());
    destCtx.lineDashOffset = sourceCtx.lineDashOffset;
  }
}
funzione resetCtxToDefault(ctx) {
  ctx.strokeStyle = ctx.fillStyle = "#000000";
  ctx.fillRule = "nonzero";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.lineJoin = "mitra";
  ctx.miterLimit = 10;
  ctx.globalCompositeOperation = "source-over";
  ctx.font = "10px sans-serif";
  se (ctx.setLineDash !== indefinito) {
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  }
  se (!_util.isNodeJS) {
    costante {
      filtro
    } = ctx;
    se (filtro !== "nessuno" e filtro !== "") {
      ctx.filter = "nessuno";
    }
  }
}
funzione composeSMaskBackdrop(byte, r0, g0, b0) {
  lunghezza costante = byte.lunghezza;
  per (lascia che i = 3; i < lunghezza; i += 4) {
    const alfa = byte[i];
    se (alfa === 0) {
      byte[i - 3] = r0;
      byte[i - 2] = g0;
      byte[i - 1] = b0;
    } altrimenti se (alfa < 255) {
      const alpha_ = 255 - alfa;
      byte[i - 3] = byte[i - 3] * alfa + r0 * alfa_ >> 8;
      byte[i - 2] = byte[i - 2] * alfa + g0 * alfa_ >> 8;
      byte[i - 1] = byte[i - 1] * alfa + b0 * alfa_ >> 8;
    }
  }
}
funzione composeSMaskAlpha(maskData, layerData, transferMap) {
  lunghezza costante = maskData.length;
  scala costante = 1 / 255;
  per (lascia che i = 3; i < lunghezza; i += 4) {
    const alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
    layerData[i] = layerData[i] * alfa * scala | 0;
  }
}
funzione composeSMaskLuminosity(maskData, layerData, transferMap) {
  lunghezza costante = maskData.length;
  per (lascia che i = 3; i < lunghezza; i += 4) {
    const y = mascheraData[i - 3] * 77 + mascheraData[i - 2] * 152 + mascheraData[i - 1] * 28;
    layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
  }
}
funzione genericComposeSMask(maskCtx, layerCtx, larghezza, altezza, sottotipo, sfondo, transferMap, layerOffsetX, layerOffsetY, maskOffsetX, maskOffsetY) {
  const haSfondo = !!sfondo;
  const r0 = hasBackdrop ? backdrop[0] : 0;
  const g0 = hasBackdrop ? backdrop[1] : 0;
  const b0 = hasBackdrop ? backdrop[2] : 0;
  const composeFn = subtype === "Luminosità" ? composeSMaskLuminosity : composeSMaskAlpha;
  const PIXELS_TO_PROCESS = 1048576;
  const chunkSize = Math.min(altezza, Math.ceil(PIXELS_TO_PROCESS / larghezza));
  per (lascia riga = 0; riga < altezza; riga += chunkSize) {
    const chunkHeight = Math.min(chunkSize, altezza - riga);
    const maskData = maskCtx.getImageData(layerOffsetX - maskOffsetX, row + (layerOffsetY - maskOffsetY), width, chunkHeight);
    const layerData = layerCtx.getImageData(layerOffsetX, riga + layerOffsetY, larghezza, altezza chunk);
    se (haSfondo) {
      composeSMaskBackdrop(maskData.data, r0, g0, b0);
    }
    composeFn(maskData.data, layerData.data, transferMap);
    layerCtx.putImageData(layerData, layerOffsetX, riga + layerOffsetY);
  }
}
funzione composeSMask(ctx, smask, layerCtx, layerBox) {
  const layerOffsetX = layerBox[0];
  const layerOffsetY = layerBox[1];
  const layerWidth = layerBox[2] - layerOffsetX;
  const layerHeight = layerBox[3] - layerOffsetY;
  se (larghezzastrato === 0 || altezzastrato === 0) {
    ritorno;
  }
  genericComposeSMask(smask.context, layerCtx, layerWidth, layerHeight, smask.subtype, smask.backdrop, smask.transferMap, layerOffsetX, layerOffsetY, smask.offsetX, smask.offsetY);
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(layerCtx.canvas, 0, 0);
  ctx.restore();
}
funzione getImageSmoothingEnabled(trasforma, interpola) {
  const scale = _util.Util.singularValueDecompose2dScale(trasforma);
  scala[0] = Math.fround(scala[0]);
  scala[1] = Math.fround(scala[1]);
  const actualScale = Math.fround((globalThis.devicePixelRatio || 1) * _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS);
  se (interpolare !== indefinito) {
    restituisci interpolazione;
  } altrimenti se (scala[0] <= scalaeffettiva || scala[1] <= scalaeffettiva) {
    restituisci vero;
  }
  restituisci falso;
}
const LINE_CAP_STYLES = ["testa a testa", "rotondo", "quadrato"];
const LINE_JOIN_STYLES = ["mitra", "arrotondato", "smussato"];
const NORMAL_CLIP = {};
const EO_CLIP = {};
classe CanvasGraphics {
  costruttore(canvasCtx, commonObjs, objs, canvasFactory, filterFactory, {
    optionalContentConfig,
    markedContentStack = null
  }, annotazioneCanvasMap, pageColors) {
    questo.ctx = canvasCtx;
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    questo.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    questo.commonObjs = commonObjs;
    questo.objs = objs;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    questo.gruppoStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    questo.gruppoLevel = 0;
    questo.smaskStack = [];
    questo.smaskCounter = 0;
    this.tempSMask = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = markedContentStack || [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    this.cachedPatterns = new Map();
    this.annotationCanvasMap = annotationCanvasMap;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = pageColors;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = nuova mappa();
  }
  getObject(dati, fallback = null) {
    se (tipo di dati === "stringa") {
      restituisci dati.startsWith("g_") ? this.commonObjs.get(dati) : this.objs.get(dati);
    }
    ritorno di riserva;
  }
  inizioDisegno({
    trasformare,
    finestra,
    trasparenza = falso,
    sfondo = nullo
  }) {
    larghezza costante = this.ctx.canvas.width;
    altezza costante = this.ctx.canvas.height;
    const savedFillStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = sfondo || "#ffffff";
    this.ctx.fillRect(0, 0, larghezza, altezza);
    this.ctx.fillStyle = savedFillStyle;
    se (trasparenza) {
      const transparentCanvas = this.cachedCanvases.getCanvas("trasparente", larghezza, altezza);
      questo.compositoCtx = questo.ctx;
      this.transparentCanvas = transparentCanvas.canvas;
      this.ctx = transparentCanvas.context;
      questo.ctx.salva();
      this.ctx.transform(...(0, _display_utils.getCurrentTransform)(this.compositeCtx));
    }
    questo.ctx.salva();
    resetCtxToDefault(this.ctx);
    se (trasforma) {
      this.ctx.transform(...trasforma);
      this.outputScaleX = transform[0];
      this.outputScaleY = transform[0];
    }
    this.ctx.transform(...viewport.transform);
    this.viewportScale = viewport.scale;
    this.baseTransform = (0, _display_utils.getCurrentTransform)(this.ctx);
  }
  executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
    const argsArray = operatorList.argsArray;
    const fnArray = operatorList.fnArray;
    lascia i = executionStartIdx || 0;
    const argsArrayLen = argsArray.length;
    se (argsArrayLen === i) {
      restituisci i;
    }
    const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "funzione";
    const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
    lascia che i passi = 0;
    const commonObjs = this.commonObjs;
    const objs = this.objs;
    lascia fnId;
    mentre (vero) {
      se (stepper !== indefinito && i === stepper.nextBreakPoint) {
        stepper.breakIt(i, continueCallback);
        restituisci i;
      }
      fnId = fnArray[i];
      se (fnId !== _util.OPS.dependency) {
        questo[fnId].applica(questo, argsArray[i]);
      } altro {
        per (const depObjId di argsArray[i]) {
          const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
          se (!objsPool.has(depObjId)) {
            objsPool.get(depObjId, continueCallback);
            restituisci i;
          }
        }
      }
      i++;
      se (i === argsArrayLen) {
        restituisci i;
      }
      se (chunkOperations && ++steps > EXECUTION_STEPS) {
        se (Data.ora() > ora_fine) {
          continuaCallback();
          restituisci i;
        }
        passi = 0;
      }
    }
  }
  #restoreInitialState() {
    while (this.stateStack.length || this.inSMaskMode) {
      questo.ripristina();
    }
    questo.ctx.restore();
    se (this.transparentCanvas) {
      questo.ctx = questo.compositoCtx;
      questo.ctx.salva();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      questo.ctx.restore();
      this.transparentCanvas = null;
    }
  }
  fineDisegno() {
    questo.#restoreInitialState();
    this.cachedCanvases.clear();
    questo.cachedPatterns.clear();
    per (const cache di this._cachedBitmapsMap.values()) {
      per (const canvas di cache.values()) {
        if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
          larghezza tela = altezza tela = 0;
        }
      }
      cache.clear();
    }
    this._cachedBitmapsMap.clear();
    questo.#drawFilter();
  }
  #disegnaFiltro() {
    se (this.pageColors) {
      const hcmFilterId = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      se (hcmFilterId !== "nessuno") {
        const savedFilter = this.ctx.filter;
        this.ctx.filter = hcmFilterId;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = savedFilter;
      }
    }
  }
  _scaleImage(img, inverseTransform) {
    const width = img.width;
    altezza costante = img.altezza;
    lascia widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
    lascia heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
    lascia paintWidth = larghezza,
      paintHeight = altezza;
    lascia tmpCanvasId = "prescale1";
    lascia tmpCanvas, tmpCtx;
    while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
      lascia che newWidth = paintWidth,
        nuovaAltezza = altezzavernice;
      se (larghezzaScala > 2 e larghezza vernice > 1) {
        newWidth = paintWidth >= 16384 ? Math.floor(paintWidth / 2) - 1 || 1 : Math.ceil(paintWidth / 2);
        widthScale /= paintWidth / newWidth;
      }
      se (altezzaScala > 2 e altezza vernice > 1) {
        newHeight = paintHeight >= 16384 ? Math.floor(paintHeight / 2) - 1 || 1: Math.ceil(paintHeight) / 2;
        heightScale /= paintHeight / newHeight;
      }
      tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
      tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, nuovaLarghezza, nuovaAltezza);
      tmpCtx.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
      img = tmpCanvas.canvas;
      paintWidth = nuovaLarghezza;
      paintHeight = newHeight;
      tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
    }
    ritorno {
      immagine,
      Larghezza vernice,
      altezza vernice
    };
  }
  _createMaskCanvas(img) {
    const ctx = this.ctx;
    costante {
      larghezza,
      altezza
    } = immagine;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    const currentTransform = (0, _display_utils.getCurrentTransform)(ctx);
    lascia cache, cacheKey, ridimensionato, maskCanvas;
    se ((img.bitmap || img.data) && img.count > 1) {
      const mainKey = img.bitmap || img.data.buffer;
      cacheKey = JSON.stringify(isPatternFill ? currentTransform : [currentTransform.slice(0, 4), fillColor]);
      cache = this._cachedBitmapsMap.get(mainKey);
      se (!cache) {
        cache = nuova mappa();
        this._cachedBitmapsMap.set(mainKey, cache);
      }
      const cachedImage = cache.get(cacheKey);
      se (cachedImage && !isPatternFill) {
        const offsetX = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
        const offsetY = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
        ritorno {
          tela: immagine memorizzata nella cache,
          offsetX,
          offsetY
        };
      }
      ridimensionato = cachedImage;
    }
    se (!scalato) {
      maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", larghezza, altezza);
      putBinaryImageMask(maskCanvas.context, img);
    }
    lascia maskToCanvas = _util.Util.transform(currentTransform, [1 / larghezza, 0, 0, -1 / altezza, 0, 0]);
    maskToCanvas = _util.Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
    const cord1 = _util.Util.applyTransform([0, 0], maskToCanvas);
    const cord2 = _util.Util.applyTransform([larghezza, altezza], maskToCanvas);
    const rect = _util.Util.normalizeRect([cord1[0], cord1[1], cord2[0], cord2[1]]);
    const drawnWidth = Math.round(rect[2] - rect[0]) || 1;
    const drawnHeight = Math.round(rect[3] - rect[1]) || 1;
    const fillCanvas = this.cachedCanvases.getCanvas("fillCanvas", drawnWidth, drawnHeight);
    const fillCtx = fillCanvas.context;
    const offsetX = Math.min(cord1[0], cord2[0]);
    const offsetY = Math.min(cord1[1], cord2[1]);
    fillCtx.translate(-offsetX, -offsetY);
    fillCtx.transform(...maskToCanvas);
    se (!scalato) {
      ridimensionato = this._scaleImage(maskCanvas.canvas, (0, _display_utils.getCurrentTransformInverse)(fillCtx));
      ridimensionato = ridimensionato.img;
      se (cache && isPatternFill) {
        cache.set(cacheKey, ridimensionato);
      }
    }
    fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled((0, _display_utils.getCurrentTransform)(fillCtx), img.interpolate);
    drawImageAtIntegerCoords(fillCtx, scalato, 0, 0, larghezza scalata, altezza scalata, 0, 0, larghezza, altezza);
    fillCtx.globalCompositeOperation = "sorgente-in";
    const inverse = _util.Util.transform((0, _display_utils.getCurrentTransformInverse)(fillCtx), [1, 0, 0, 1, -offsetX, -offsetY]);
    fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, _pattern_helper.PathType.FILL) : fillColor;
    fillCtx.fillRect(0, 0, larghezza, altezza);
    se (cache && !isPatternFill) {
      this.cachedCanvases.delete("fillCanvas");
      cache.set(cacheKey, fillCanvas.canvas);
    }
    ritorno {
      tela: fillCanvas.canvas,
      offsetX: Math.round(offsetX),
      offsetY: Math.round(offsetY)
    };
  }
  setLineWidth(larghezza) {
    se (larghezza !== this.current.lineWidth) {
      this._cachedScaleForStroking[0] = -1;
    }
    this.current.lineWidth = larghezza;
    this.ctx.lineWidth = larghezza;
  }
  setLineCap(stile) {
    this.ctx.lineCap = LINE_CAP_STYLES[stile];
  }
  setLineJoin(stile) {
    this.ctx.lineJoin = LINE_JOIN_STYLES[stile];
  }
  setMiterLimit(limite) {
    this.ctx.miterLimit = limite;
  }
  setDash(dashArray, dashPhase) {
    const ctx = this.ctx;
    se (ctx.setLineDash !== indefinito) {
      ctx.setLineDash(dashArray);
      ctx.lineDashOffset = dashPhase;
    }
  }
  setRenderingIntent(intento) {}
  setFlatness(piattezza) {}
  setGState(stati) {
    per (const [chiave, valore] degli stati) {
      interruttore (chiave) {
        caso "LW":
          this.setLineWidth(valore);
          rottura;
        caso "LC":
          this.setLineCap(valore);
          rottura;
        caso "LJ":
          this.setLineJoin(valore);
          rottura;
        caso "ML":
          this.setMiterLimit(valore);
          rottura;
        caso "D":
          this.setDash(valore[0], valore[1]);
          rottura;
        caso "RI":
          this.setRenderingIntent(valore);
          rottura;
        caso "FL":
          this.setFlatness(valore);
          rottura;
        caso "Font":
          this.setFont(valore[0], valore[1]);
          rottura;
        caso "CA":
          this.current.strokeAlpha = valore;
          rottura;
        caso "ca":
          this.current.fillAlpha = valore;
          this.ctx.globalAlpha = valore;
          rottura;
        caso "BM":
          this.ctx.globalCompositeOperation = valore;
          rottura;
        caso "SMask":
          this.current.activeSMask = valore ? this.tempSMask : null;
          this.tempSMask = null;
          questo.checkSMaskState();
          rottura;
        caso "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(value);
          rottura;
      }
    }
  }
  ottenere inSMaskMode() {
    restituisci !!this.suspendedCtx;
  }
  checkSMaskState() {
    const inSMaskMode = this.inSMaskMode;
    se (this.current.activeSMask && !inSMaskMode) {
      questo.beginSMaskMode();
    } altrimenti se (!this.current.activeSMask && inSMaskMode) {
      questo.endSMaskMode();
    }
  }
  beginSMaskMode() {
    se (this.inSMaskMode) {
      throw new Error("beginSMaskMode chiamato mentre si è già in modalità smask");
    }
    const drawnWidth = this.ctx.canvas.width;
    const drawnHeight = this.ctx.canvas.height;
    const cacheId = "smaskGroupAt" + this.groupLevel;
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    questo.suspendedCtx = questo.ctx;
    this.ctx = scratchCanvas.context;
    const ctx = this.ctx;
    ctx.setTransform(...(0, _display_utils.getCurrentTransform)(this.suspendedCtx));
    copyCtxState(this.suspendedCtx, ctx);
    mirrorContextOperations(ctx, this.suspendedCtx);
    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    se (!this.inSMaskMode) {
      throw new Error("endSMaskMode chiamato mentre non è in modalità smask");
    }
    this.ctx._removeMirroring();
    copyCtxState(this.ctx, this.suspendedCtx);
    questo.ctx = questo.suspendedCtx;
    this.suspendedCtx = null;
  }
  compose(dirtyBox) {
    se (!this.current.activeSMask) {
      ritorno;
    }
    se (!dirtyBox) {
      dirtyBox = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    } altro {
      dirtyBox[0] = Math.floor(dirtyBox[0]);
      dirtyBox[1] = Math.floor(dirtyBox[1]);
      dirtyBox[2] = Math.ceil(dirtyBox[2]);
      dirtyBox[3] = Math.ceil(dirtyBox[3]);
    }
    const smask = this.current.activeSMask;
    const suspendedCtx = this.suspendedCtx;
    composeSMask(suspendedCtx, smask, this.ctx, dirtyBox);
    questo.ctx.salva();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    questo.ctx.restore();
  }
  salva() {
    se (this.inSMaskMode) {
      copyCtxState(this.ctx, this.suspendedCtx);
      this.suspendedCtx.save();
    } altro {
      questo.ctx.salva();
    }
    const vecchio = questo.corrente;
    this.stateStack.push(vecchio);
    questo.corrente = vecchio.clone();
  }
  ripristinare() {
    se (questo.stateStack.length === 0 && questo.inSMaskMode) {
      questo.endSMaskMode();
    }
    se (questo.stateStack.length !== 0) {
      questo.corrente = questo.stateStack.pop();
      se (this.inSMaskMode) {
        this.suspendedCtx.restore();
        copyCtxState(this.suspendedCtx, this.ctx);
      } altro {
        questo.ctx.restore();
      }
      questo.checkSMaskState();
      this.pendingClip = null;
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
    }
  }
  trasforma(a, b, c, d, e, f) {
    this.ctx.transform(a, b, c, d, e, f);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(ops, args, minMax) {
    const ctx = this.ctx;
    const corrente = this.current;
    lascia x = corrente.x,
      y = corrente.y;
    lascia che iniziX, iniziY;
    const currentTransform = (0, _display_utils.getCurrentTransform)(ctx);
    const isScalingMatrix = currentTransform[0] === 0 && currentTransform[3] === 0 || currentTransform[1] === 0 && currentTransform[2] === 0;
    const minMaxForBezier = isScalingMatrix ? minMax.slice(0) : null;
    per (lascia che i = 0, j = 0, ii = ops.length; i < ii; i++) {
      interruttore (ops[i] | 0) {
        caso _util.OPS.rectangle:
          x = argomenti[j++];
          y = argomenti[j++];
          larghezza costante = argomenti[j++];
          altezza costante = argomenti[j++];
          const xw = x + larghezza;
          const yh = y + altezza;
          ctx.moveTo(x, y);
          se (larghezza === 0 || altezza === 0) {
            ctx.lineTo(xw, yh);
          } altro {
            ctx.lineTo(xw, y);
            ctx.lineTo(xw, yh);
            ctx.lineTo(x, yh);
          }
          se (!isScalingMatrix) {
            corrente.updateRectMinMax(trasformazionecorrente, [x, y, xw, yh]);
          }
          ctx.closePath();
          rottura;
        caso _util.OPS.moveTo:
          x = argomenti[j++];
          y = argomenti[j++];
          ctx.moveTo(x, y);
          se (!isScalingMatrix) {
            corrente.updatePathMinMax(trasformazionecorrente, x, y);
          }
          rottura;
        caso _util.OPS.lineTo:
          x = argomenti[j++];
          y = argomenti[j++];
          ctx.lineTo(x, y);
          se (!isScalingMatrix) {
            corrente.updatePathMinMax(trasformazionecorrente, x, y);
          }
          rottura;
        caso _util.OPS.curveTo:
          inizioX = x;
          inizioY = y;
          x = argomenti[j + 4];
          y = argomenti[j + 5];
          ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
          current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], args[j + 2], args[j + 3], x, y, minMaxForBezier);
          j += 6;
          rottura;
        caso _util.OPS.curveTo2:
          inizioX = x;
          inizioY = y;
          ctx.bezierCurveTo(x, y, argomenti[j], argomenti[j + 1], argomenti[j + 2], argomenti[j + 3]);
          current.updateCurvePathMinMax(currentTransform, startX, startY, x, y, args[j], args[j + 1], args[j + 2], args[j + 3], minMaxForBezier);
          x = argomenti[j + 2];
          y = argomenti[j + 3];
          j += 4;
          rottura;
        caso _util.OPS.curveTo3:
          inizioX = x;
          inizioY = y;
          x = argomenti[j + 2];
          y = argomenti[j + 3];
          ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
          current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], x, y, x, y, minMaxForBezier);
          j += 4;
          rottura;
        caso _util.OPS.closePath:
          ctx.closePath();
          rottura;
      }
    }
    se (isScalingMatrix) {
      current.updateScalingPathMinMax(currentTransform, minMaxForBezier);
    }
    corrente.impostaPuntoCorrente(x, y);
  }
  closePath() {
    questo.ctx.closePath();
  }
  stroke(consumePath = true) {
    const ctx = this.ctx;
    const strokeColor = this.current.strokeColor;
    ctx.globalAlpha = this.current.strokeAlpha;
    se (questo.contenutovisibile) {
      se (tipo di strokeColor === "oggetto" e strokeColor?.getPattern) {
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.STROKE);
        this.rescaleAndStroke(false);
        ctx.restore();
      } altro {
        this.rescaleAndStroke(true);
      }
    }
    se (consumePath) {
      questo.consumePath(questo.corrente.getClippedPathBoundingBox());
    }
    ctx.globalAlpha = this.current.fillAlpha;
  }
  chiudiStroke() {
    questo.closePath();
    questo.tratto();
  }
  fill(consumePath = true) {
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    lascia che needRestore = false;
    se (isPatternFill) {
      ctx.save();
      ctx.fillStyle = fillColor.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL);
      needRestore = true;
    }
    const intersect = this.current.getClippedPathBoundingBox();
    se (this.contentVisible && intersect !== null) {
      se (this.pendingEOFill) {
        ctx.fill("evenodd");
        this.pendingEOFill = false;
      } altro {
        ctx.riempi();
      }
    }
    se (needRestore) {
      ctx.restore();
    }
    se (consumePath) {
      this.consumePath(intersezione);
    }
  }
  eoFill() {
    this.pendingEOFill = true;
    questo.riempi();
  }
  fillStroke() {
    questo.riempi(falso);
    questo.stroke(falso);
    questo.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = true;
    questo.fillStroke();
  }
  chiudiRiempiTratto() {
    questo.closePath();
    questo.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = true;
    questo.closePath();
    questo.fillStroke();
  }
  endPath() {
    questo.consumePath();
  }
  clip() {
    this.pendingClip = NORMAL_CLIP;
  }
  eoClip() {
    this.pendingClip = EO_CLIP;
  }
  inizioTesto() {
    this.current.textMatrix = _util.IDENTITY_MATRIX;
    this.current.textMatrixScale = 1;
    questo.corrente.x = questa.linea.correnteX = 0;
    questa.corrente.y = questa.corrente.lineY = 0;
  }
  fineTesto() {
    percorsi costanti = this.pendingTextPaths;
    const ctx = this.ctx;
    se (percorsi === indefiniti) {
      ctx.beginPath();
      ritorno;
    }
    ctx.save();
    ctx.beginPath();
    per (const percorso di percorsi) {
      ctx.setTransform(...percorso.trasformazione);
      ctx.translate(percorso.x, percorso.y);
      percorso.addToPath(ctx, percorso.fontSize);
    }
    ctx.restore();
    ctx.clip();
    ctx.beginPath();
    elimina this.pendingTextPaths;
  }
  setCharSpacing(spaziatura) {
    this.current.charSpacing = spaziatura;
  }
  setWordSpacing(spaziatura) {
    this.current.wordSpacing = spaziatura;
  }
  setHScale(scala) {
    this.current.textHScale = scala / 100;
  }
  setLeading(principale) {
    questo.corrente.principale = -principale;
  }
  setFont(fontRefName, dimensione) {
    const fontObj = this.commonObjs.get(fontRefName);
    const corrente = this.current;
    se (!fontObj) {
      genera un nuovo errore (`Impossibile trovare il font per ${fontRefName}`);
    }
    current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;
    se (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
      (0, _util.warn)("Matrice font non valida per il font " + fontRefName);
    }
    se (dimensione < 0) {
      dimensione = -dimensione;
      direzione.font.corrente = -1;
    } altro {
      direzione del carattere corrente = 1;
    }
    questo.font.corrente = fontObj;
    this.current.fontSize = dimensione;
    se (fontObj.isType3Font) {
      ritorno;
    }
    const name = fontObj.loadedName || "sans-serif";
    const typeface = fontObj.systemFontInfo?.css || `"${name}", ${fontObj.fallbackName}`;
    lascia grassetto = "normale";
    se (fontObj.black) {
      grassetto = "900";
    } altrimenti se (fontObj.bold) {
      grassetto = "grassetto";
    }
    const italic = fontObj.italic ? "corsivo" : "normale";
    lascia browserFontSize = dimensione;
    se (dimensione < MIN_FONT_SIZE) {
      browserFontSize = MIN_FONT_SIZE;
    } altrimenti se (dimensione > MAX_FONT_SIZE) {
      browserFontSize = MAX_FONT_SIZE;
    }
    this.current.fontSizeScale = dimensione / browserFontSize;
    this.ctx.font = `${corsivo} ${grassetto} ${browserFontSize}px ${carattere}`;
  }
  setTextRenderingMode(modalità) {
    this.current.textRenderingMode = modalità;
  }
  setTextRise(aumento) {
    this.current.textRise = aumento;
  }
  spostaTesto(x, y) {
    questo.attuale.x = questa.linea.attualeX += x;
    questa.corrente.y = questa.corrente.lineY += y;
  }
  impostaTestoMossaPrincipale(x, y) {
    questo.setLeading(-y);
    questo.moveText(x, y);
  }
  impostaMatriceTesto(a, b, c, d, e, f) {
    questa matrice di testo corrente = [a, b, c, d, e, f];
    this.current.textMatrixScale = Math.hypot(a, b);
    questo.corrente.x = questa.linea.correnteX = 0;
    questa.corrente.y = questa.corrente.lineY = 0;
  }
  rigasuccessiva() {
    this.moveText(0, this.current.leading);
  }
  paintChar(carattere, x, y, patternTransform) {
    const ctx = this.ctx;
    const corrente = this.current;
    const font = current.font;
    const textRenderingMode = current.textRenderingMode;
    const fontSize = current.fontSize / current.fontSizeScale;
    const fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
    const isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
    const patternFill = current.patternFill && !font.missingFile;
    lascia addToPath;
    se (font.disableFontFace || isAddToPathSet || patternFill) {
      addToPath = font.getPathGenerator(this.commonObjs, carattere);
    }
    se (font.disableFontFace || patternFill) {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      addToPath(ctx, fontSize);
      se (patternTransform) {
        ctx.setTransform(...patternTransform);
      }
      se (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
        ctx.riempi();
      }
      se (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
        ctx.stroke();
      }
      ctx.restore();
    } altro {
      se (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
        ctx.fillText(carattere, x, y);
      }
      se (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
        ctx.strokeText(carattere, x, y);
      }
    }
    se (èAggiungiAlSetPercorso) {
      percorsi costanti = this.pendingTextPaths ||= [];
      percorsi.push({
        trasforma: (0, _display_utils.getCurrentTransform)(ctx),
        X,
        e,
        dimensione del carattere,
        aggiungiAlPercorso
      });
    }
  }
  ottieni isFontSubpixelAAEnabled() {
    costante {
      contesto: ctx
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    ctx.scala(1.5, 1);
    ctx.fillText("Io", 0, 10);
    dati costanti = ctx.getImageData(0, 0, 10, 10).dati;
    lascia abilitato = falso;
    per (lascia che i = 3; i < lunghezza dati; i += 4) {
      se (dati[i] > 0 e dati[i] < 255) {
        abilitato = vero;
        rottura;
      }
    }
    return (0, _util.shadow)(this, "isFontSubpixelAAEnabled", enabled);
  }
  showText(glifi) {
    const corrente = this.current;
    const font = current.font;
    se (font.isType3Font) {
      restituisci this.showType3Text(glifi);
    }
    const fontSize = current.fontSize;
    se (dimensione carattere === 0) {
      restituisci indefinito;
    }
    const ctx = this.ctx;
    const fontSizeScale = current.fontSizeScale;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const fontDirection = current.fontDirection;
    const textHScale = current.textHScale * fontDirection;
    const glyphsLength = glifi.lunghezza;
    const verticale = font.vertical;
    const spacingDir = verticale ? 1 : -1;
    const defaultVMetrics = font.defaultVMetrics;
    const widthAdvanceScale = fontSize * current.fontMatrix[0];
    const simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
    ctx.save();
    ctx.transform(...current.textMatrix);
    ctx.translate(current.x, current.y + current.textRise);
    se (direzione font > 0) {
      ctx.scale(textHScale, -1);
    } altro {
      ctx.scale(textHScale, 1);
    }
    lascia che patternTransform;
    se (current.patternFill) {
      ctx.save();
      const pattern = current.fillColor.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL);
      patternTransform = (0, _display_utils.getCurrentTransform)(ctx);
      ctx.restore();
      ctx.fillStyle = modello;
    }
    lascia che lineWidth = current.lineWidth;
    const scale = current.textMatrixScale;
    se (scala === 0 || larghezzalinea === 0) {
      const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
      se (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
        larghezza della linea = this.getSinglePixelWidth();
      }
    } altro {
      lineWidth /= scala;
    }
    se (fontSizeScale !== 1.0) {
      ctx.scale(fontSizeScale, fontSizeScale);
      larghezzalinea /= scaladimensionecarattere;
    }
    ctx.lineWidth = larghezzalinea;
    se (font.isInvalidPDFjsFont) {
      caratteri costanti = [];
      lascia larghezza = 0;
      per (glifo costante di glifi) {
        chars.push(glyph.unicode);
        larghezza += glifo.larghezza;
      }
      ctx.fillText(chars.join(""), 0, 0);
      current.x += width * widthAdvanceScale * textHScale;
      ctx.restore();
      questo.componi();
      restituisci indefinito;
    }
    sia x = 0,
      io;
    per (i = 0; i < lunghezzaglifi; ++i) {
      const glyph = glyphs[i];
      se (tipo di glifo === "numero") {
        x += spaziaturaDir * glifo * dimensionecarattere / 1000;
        continuare;
      }
      lascia restoreNeeded = false;
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const carattere = glyph.fontChar;
      const accent = glyph.accent;
      lascia scalatoX, scalatoY;
      lascia larghezza = glifo.larghezza;
      se (verticale) {
        const vmetric = glyph.vmetric || defaultVMetrics;
        const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
        const vy = vmetric[2] * widthAdvanceScale;
        larghezza = vmetric ? -vmetric[0] : larghezza;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
      } altro {
        scaledX = x / fontSizeScale;
        scalatoY = 0;
      }
      se (font.remeasure && width > 0) {
        const measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
        se (larghezza < larghezza misurata e this.isFontSubpixelAAEnabled) {
          const characterScaleX = width / measuredWidth;
          restoreNeeded = true;
          ctx.save();
          ctx.scale(characterScaleX, 1);
          scaledX /= characterScaleX;
        } altrimenti se (larghezza !== larghezza misurata) {
          scaledX += (larghezza - larghezza misurata) / 2000 * fontSize / fontSizeScale;
        }
      }
      se (questo.contentVisible && (glyph.isInFont || font.missingFile)) {
        se (simpleFillText && !accent) {
          ctx.fillText(carattere, scalatoX, scalatoY);
        } altro {
          this.paintChar(carattere, scaledX, scaledY, patternTransform);
          se (accento) {
            const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
            const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
            this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
          }
        }
      }
      const charWidth = vertical ? width * widthAdvanceScale - spacing * fontDirection : width * widthAdvanceScale + spacing * fontDirection;
      x += larghezza carattere;
      se (ripristino necessario) {
        ctx.restore();
      }
    }
    se (verticale) {
      corrente.y -= x;
    } altro {
      current.x += x * textHScale;
    }
    ctx.restore();
    questo.componi();
    restituisci indefinito;
  }
  showType3Text(glifi) {
    const ctx = this.ctx;
    const corrente = this.current;
    const font = current.font;
    const fontSize = current.fontSize;
    const fontDirection = current.fontDirection;
    const spacingDir = font.vertical ? 1 : -1;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const textHScale = current.textHScale * fontDirection;
    const fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
    const glyphsLength = glifi.lunghezza;
    const isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
    lascia i, glifo, larghezza, lunghezzaspaziatura;
    se (isTextInvisible || fontSize === 0) {
      ritorno;
    }
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
    ctx.save();
    ctx.transform(...current.textMatrix);
    ctx.translate(corrente.x, corrente.y);
    ctx.scale(textHScale, fontDirection);
    per (i = 0; i < lunghezzaglifi; ++i) {
      glifo = glifi[i];
      se (tipo di glifo === "numero") {
        lunghezzaspaziatura = distanzaspaziatura * glifo * dimensionecarattere / 1000;
        this.ctx.translate(spacingLength, 0);
        current.x += spacingLength * textHScale;
        continuare;
      }
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const operatorList = font.charProcOperatorList[glyph.operatorListId];
      se (!elencooperatori) {
        (0, _util.warn)(`Il carattere di tipo 3 "${glyph.operatorListId}" non è disponibile.`);
        continuare;
      }
      se (questo.contenutovisibile) {
        this.processingType3 = glifo;
        questo.salva();
        ctx.scale(dimensionecarattere, dimensionecarattere);
        ctx.transform(...fontMatrix);
        this.executeOperatorList(operatorList);
        questo.ripristina();
      }
      const trasformato = _util.Util.applyTransform([glyph.width, 0], fontMatrix);
      larghezza = trasformato[0] * dimensione carattere + spaziatura;
      ctx.translate(larghezza, 0);
      current.x += width * textHScale;
    }
    ctx.restore();
    this.processingType3 = null;
  }
  setCharWidth(xWidth, yWidth) {}
  setCharWidthAndBounds(larghezzax, larghezzay, llx, lly, urx, ury) {
    this.ctx.rect(llx, lly, urx - llx, ury - lly);
    questo.ctx.clip();
    questo.endPath();
  }
  getColorN_Pattern(IR) {
    lascia il modello;
    se (IR[0] === "TilingPattern") {
      colore costante = IR[1];
      const baseTransform = this.baseTransform || (0, _display_utils.getCurrentTransform)(this.ctx);
      const canvasGraphicsFactory = {
        createCanvasGraphics: ctx => {
          restituisci nuovo CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: questo.markedContentStack
          });
        }
      };
      pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
    } altro {
      modello = this._getPattern(IR[1], IR[2]);
    }
    modello di ritorno;
  }
  impostaColoreTrattoN() {
    this.current.strokeColor = this.getColorN_Pattern(argomenti);
  }
  impostaColoreRiempimentoN() {
    this.current.fillColor = this.getColorN_Pattern(argomenti);
    questo.modello.corrente.Riempimento = vero;
  }
  setStrokeRGBColor(r, g, b) {
    const color = _util.Util.makeHexColor(r, g, b);
    this.ctx.strokeStyle = colore;
    this.current.strokeColor = colore;
  }
  setFillRGBColor(r, g, b) {
    const color = _util.Util.makeHexColor(r, g, b);
    this.ctx.fillStyle = colore;
    this.current.fillColor = colore;
    this.current.patternFill = false;
  }
  _getPattern(objId, matrice = null) {
    lascia il modello;
    se (this.cachedPatterns.has(objId)) {
      modello = this.cachedPatterns.get(objId);
    } altro {
      modello = (0, _pattern_helper.getShadingPattern)(this.getObject(objId));
      this.cachedPatterns.set(objId, pattern);
    }
    se (matrice) {
      pattern.matrix = matrice;
    }
    modello di ritorno;
  }
  shadingFill(objId) {
    se (!this.contentVisible) {
      ritorno;
    }
    const ctx = this.ctx;
    questo.salva();
    modello costante = this._getPattern(objId);
    ctx.fillStyle = pattern.getPattern(ctx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.SHADING);
    const inv = (0, _display_utils.getCurrentTransformInverse)(ctx);
    se (inv) {
      costante {
        larghezza,
        altezza
      } = ctx.canvas;
      const [x0, y0, x1, y1] = _util.Util.getAxialAlignedBoundingBox([0, 0, larghezza, altezza], inv);
      this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    } altro {
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    }
    questo.compose(questo.corrente.getClippedPathBoundingBox());
    questo.ripristina();
  }
  beginInlineImage() {
    (0, _util.unreachable)("Non dovrebbe chiamare beginInlineImage");
  }
  beginImageData() {
    (0, _util.unreachable)("Non dovrebbe chiamare beginImageData");
  }
  paintFormXObjectBegin(matrice, bbox) {
    se (!this.contentVisible) {
      ritorno;
    }
    questo.salva();
    this.baseTransformStack.push(this.baseTransform);
    se (Array.isArray(matrice) && lunghezza matrice === 6) {
      this.transform(...matrix);
    }
    this.baseTransform = (0, _display_utils.getCurrentTransform)(this.ctx);
    se (bbox) {
      larghezza costante = bbox[2] - bbox[0];
      altezza costante = bbox[3] - bbox[1];
      this.ctx.rect(bbox[0], bbox[1], larghezza, altezza);
      questo.aggiornamento.correnteRectMinMax((0, _display_utils.getCurrentTransform)(questo.ctx), bbox);
      questo.clip();
      questo.endPath();
    }
  }
  paintFormXObjectEnd() {
    se (!this.contentVisible) {
      ritorno;
    }
    questo.ripristina();
    this.baseTransform = this.baseTransformStack.pop();
  }
  beginGroup(gruppo) {
    se (!this.contentVisible) {
      ritorno;
    }
    questo.salva();
    se (this.inSMaskMode) {
      questo.endSMaskMode();
      this.current.activeSMask = null;
    }
    const currentCtx = this.ctx;
    se (!gruppo.isolato) {
      (0, _util.info)("TODO: supportare gruppi non isolati.");
    }
    se (gruppo.knockout) {
      (0, _util.warn)("Gruppi knockout non supportati.");
    }
    const currentTransform = (0, _display_utils.getCurrentTransform)(currentCtx);
    se (gruppo.matrice) {
      currentCtx.transform(...group.matrix);
    }
    se (!gruppo.bbox) {
      throw new Error("È richiesto un riquadro di delimitazione.");
    }
    lascia limiti = _util.Util.getAxialAlignedBoundingBox(group.bbox, (0, _display_utils.getCurrentTransform)(currentCtx));
    const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
    limiti = _util.Util.intersect(limiti, limititela) || [0, 0, 0, 0];
    const offsetX = Math.floor(bounds[0]);
    const offsetY = Math.floor(bounds[1]);
    lascia drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
    lascia drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
    lascia che scaleX = 1,
      scalaY = 1;
    se (larghezza disegnata > DIMENSIONE_GRUPPO_MAX) {
      scaleX = larghezza disegnata / DIMENSIONE_GRUPPO_MAX;
      larghezza disegnata = DIMENSIONE_GRUPPO_MAX;
    }
    se (altezza disegnata > DIMENSIONE_GRUPPO_MAX) {
      scaleY = altezza disegnata / DIMENSIONE_GRUPPO_MAX;
      altezza disegnata = DIMENSIONE_GRUPPO_MAX;
    }
    this.current.startNewPathAndClipBox([0, 0, larghezza disegnata, altezza disegnata]);
    let cacheId = "groupAt" + this.groupLevel;
    se (gruppo.smask) {
      cacheId += "_smask_" + this.smaskCounter++ % 2;
    }
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    const groupCtx = scratchCanvas.context;
    groupCtx.scale(1 / scalaX, 1 / scalaY);
    groupCtx.translate(-offsetX, -offsetY);
    groupCtx.transform(...currentTransform);
    se (gruppo.smask) {
      questo.smaskStack.push({
        tela: scratchCanvas.canvas,
        contesto: groupCtx,
        offsetX,
        offsetY,
        scalaX,
        scalaY,
        sottotipo: gruppo.smask.sottotipo,
        sfondo: group.smask.backdrop,
        transferMap: group.smask.transferMap || null,
        startTransformInverse: null
      });
    } altro {
      currentCtx.setTransform(1, 0, 0, 1, 0, 0);
      currentCtx.translate(offsetX, offsetY);
      currentCtx.scale(scalaX, scalaY);
      currentCtx.save();
    }
    copyCtxState(currentCtx, groupCtx);
    questo.ctx = gruppoCtx;
    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
    questo.groupStack.push(currentCtx);
    questo.gruppoLevel++;
  }
  endGroup(gruppo) {
    se (!this.contentVisible) {
      ritorno;
    }
    questo.gruppoLevel--;
    const groupCtx = this.ctx;
    const ctx = this.groupStack.pop();
    questo.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    se (gruppo.smask) {
      this.tempSMask = this.smaskStack.pop();
      questo.ripristina();
    } altro {
      questo.ctx.restore();
      const currentMtx = (0, _display_utils.getCurrentTransform)(this.ctx);
      questo.ripristina();
      questo.ctx.salva();
      this.ctx.setTransform(...currentMtx);
      const dirtyBox = _util.Util.getAxialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx);
      this.ctx.drawImage(groupCtx.canvas, 0, 0);
      questo.ctx.restore();
      questo.compose(dirtyBox);
    }
  }
  beginAnnotation(id, rect, transform, matrix, hasOwnCanvas) {
    questo.#restoreInitialState();
    resetCtxToDefault(this.ctx);
    questo.ctx.salva();
    questo.salva();
    se (this.baseTransform) {
      this.ctx.setTransform(...this.baseTransform);
    }
    se (Array.isArray(rect) && rect.length === 4) {
      larghezza costante = rect[2] - rect[0];
      altezza costante = rect[3] - rect[1];
      se (hasOwnCanvas e this.annotationCanvasMap) {
        trasforma = trasforma.fetta();
        trasforma[4] -= rect[0];
        trasforma[5] -= rect[1];
        rect = rect.slice();
        rettangolo[0] = rettangolo[1] = 0;
        rect[2] = larghezza;
        rect[3] = altezza;
        const [scalaX, scalaY] = _util.Util.singularValueDecompose2dScale((0, _display_utils.getCurrentTransform)(this.ctx));
        costante {
          scala di visualizzazione
        } = questo;
        const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
        const canvasHeight = Math.ceil(altezza * this.outputScaleY * viewportScale);
        this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
        costante {
          tela,
          contesto
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(id, canvas);
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = contesto;
        questo.ctx.salva();
        this.ctx.setTransform(scaleX, 0, 0, -scaleY, 0, altezza * scalaY);
        resetCtxToDefault(this.ctx);
      } altro {
        resetCtxToDefault(this.ctx);
        this.ctx.rect(rect[0], rect[1], larghezza, altezza);
        questo.ctx.clip();
        questo.endPath();
      }
    }
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.transform(...transform);
    this.transform(...matrix);
  }
  fineAnnotazione() {
    se (this.annotationCanvas) {
      questo.ctx.restore();
      questo.#drawFilter();
      questo.ctx = questo.annotazioneCanvas.savedCtx;
      elimina this.annotationCanvas.savedCtx;
      elimina questo.annotazioneCanvas;
    }
  }
  paintImageMaskXObject(img) {
    se (!this.contentVisible) {
      ritorno;
    }
    conteggio costante = img.count;
    img = this.getObject(img.data, img);
    img.count = conteggio;
    const ctx = this.ctx;
    const glyph = this.processingType3;
    se (glifo) {
      se (glyph.compiled === indefinito) {
        glyph.compiled = compileType3Glyph(img);
      }
      se (glyph.compiled) {
        glifo.compilato(ctx);
        ritorno;
      }
    }
    const mask = this._createMaskCanvas(img);
    const maskCanvas = mask.canvas;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
    ctx.restore();
    questo.componi();
  }
  paintImageMaskXObjectRepeat(img, scaleX, skewX = 0, skewY = 0, scaleY, posizioni) {
    se (!this.contentVisible) {
      ritorno;
    }
    img = this.getObject(img.data, img);
    const ctx = this.ctx;
    ctx.save();
    const currentTransform = (0, _display_utils.getCurrentTransform)(ctx);
    ctx.transform(scalaX, inclinazioneX, inclinazioneY, scalaY, 0, 0);
    const mask = this._createMaskCanvas(img);
    ctx.setTransform(1, 0, 0, 1, mask.offsetX - currentTransform[4], mask.offsetY - currentTransform[5]);
    per (lascia che i = 0, ii = posizioni.lunghezza; i < ii; i += 2) {
      const trans = _util.Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
      const [x, y] = _util.Util.applyTransform([0, 0], trans);
      ctx.drawImage(mask.canvas, x, y);
    }
    ctx.restore();
    questo.componi();
  }
  paintImageMaskXObjectGroup(immagini) {
    se (!this.contentVisible) {
      ritorno;
    }
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    per (immagine costante di immagini) {
      costante {
        dati,
        larghezza,
        altezza,
        trasformare
      } = immagine;
      const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", larghezza, altezza);
      const maskCtx = maskCanvas.context;
      mascheraCtx.save();
      const img = this.getObject(dati, immagine);
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = "sorgente-in";
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, (0, _display_utils.getCurrentTransformInverse)(ctx), _pattern_helper.PathType.FILL) : fillColor;
      maskCtx.fillRect(0, 0, larghezza, altezza);
      maskCtx.restore();
      ctx.save();
      ctx.transform(...trasforma);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, larghezza, altezza, 0, -1, 1, 1);
      ctx.restore();
    }
    questo.componi();
  }
  paintImageXObject(objId) {
    se (!this.contentVisible) {
      ritorno;
    }
    const imgData = this.getObject(objId);
    se (!imgData) {
      (0, _util.warn)("L'immagine dipendente non è ancora pronta");
      ritorno;
    }
    this.paintInlineImageXObject(imgData);
  }
  paintImageXObjectRepeat(objId, scaleX, scaleY, posizioni) {
    se (!this.contentVisible) {
      ritorno;
    }
    const imgData = this.getObject(objId);
    se (!imgData) {
      (0, _util.warn)("L'immagine dipendente non è ancora pronta");
      ritorno;
    }
    const width = imgData.width;
    altezza costante = imgData.height;
    mappa costante = [];
    per (lascia che i = 0, ii = posizioni.lunghezza; i < ii; i += 2) {
      mappa.push({
        trasforma: [scalaX, 0, 0, scalaY, posizioni[i], posizioni[i + 1]],
        x: 0,
        e: 0,
        w: larghezza,
        h: altezza
      });
    }
    this.paintInlineImageXObjectGroup(imgData, map);
  }
  applicaTrasferisciMappeACanvas(ctx) {
    se (this.current.transferMaps !== "nessuno") {
      ctx.filter = this.current.transferMaps;
      ctx.drawImage(ctx.canvas, 0, 0);
      ctx.filter = "nessuno";
    }
    restituisci ctx.canvas;
  }
  applicaTrasferisciMappeABitmap(imgData) {
    se (this.current.transferMaps === "nessuno") {
      restituisci imgData.bitmap;
    }
    costante {
      bitmap,
      larghezza,
      altezza
    } = imgData;
    const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", larghezza, altezza);
    const tmpCtx = tmpCanvas.context;
    tmpCtx.filter = this.current.transferMaps;
    tmpCtx.drawImage(bitmap, 0, 0);
    tmpCtx.filter = "nessuno";
    restituisci tmpCanvas.canvas;
  }
  paintInlineImageXObject(imgData) {
    se (!this.contentVisible) {
      ritorno;
    }
    const width = imgData.width;
    altezza costante = imgData.height;
    const ctx = this.ctx;
    questo.salva();
    se (!_util.isNodeJS) {
      costante {
        filtro
      } = ctx;
      se (filtro !== "nessuno" e filtro !== "") {
        ctx.filter = "nessuno";
      }
    }
    ctx.scale(1 / larghezza, -1 / altezza);
    lascia imgToPaint;
    se (imgData.bitmap) {
      imgToPaint = this.applyTransferMapsToBitmap(imgData);
    } else if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
      imgToPaint = imgData;
    } altro {
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", larghezza, altezza);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    const scalato = this._scaleImage(imgToPaint, (0, _display_utils.getCurrentTransformInverse)(ctx));
    ctx.imageSmoothingEnabled = getImageSmoothingEnabled((0, _display_utils.getCurrentTransform)(ctx), imgData.interpolate);
    drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -altezza, larghezza, altezza);
    questo.componi();
    questo.ripristina();
  }
  paintInlineImageXObjectGroup(imgData, mappa) {
    se (!this.contentVisible) {
      ritorno;
    }
    const ctx = this.ctx;
    lascia imgToPaint;
    se (imgData.bitmap) {
      imgToPaint = imgData.bitmap;
    } altro {
      const w = imgData.width;
      const h = imgData.height;
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    per (voce costante della mappa) {
      ctx.save();
      ctx.transform(...entry.transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, imgToPaint, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
      ctx.restore();
    }
    questo.componi();
  }
  paintSolidColorImageMask() {
    se (!this.contentVisible) {
      ritorno;
    }
    questo.ctx.fillRect(0, 0, 1, 1);
    questo.componi();
  }
  markPoint(tag) {}
  markPointProps(tag, proprietà) {}
  beginMarkedContent(tag) {
    questo.markedContentStack.push({
      visibile: vero
    });
  }
  beginMarkedContentProps(tag, proprietà) {
    se (tag === "OC") {
      questo.markedContentStack.push({
        visibile: this.optionalContentConfig.isVisible(proprietà)
      });
    } altro {
      questo.markedContentStack.push({
        visibile: vero
      });
    }
    questo.contenutoVisibile = questo.èContenutoVisibile();
  }
  endMarkedContent() {
    questo.markedContentStack.pop();
    questo.contenutoVisibile = questo.èContenutoVisibile();
  }
  beginCompat() {}
  endCompat() {}
  consumePath(clipBox) {
    const isEmpty = this.current.isEmptyClip();
    se (this.pendingClip) {
      questo.aggiornamento.correnteClipFromPath();
    }
    se (!this.pendingClip) {
      questo.compose(clipBox);
    }
    const ctx = this.ctx;
    se (this.pendingClip) {
      se (!èVuoto) {
        se (this.pendingClip === EO_CLIP) {
          ctx.clip("evenodd");
        } altro {
          ctx.clip();
        }
      }
      this.pendingClip = null;
    }
    questo.corrente.startNewPathAndClipBox(questo.corrente.clipBox);
    ctx.beginPath();
  }
  ottieniSinglePixelWidth() {
    se (!this._cachedGetSinglePixelWidth) {
      const m = (0, _display_utils.getCurrentTransform)(this.ctx);
      se (m[1] === 0 e m[2] === 0) {
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
      } altro {
        const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
        const normX = Math.hypot(m[0], m[2]);
        const normY = Math.hypot(m[1], m[3]);
        this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
      }
    }
    restituisci questo._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    se (this._cachedScaleForStroking[0] === -1) {
      costante {
        Larghezza della linea
      } = questo.corrente;
      costante {
        UN,
        B,
        C,
        D
      } = this.ctx.getTransform();
      lascia scalaX, scalaY;
      se (b === 0 e c === 0) {
        const normX = Math.abs(a);
        const normY = Math.abs(d);
        se (normX === normY) {
          se (larghezzalinea === 0) {
            scalaX = scalaY = 1 / normaX;
          } altro {
            const scaledLineWidth = normX * lineWidth;
            scaleX = scaleY = scaledLineWidth < 1 ? 1 / scaledLineWidth : 1;
          }
        } altrimenti se (larghezzalinea === 0) {
          scalaX = 1 / normaX;
          scalaY = 1 / normaY;
        } altro {
          const scaledXLineWidth = normX * lineWidth;
          const scaledYLineWidth = normY * lineWidth;
          scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
          scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
        }
      } altro {
        const absDet = Math.abs(a * d - b * c);
        const normX = Math.hypot(a, b);
        const normY = Math.hypot(c, d);
        se (larghezzalinea === 0) {
          scalaX = normY / absDet;
          scalaY = normX / absDet;
        } altro {
          const baseArea = lineWidth * absDet;
          scalaX = normaY > baseArea ? norma/areabase: 1;
          scaleY = normX > baseArea ? normX / baseArea : 1;
        }
      }
      this._cachedScaleForStroking[0] = scaleX;
      this._cachedScaleForStroking[1] = scaleY;
    }
    restituisci questo._cachedScaleForStroking;
  }
  rescaleAndStroke(saveRestore) {
    costante {
      ctx
    } = questo;
    costante {
      Larghezza della linea
    } = questo.corrente;
    const [scalaX, scalaY] = this.getScaleForStroking();
    ctx.lineWidth = larghezzalinea || 1;
    se (scalaX === 1 e scalaY === 1) {
      ctx.stroke();
      ritorno;
    }
    const trattini = ctx.getLineDash();
    se (salvaRipristina) {
      ctx.save();
    }
    ctx.scale(scalaX, scalaY);
    se (lunghezza trattini > 0) {
      const scala = Math.max(scalaX, scalaY);
      ctx.setLineDash(trattini.mappa(x => x / scala));
      ctx.lineDashOffset /= scala;
    }
    ctx.stroke();
    se (salvaRipristina) {
      ctx.restore();
    }
  }
  isContentVisible() {
    per (lascia che i = this.markedContentStack.length - 1; i >= 0; i--) {
      se (!this.markedContentStack[i].visible) {
        restituisci falso;
      }
    }
    restituisci vero;
  }
}
esportazioni.CanvasGraphics = CanvasGraphics;
per (const op in _util.OPS) {
  se (CanvasGraphics.prototype[op] !== indefinito) {
    CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
  }
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.TilingPattern = esportazioni.PathType = void 0;
esportazioni.getShadingPattern = getShadingPattern;
var _util = __w_pdfjs_require__(1);
var _display_utils = __w_pdfjs_require__(6);
const TipoPercorso = {
  RIEMPIRE: "Riempire",
  ICTUS: "Ictus",
  OMBREGGIATURA: "Ombreggiatura"
};
esportazioni.PathType = PathType;
funzione applyBoundingBox(ctx, bbox) {
  se (!bbox) {
    ritorno;
  }
  larghezza costante = bbox[2] - bbox[0];
  altezza costante = bbox[3] - bbox[1];
  regione costante = nuovo Path2D();
  regione.rect(bbox[0], bbox[1], larghezza, altezza);
  ctx.clip(regione);
}
classe BaseShadingPattern {
  costruttore() {
    se (questo.costruttore === BaseShadingPattern) {
      (0, _util.unreachable)("Impossibile inizializzare BaseShadingPattern.");
    }
  }
  ottieniModello() {
    (0, _util.unreachable)("Metodo astratto `getPattern` chiamato.");
  }
}
classe RadialAxialShadingPattern estende BaseShadingPattern {
  costruttore(IR) {
    super();
    questo._tipo = IR[1];
    questo._bbox = IR[2];
    this._colorStops = IR[3];
    questo._p0 = IR[4];
    questo._p1 = IR[5];
    questo._r0 = IR[6];
    questo._r1 = IR[7];
    questa matrice = null;
  }
  _creaGradiente(ctx) {
    lascia laureato;
    se (this._type === "assiale") {
      grad = ctx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
    } altrimenti se (this._type === "radiale") {
      grad = ctx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
    }
    per (const colorStop di this._colorStops) {
      grad.addColorStop(colorStop[0], colorStop[1]);
    }
    laureato di ritorno;
  }
  getPattern(ctx, proprietario, inverso, pathType) {
    lascia il modello;
    se (pathType === PathType.STROKE || pathType === PathType.FILL) {
      const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, (0, _display_utils.getCurrentTransform)(ctx)) || [0, 0, 0, 0];
      larghezza costante = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
      altezza costante = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
      const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", width, height, true);
      const tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, tmpCtx.canvas.larghezza, tmpCtx.canvas.altezza);
      tmpCtx.beginPath();
      tmpCtx.rect(0, 0, tmpCtx.canvas.larghezza, tmpCtx.canvas.altezza);
      tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
      inverso = _util.Util.transform(inverso, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
      tmpCtx.transform(...owner.baseTransform);
      se (questa.matrice) {
        tmpCtx.transform(...this.matrix);
      }
      applyBoundingBox(tmpCtx, this._bbox);
      tmpCtx.fillStyle = this._createGradient(tmpCtx);
      tmpCtx.fill();
      pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
      const matricedom = nuova matricedom(inverso);
      pattern.setTransform(domMatrix);
    } altro {
      applyBoundingBox(ctx, this._bbox);
      modello = this._createGradient(ctx);
    }
    modello di ritorno;
  }
}
funzione drawTriangle(dati, contesto, p1, p2, p3, c1, c2, c3) {
  const coords = context.coords,
    colori = contesto.colori;
  const byte = dati.dati,
    rowSize = larghezza dati * 4;
  lascia tmp;
  se (coordinate[p1 + 1] > coordinate[p2 + 1]) {
    tempo = p1;
    p1 = p2;
    p2 = tmp;
    tempo = c1;
    c1 = c2;
    c2 = tempo;
  }
  se (coordinate[p2 + 1] > coordinate[p3 + 1]) {
    tempo = p2;
    p2 = p3;
    p3 = tmp;
    tempo = c2;
    c2 = c3;
    c3 = tempo;
  }
  se (coordinate[p1 + 1] > coordinate[p2 + 1]) {
    tempo = p1;
    p1 = p2;
    p2 = tmp;
    tempo = c1;
    c1 = c2;
    c2 = tempo;
  }
  const x1 = (coords[p1] + contesto.offsetX) * contesto.scalaX;
  const y1 = (coords[p1 + 1] + contesto.offsetY) * contesto.scalaY;
  const x2 = (coords[p2] + contesto.offsetX) * contesto.scalaX;
  const y2 = (coords[p2 + 1] + contesto.offsetY) * contesto.scalaY;
  const x3 = (coords[p3] + contesto.offsetX) * contesto.scalaX;
  const y3 = (coords[p3 + 1] + contesto.offsetY) * contesto.scalaY;
  se (y1 >= y3) {
    ritorno;
  }
  const c1r = colori[c1],
    c1g = colori[c1 + 1],
    c1b = colori[c1 + 2];
  const c2r = colori[c2],
    c2g = colori[c2 + 1],
    c2b = colori[c2 + 2];
  const c3r = colori[c3],
    c3g = colori[c3 + 1],
    c3b = colori[c3 + 2];
  const minY = Math.round(y1),
    maxY = Math.round(y3);
  lascia xa, macchina, cag, taxi;
  siano xb, cbr, cbg, cbb;
  for (let y = minY; y <= maxY; y++) {
    se (y < y2) {
      costante k = y < y1 ? 0 : (y1 - y) / (y1 - y2);
      xa = x1 - (x1 - x2) * k;
      auto = c1r - (c1r - c2r) * k;
      cag = c1g - (c1g - c2g) * k;
      taxi = c1b - (c1b - c2b) * k;
    } altro {
      lascia k;
      se (y > y3) {
        k = 1;
      } altrimenti se (y2 === y3) {
        k = 0;
      } altro {
        k = (y2 - y) / (y2 - y3);
      }
      xa = x2 - (x2 - x3) * k;
      auto = c2r - (c2r - c3r) * k;
      cag = c2g - (c2g - c3g) * k;
      taxi = c2b - (c2b - c3b) * k;
    }
    lascia k;
    se (y < y1) {
      k = 0;
    } altrimenti se (y > y3) {
      k = 1;
    } altro {
      k = (y1 - y) / (y1 - y3);
    }
    xb = x1 - (x1 - x3) * k;
    cbr = c1r - (c1r - c3r) * k;
    cbg = c1g - (c1g - c3g) * k;
    cbb = c1b - (c1b - c3b) * k;
    const x1_ = Math.round(Math.min(xa, xb));
    const x2_ = Math.round(Math.max(xa, xb));
    lascia j = rowSize * y + x1_ * 4;
    per (lascia che x = x1_; x <= x2_; x++) {
      k = (xa - x) / (xa - xb);
      se (k < 0) {
        k = 0;
      } altrimenti se (k > 1) {
        k = 1;
      }
      bytes[j++] = auto - (auto - cbr) * k | 0;
      byte[j++] = cag - (cag - cbg) * k | 0;
      byte[j++] = cab - (cab - cbb) * k | 0;
      byte[j++] = 255;
    }
  }
}
funzione drawFigure(dati, figura, contesto) {
  const ps = figure.coords;
  const cs = figure.colors;
  sia i, ii;
  switch (figure.type) {
    caso "reticolo":
      const verticesPerRow = figure.verticesPerRow;
      const rows = Math.floor(ps.length / verticesPerRow) - 1;
      const cols = verticesPerRow - 1;
      per (i = 0; i < righe; i++) {
        lascia q = i * verticiPerRiga;
        per (lascia che j = 0; j < colonne; j++, q++) {
          drawTriangle(dati, contesto, ps[q], ps[q + 1], ps[q + verticiPerRiga], cs[q], cs[q + 1], cs[q + verticiPerRiga]);
          drawTriangle(dati, contesto, ps[q + verticiPerRiga + 1], ps[q + 1], ps[q + verticiPerRiga], cs[q + verticiPerRiga + 1], cs[q + 1], cs[q + verticiPerRiga]);
        }
      }
      rottura;
    caso "triangoli":
      per (i = 0, ii = ps.length; i < ii; i += 3) {
        drawTriangle(dati, contesto, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
      }
      rottura;
    predefinito:
      lancia un nuovo errore("cifra illegale");
  }
}
classe MeshShadingPattern estende BaseShadingPattern {
  costruttore(IR) {
    super();
    questo._coordinate = IR[2];
    questo._colori = IR[3];
    questo._figure = IR[4];
    questo._limiti = IR[5];
    questo._bbox = IR[7];
    questo._sfondo = IR[8];
    questa matrice = null;
  }
  _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
    const EXPECTED_SCALE = 1.1;
    const MAX_PATTERN_SIZE = 3000;
    const DIMENSIONE_BORDO = 2;
    const offsetX = Math.floor(this._bounds[0]);
    const offsetY = Math.floor(this._bounds[1]);
    const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
    const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
    larghezza costante = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    altezza costante = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    const scaleX = boundsWidth / width;
    const scaleY = boundsHeight / altezza;
    contesto costante = {
      coordinate: questo._coordinate,
      colori: questo._colori,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scalaX: 1 / scalaX,
      scalaY: 1 / scalaY
    };
    const paddedWidth = larghezza + BORDER_SIZE * 2;
    const paddedHeight = altezza + BORDER_SIZE * 2;
    const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
    const tmpCtx = tmpCanvas.context;
    const data = tmpCtx.createImageData(larghezza, altezza);
    se (colore di sfondo) {
      const byte = dati.dati;
      per (lascia che i = 0, ii = byte.lunghezza; i < ii; i += 4) {
        byte[i] = backgroundColor[0];
        byte[i + 1] = backgroundColor[1];
        byte[i + 2] = backgroundColor[2];
        byte[i + 3] = 255;
      }
    }
    per (const figura di questo._figure) {
      drawFigure(dati, figura, contesto);
    }
    tmpCtx.putImageData(dati, DIMENSIONE_BORDO, DIMENSIONE_BORDO);
    const canvas = tmpCanvas.canvas;
    ritorno {
      tela,
      offsetX: offsetX - DIMENSIONE_BORDO * scalaX,
      offsetY: offsetY - DIMENSIONE_BORDO * scalaY,
      scalaX,
      scalaY
    };
  }
  getPattern(ctx, proprietario, inverso, pathType) {
    applyBoundingBox(ctx, this._bbox);
    lascia scalare;
    se (pathType === PathType.SHADING) {
      scala = _util.Util.singularValueDecompose2dScale((0, _display_utils.getCurrentTransform)(ctx));
    } altro {
      scala = _util.Util.singularValueDecompose2dScale(owner.baseTransform);
      se (questa.matrice) {
        const matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
        scala = [scala[0] * matrixScale[0], scala[1] * matrixScale[1]];
      }
    }
    const temporaryPatternCanvas = this._createMeshCanvas(scale, pathType === PathType.SHADING ? null : this._background, owner.cachedCanvases);
    se (pathType !== PathType.SHADING) {
      ctx.setTransform(...owner.baseTransform);
      se (questa.matrice) {
        ctx.transform(...this.matrix);
      }
    }
    ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
    restituisci ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
  }
}
classe DummyShadingPattern estende BaseShadingPattern {
  ottieniModello() {
    restituisci "hotpink";
  }
}
funzione getShadingPattern(IR) {
  interruttore (IR[0]) {
    caso "RadialAxial":
      restituisci nuovo RadialAxialShadingPattern(IR);
    caso "Mesh":
      restituisci nuovo MeshShadingPattern(IR);
    caso "Fintizio":
      restituisci nuovo DummyShadingPattern();
  }
  genera un nuovo errore (`Tipo IR sconosciuto: ${IR[0]}`);
}
const PaintType = {
  COLORATO: 1,
  NON COLORATO: 2
};
classe TilingPattern {
  statico MAX_PATTERN_SIZE = 3000;
  costruttore(IR, colore, ctx, canvasGraphicsFactory, baseTransform) {
    questo.operatoreList = IR[2];
    questa matrice = IR[3] || [1, 0, 0, 1, 0, 0];
    questo.bbox = IR[4];
    questo.xstep = IR[5];
    questo.ystep = IR[6];
    questo.tipo di vernice = IR[7];
    questo.tilingType = IR[8];
    questo.colore = colore;
    questo.ctx = ctx;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
  }
  createPatternCanvas(proprietario) {
    const operatorList = this.operatorList;
    const bbox = this.bbox;
    const xstep = this.xstep;
    const ystep = this.ystep;
    const paintType = this.paintType;
    const tilingType = this.tilingType;
    const color = this.color;
    const canvasGraphicsFactory = this.canvasGraphicsFactory;
    (0, _util.info)("TilingType: " + tilingType);
    costante x0 = bbox[0],
      y0 = bbox[1],
      x1 = bbox[2],
      y1 = bbox[3];
    const matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
    const curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);
    const scalacombinata = [matrixScale[0] * curMatrixScale[0], matriceScale[1] * curMatrixScale[1]];
    const dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
    const dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
    const tmpCanvas = owner.cachedCanvases.getCanvas("modello", dimx.size, dimy.size, true);
    const tmpCtx = tmpCanvas.context;
    const grafica = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
    grafica.groupLevel = proprietario.groupLevel;
    this.setFillAndStrokeStyleToContext(grafica, tipo di vernice, colore);
    lascia che aggiustatoX0 = x0;
    lascia che Y0 aggiustato = y0;
    lascia che aggiustatoX1 = x1;
    lascia che Y1 aggiustato = y1;
    se (x0 < 0) {
      aggiustatoX0 = 0;
      aggiustatoX1 += Math.abs(x0);
    }
    se (y0 < 0) {
      aggiustatoY0 = 0;
      aggiustatoY1 += Math.abs(y0);
    }
    tmpCtx.translate(-(dimx.scale * adjustedX0), -(dimy.scale * adjustedY0));
    grafica.trasformazione(dimx.scala, 0, 0, dimy.scala, 0, 0);
    tmpCtx.save();
    this.clipBbox(grafica, aggiustatoX0, aggiustatoY0, aggiustatoX1, aggiustatoY1);
    grafica.baseTransform = (0, _display_utils.getCurrentTransform)(grafica.ctx);
    grafica.executeOperatorList(operatorList);
    grafica.endDrawing();
    ritorno {
      tela: tmpCanvas.canvas,
      scaleX: dimx.scale,
      scaleY: dimy.scale,
      offsetX: aggiustatoX0,
      offsetY: aggiustatoY0
    };
  }
  getSizeAndScale(passo, realOutputSize, scala) {
    passo = Math.abs(passo);
    const maxSize = Math.max(TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
    lascia che size = Math.ceil(step * scale);
    se (dimensione >= maxSize) {
      dimensione = dimensione massima;
    } altro {
      scala = dimensione / passo;
    }
    ritorno {
      scala,
      misurare
    };
  }
  clipBbox(grafica, x0, y0, x1, y1) {
    const bboxWidth = x1 - x0;
    const bboxHeight = y1 - y0;
    grafica.ctx.rect(x0, y0, bboxWidth, bboxHeight);
    grafica.attuale.aggiornamentoRectMinMax((0, _display_utils.getCurrentTransform)(grafica.ctx), [x0, y0, x1, y1]);
    grafica.clip();
    grafica.endPath();
  }
  setFillAndStrokeStyleToContext(grafica, tipo di vernice, colore) {
    contesto costante = grafica.ctx,
      corrente = grafica.corrente;
    switch (paintType) {
      caso PaintType.COLORED:
        const ctx = this.ctx;
        contesto.fillStyle = ctx.fillStyle;
        contesto.strokeStyle = ctx.strokeStyle;
        current.fillColor = ctx.fillStyle;
        current.strokeColor = ctx.strokeStyle;
        rottura;
      caso PaintType.UNCOLORED:
        const cssColor = _util.Util.makeHexColor(color[0], color[1], color[2]);
        contesto.fillStyle = cssColor;
        contesto.strokeStyle = cssColor;
        colore.riempimento corrente = cssColor;
        current.strokeColor = cssColor;
        rottura;
      predefinito:
        throw new _util.FormatError(`Tipo di disegno non supportato: ${paintType}`);
    }
  }
  getPattern(ctx, proprietario, inverso, pathType) {
    lascia matrice = inversa;
    se (pathType !== PathType.SHADING) {
      matrice = _util.Util.transform(matrice, proprietario.baseTransform);
      se (questa.matrice) {
        matrice = _util.Util.transform(matrice, questa.matrice);
      }
    }
    const temporaryPatternCanvas = this.createPatternCanvas(owner);
    lascia che domMatrix = new DOMMatrix(matrice);
    domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
    const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "ripeti");
    pattern.setTransform(domMatrix);
    modello di ritorno;
  }
}
esportazioni.TilingPattern = TilingPattern;

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.convertBlackAndWhiteToRGBA = convertBlackAndWhiteToRGBA;
esportazioni.convertToRGBA = convertToRGBA;
esportazioni.grayToRGBA = greyToRGBA;
var _util = __w_pdfjs_require__(1);
funzione convertToRGBA(parametri) {
  switch (params.kind) {
    caso _util.ImageKind.GRAYSCALE_1BPP:
      restituisci convertBlackAndWhiteToRGBA(parametri);
    caso _util.ImageKind.RGB_24BPP:
      restituisci convertRGBToRGBA(parametri);
  }
  restituisci null;
}
funzione convertBlackAndWhiteToRGBA({
  fonte,
  srcPos = 0,
  destinazione,
  larghezza,
  altezza,
  nonBlackColor = 0xffffffff,
  inverseDecode = false
}) {
  const nero = _util.FeatureTest.isLittleEndian ? 0xff000000: 0x000000ff;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, nero] : [nero, nonBlackColor];
  const widthInSource = larghezza >> 3;
  const widthRemainder = width & 7;
  const srcLength = src.length;
  destinazione = nuovo Uint32Array(dest.buffer);
  lascia destPos = 0;
  per (lascia che i = 0; i < altezza; i++) {
    per (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
      const elem = srcPos < srcLength ? src[srcPos] : 255;
      dest[destPos++] = elem & 0b10000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1 ? oneMapping : zeroMapping;
    }
    se (larghezzaResto === 0) {
      continuare;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    per (lascia che j = 0; j < widthRemainder; j++) {
      dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
    }
  }
  ritorno {
    srcPos,
    Posizione di destinazione
  };
}
funzione convertRGBToRGBA({
  fonte,
  srcPos = 0,
  destinazione,
  Posizione di destinazione = 0,
  larghezza,
  altezza
}) {
  sia i = 0;
  const len32 = src.length >> 2;
  const src32 = new Uint32Array(src.buffer, srcPos, len32);
  se (_util.FeatureTest.isLittleEndian) {
    per (; i < len32 - 2; i += 3, destPos += 4) {
      costante s1 = src32[i];
      costante s2 = src32[i + 1];
      costante s3 = src32[i + 2];
      dest[Pos.dest] = s1 | 0xff000000;
      dest[destPos + 1] = s1 >>> 24 | s2 << 8 | 0xff000000;
      dest[destPos + 2] = s2 >>> 16 | s3 << 16 | 0xff000000;
      dest[destPos + 3] = s3 >>> 8 | 0xff000000;
    }
    per (lascia che j = i * 4, jj = lunghezza src; j < jj; j += 3) {
      dest[destPos++] = src[j] | src[j + 1] << 8 | src[j + 2] << 16 | 0xff000000;
    }
  } altro {
    per (; i < len32 - 2; i += 3, destPos += 4) {
      costante s1 = src32[i];
      costante s2 = src32[i + 1];
      costante s3 = src32[i + 2];
      dest[Pos.dest] = s1 | 0xff;
      dest[destPos + 1] = s1 << 24 | s2 >>> 8 | 0xff;
      dest[destPos + 2] = s2 << 16 | s3 >>> 16 | 0xff;
      dest[destPos + 3] = s3 << 8 | 0xff;
    }
    per (lascia che j = i * 4, jj = lunghezza src; j < jj; j += 3) {
      dest[destPos++] = src[j] << 24 | src[j + 1] << 16 | src[j + 2] << 8 | 0xff;
    }
  }
  ritorno {
    srcPos,
    Posizione di destinazione
  };
}
funzione grayToRGBA(src, dest) {
  se (_util.FeatureTest.isLittleEndian) {
    per (lascia che i = 0, ii = lunghezza src; i < ii; i++) {
      dest[i] = src[i] * 0x10101 | 0xff000000;
    }
  } altro {
    per (lascia che i = 0, ii = lunghezza src; i < ii; i++) {
      dest[i] = src[i] * 0x1010100 | 0x000000ff;
    }
  }
}

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.GlobalWorkerOptions = void 0;
const GlobalWorkerOptions = Object.create(null);
esportazioni.GlobalWorkerOptions = GlobalWorkerOptions;
GlobalWorkerOptions.workerPort = null;
GlobalWorkerOptions.workerSrc = "";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.MessageHandler = void 0;
var _util = __w_pdfjs_require__(1);
const CallbackKind = {
  SCONOSCIUTO: 0,
  DATI: 1,
  ERRORE: 2
};
const StreamKind = {
  SCONOSCIUTO: 0,
  ANNULLA: 1,
  ANNULLA_COMPLETA: 2,
  CHIUDI: 3,
  CODA: 4,
  ERRORE: 5,
  TIRARE: 6,
  PULL_COMPLETE: 7,
  INIZIO_COMPLETO: 8
};
funzione wrapReason(motivo) {
  se (!(motivo instanceof Errore || tipo di motivo === "oggetto" && motivo !== null)) {
    (0, _util.unreachable)('wrapReason: si prevedeva che "reason" fosse un errore (probabilmente clonato).');
  }
  switch (motivo.nome) {
    caso "AbortException":
      restituisci nuovo _util.AbortException(motivo.messaggio);
    caso "MissingPDFException":
      restituisci nuovo _util.MissingPDFException(reason.message);
    caso "PasswordException":
      restituisci nuovo _util.PasswordException(motivo.messaggio, motivo.codice);
    caso "UnexpectedResponseException":
      restituisci nuovo _util.UnexpectedResponseException(motivo.messaggio, motivo.stato);
    caso "UnknownErrorException":
      restituisci nuovo _util.UnknownErrorException(motivo.messaggio, motivo.dettagli);
    predefinito:
      restituisci nuovo _util.UnknownErrorException(reason.message, reason.toString());
  }
}
classe MessageHandler {
  costruttore(nomeorigine, nomedestinazione, comObj) {
    this.sourceName = sourceName;
    questo.nometarget = nometarget;
    this.comObj = comObj;
    questo.callbackId = 1;
    questo.streamId = 1;
    this.streamSinks = Object.create(null);
    this.streamControllers = Object.create(null);
    this.callbackCapabilities = Object.create(null);
    this.actionHandler = Object.create(null);
    this._onComObjOnMessage = evento => {
      const data = event.data;
      se (data.targetName !== this.sourceName) {
        ritorno;
      }
      se (flusso di dati) {
        questo.#processStreamMessage(dati);
        ritorno;
      }
      se (data.callback) {
        const callbackId = data.callbackId;
        capacità costante = this.callbackCapabilities[callbackId];
        se (!capacità) {
          genera un nuovo errore (`Impossibile risolvere la callback ${callbackId}`);
        }
        elimina questo.callbackCapabilities[callbackId];
        se (data.callback === CallbackKind.DATA) {
          capacità.risolvere(dati.dati);
        } altrimenti se (data.callback === CallbackKind.ERROR) {
          capacità.rifiuto(wrapReason(dati.motivo));
        } altro {
          genera un nuovo errore("Caso di callback imprevisto");
        }
        ritorno;
      }
      azione costante = this.actionHandler[data.action];
      se (!azione) {
        genera un nuovo errore (`Azione sconosciuta dal worker: ${data.action}`);
      }
      se (data.callbackId) {
        const cbSourceName = this.sourceName;
        const cbTargetName = data.sourceName;
        nuova Promessa(funzione (risoluzione) {
          risolvere(azione(dati.dati));
        }).then(funzione (risultato) {
          comObj.postMessage({
            NomeSorgente: cbNomeSorgente,
            NomeDestinazione: cbNomeDestinazione,
            richiamata: CallbackKind.DATA,
            callbackId: dati.callbackId,
            dati: risultato
          });
        }, funzione (ragione) {
          comObj.postMessage({
            NomeSorgente: cbNomeSorgente,
            NomeDestinazione: cbNomeDestinazione,
            richiamata: CallbackKind.ERROR,
            callbackId: dati.callbackId,
            motivo: wrapReason(motivo)
          });
        });
        ritorno;
      }
      se (data.streamId) {
        questo.#createStreamSink(dati);
        ritorno;
      }
      azione(dati.dati);
    };
    comObj.addEventListener("messaggio", this._onComObjOnMessage);
  }
  on(actionName, gestore) {
    const ah = this.actionHandler;
    se (ah[nomeazione]) {
      throw new Error(`Esiste già un actionName chiamato "${actionName}"`);
    }
    ah[actionName] = gestore;
  }
  invia(nomeazione, dati, trasferimenti) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: questo.targetName,
      azione: actionName,
      dati
    }, trasferimenti);
  }
  sendWithPromise(actionName, dati, trasferimenti) {
    const callbackId = this.callbackId++;
    const capability = new _util.PromiseCapability();
    this.callbackCapabilities[callbackId] = capacità;
    Tentativo {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: questo.targetName,
        azione: actionName,
        callbackId,
        dati
      }, trasferimenti);
    } catturare (es.) {
      capacità.rifiuta(es);
    }
    capacità di ritorno.promessa;
  }
  sendWithStream(actionName, data, queueingStrategy, transfers) {
    const streamId = this.streamId++,
      sourceName = this.sourceName,
      targetName = questo.targetName,
      comObj = this.comObj;
    restituisci nuovo ReadableStream({
      inizio: controllore => {
        const startCapability = new _util.PromiseCapability();
        questo.streamControllers[streamId] = {
          controllore,
          startCall: startCapability,
          pullCall: nullo,
          cancelCall: null,
          è chiuso: falso
        };
        comObj.postMessage({
          NomeSorgente,
          NomeDestinazione,
          azione: actionName,
          ID flusso,
          dati,
          desiredSize: controller.desiredSize
        }, trasferimenti);
        restituisci startCapability.promise;
      },
      tira: controllore => {
        const pullCapability = new _util.PromiseCapability();
        this.streamControllers[streamId].pullCall = pullCapability;
        comObj.postMessage({
          NomeSorgente,
          NomeDestinazione,
          flusso: StreamKind.PULL,
          ID flusso,
          desiredSize: controller.desiredSize
        });
        restituisci pullCapability.promise;
      },
      annulla: motivo => {
        (0, _util.assert)(reason instanceof Error, "cancel deve avere un motivo valido");
        const cancelCapability = new _util.PromiseCapability();
        this.streamControllers[streamId].cancelCall = cancelCapability;
        this.streamControllers[streamId].isClosed = true;
        comObj.postMessage({
          NomeSorgente,
          NomeDestinazione,
          flusso: StreamKind.CANCEL,
          ID flusso,
          motivo: wrapReason(motivo)
        });
        restituisci cancelCapability.promise;
      }
    }, strategiadicoda);
  }
  #createStreamSink(dati) {
    const streamId = data.streamId,
      sourceName = this.sourceName,
      targetName = data.sourceName,
      comObj = this.comObj;
    const self = questo,
      azione = this.actionHandler[data.action];
    const streamSink = {
      enqueue(chunk, dimensione = 1, trasferimenti) {
        se (questo.èAnnullato) {
          ritorno;
        }
        const lastDesiredSize = this.desiredSize;
        this.desiredSize -= dimensione;
        se (lastDesiredSize > 0 e this.desiredSize <= 0) {
          this.sinkCapability = new _util.PromiseCapability();
          questo.pronto = questo.sinkCapability.promessa;
        }
        comObj.postMessage({
          NomeSorgente,
          NomeDestinazione,
          flusso: StreamKind.ENQUEUE,
          ID flusso,
          pezzo
        }, trasferimenti);
      },
      vicino() {
        se (questo.èAnnullato) {
          ritorno;
        }
        this.isCancelled = true;
        comObj.postMessage({
          NomeSorgente,
          NomeDestinazione,
          flusso: StreamKind.CLOSE,
          ID flusso
        });
        elimina self.streamSinks[streamId];
      },
      errore(motivo) {
        (0, _util.assert)(reason instanceof Error, "l'errore deve avere un motivo valido");
        se (questo.èAnnullato ) {
          ritorno;
        }
        this.isCancelled = true;
        comObj.postMessage({
          NomeSorgente,
          NomeDestinazione,
          flusso: StreamKind.ERROR,
          ID flusso,
          motivo: wrapReason(motivo)
        });
      },
      sinkCapability: nuovo _util.PromiseCapability(),
      onPull: nullo,
      onCancel: null,
      èAnnullato: falso,
      desiredSize: dati.desiredSize,
      pronto: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    nuova Promessa(funzione (risoluzione) {
      resolve(action(data.data, streamSink));
    }).then(funzione () {
      comObj.postMessage({
        NomeSorgente,
        NomeDestinazione,
        flusso: StreamKind.START_COMPLETE,
        ID flusso,
        successo: vero
      });
    }, funzione (ragione) {
      comObj.postMessage({
        NomeSorgente,
        NomeDestinazione,
        flusso: StreamKind.START_COMPLETE,
        ID flusso,
        motivo: wrapReason(motivo)
      });
    });
  }
  #processStreamMessage(dati) {
    const streamId = data.streamId,
      sourceName = this.sourceName,
      targetName = data.sourceName,
      comObj = this.comObj;
    const streamController = this.streamControllers[streamId],
      streamSink = this.streamSinks[streamId];
    switch (flusso di dati) {
      caso StreamKind.START_COMPLETE:
        se (data.success) {
          streamController.startCall.resolve();
        } altro {
          streamController.startCall.reject(wrapReason(data.reason));
        }
        rottura;
      caso StreamKind.PULL_COMPLETE:
        se (data.success) {
          streamController.pullCall.resolve();
        } altro {
          streamController.pullCall.reject(wrapReason(data.reason));
        }
        rottura;
      caso StreamKind.PULL:
        se (!streamSink) {
          comObj.postMessage({
            NomeSorgente,
            NomeDestinazione,
            flusso: StreamKind.PULL_COMPLETE,
            ID flusso,
            successo: vero
          });
          rottura;
        }
        se (streamSink.desiredSize <= 0 e dati.desiredSize > 0) {
          streamSink.sinkCapability.resolve();
        }
        streamSink.desiredSize = dati.desiredSize;
        nuova Promessa(funzione (risoluzione) {
          resolve(streamSink.onPull?.());
        }).then(funzione () {
          comObj.postMessage({
            NomeSorgente,
            NomeDestinazione,
            flusso: StreamKind.PULL_COMPLETE,
            ID flusso,
            successo: vero
          });
        }, funzione (ragione) {
          comObj.postMessage({
            NomeSorgente,
            NomeDestinazione,
            flusso: StreamKind.PULL_COMPLETE,
            ID flusso,
            motivo: wrapReason(motivo)
          });
        });
        rottura;
      caso StreamKind.ENQUEUE:
        (0, _util.assert)(streamController, "enqueue dovrebbe avere un controller di flusso");
        se (streamController.isClosed) {
          rottura;
        }
        streamController.controller.enqueue(data.chunk);
        rottura;
      caso StreamKind.CLOSE:
        (0, _util.assert)(streamController, "chiudi dovrebbe avere il controller di flusso");
        se (streamController.isClosed) {
          rottura;
        }
        streamController.isClosed = true;
        streamController.controller.close();
        questo.#deleteStreamController(streamController, streamId);
        rottura;
      caso StreamKind.ERROR:
        (0, _util.assert)(streamController, "errore dovrebbe avere il controller di flusso");
        streamController.controller.error(wrapReason(data.reason));
        questo.#deleteStreamController(streamController, streamId);
        rottura;
      caso StreamKind.CANCEL_COMPLETE:
        se (data.success) {
          streamController.cancelCall.resolve();
        } altro {
          streamController.cancelCall.reject(wrapReason(data.reason));
        }
        questo.#deleteStreamController(streamController, streamId);
        rottura;
      caso StreamKind.CANCEL:
        se (!streamSink) {
          rottura;
        }
        nuova Promessa(funzione (risoluzione) {
          resolve(streamSink.onCancel?.(wrapReason(data.reason)));
        }).then(funzione () {
          comObj.postMessage({
            NomeSorgente,
            NomeDestinazione,
            flusso: StreamKind.CANCEL_COMPLETE,
            ID flusso,
            successo: vero
          });
        }, funzione (ragione) {
          comObj.postMessage({
            NomeSorgente,
            NomeDestinazione,
            flusso: StreamKind.CANCEL_COMPLETE,
            ID flusso,
            motivo: wrapReason(motivo)
          });
        });
        streamSink.sinkCapability.reject(wrapReason(data.reason));
        streamSink.isCancelled = true;
        elimina questo.streamSinks[streamId];
        rottura;
      predefinito:
        genera un nuovo errore("Caso di flusso imprevisto");
    }
  }
  asincrono #deleteStreamController(streamController, streamId) {
    attendi Promise.allSettled([streamController.startCall?.promise, streamController.pullCall?.promise, streamController.cancelCall?.promise]);
    elimina questo.streamControllers[streamId];
  }
  distruggere() {
    this.comObj.removeEventListener("messaggio", this._onComObjOnMessage);
  }
}
esportazioni.MessageHandler = MessageHandler;

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.Metadati = void 0;
var _util = __w_pdfjs_require__(1);
Metadati di classe {
  #metadataMap;
  #dati;
  costruttore({
    dati analizzati,
    dati grezzi
  }) {
    questo.#metadataMap = parsedData;
    questo.#dati = dati grezzi;
  }
  getRaw() {
    restituisci questo.#data;
  }
  ottieni(nome) {
    restituisci questo.#metadataMap.get(name) ?? null;
  }
  ottieniTutto() {
    restituisci (0, _util.objectFromMap)(this.#metadataMap);
  }
  ha(nome) {
    restituisci questo.#metadataMap.has(name);
  }
}
exports.Metadata = Metadati;

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.OptionalContentConfig = void 0;
var _util = __w_pdfjs_require__(1);
var _murmurhash = __w_pdfjs_require__(8);
const INTERNO = Simbolo("INTERNO");
classe OptionalContentGroup {
  #visibile = vero;
  costruttore(nome, intento) {
    questo.nome = nome;
    questo.intento = intento;
  }
  diventa visibile() {
    restituisci questo.#visibile;
  }
  _setVisible(interno, visibile) {
    se (interno !== INTERNO) {
      (0, _util.unreachable)("Metodo interno `_setVisible` chiamato.");
    }
    questo.#visibile = visibile;
  }
}
classe OptionalContentConfig {
  #cachedGetHash = null;
  #gruppi = nuova mappa();
  #initialHash = null;
  #ordine = null;
  costruttore(dati) {
    questo.nome = null;
    questo.creatore = null;
    se (dati === null) {
      ritorno;
    }
    questo.nome = dati.nome;
    questo.creatore = dati.creatore;
    questo.#ordine = dati.ordine;
    per (gruppo costante di data.groups) {
      questo.#groups.set(group.id, new OptionalContentGroup(group.name, group.intent));
    }
    if (data.baseState === "OFF") {
      per (const gruppo di questo.#groups.values()) {
        group._setVisible(INTERNO, falso);
      }
    }
    per (const on di data.on) {
      questo.#groups.get(on)._setVisible(INTERNO, vero);
    }
    per (const off di data.off) {
      questo.#groups.get(off)._setVisible(INTERNO, falso);
    }
    questo.#initialHash = questo.getHash();
  }
  #evaluateVisibilityExpression(array) {
    lunghezza costante = array.lunghezza;
    se (lunghezza < 2) {
      restituisci vero;
    }
    operatore costante = array[0];
    per (lascia che i = 1; i < lunghezza; i++) {
      elemento costante = array[i];
      lascia lo stato;
      se (Array.isArray(elemento)) {
        stato = questo.#evaluateVisibilityExpression(elemento);
      } altrimenti se (questo.#gruppi.has(elemento)) {
        stato = questo.#gruppi.get(elemento).visibile;
      } altro {
        (0, _util.warn)(`Gruppo di contenuti facoltativo non trovato: ${element}`);
        restituisci vero;
      }
      switch (operatore) {
        caso "E":
          se (!stato) {
            restituisci falso;
          }
          rottura;
        caso "O":
          se (stato) {
            restituisci vero;
          }
          rottura;
        caso "Non":
          ritorno !stato;
        predefinito:
          restituisci vero;
      }
    }
    operatore di ritorno === "E";
  }
  èVisibile(gruppo) {
    se (questo.#gruppi.dimensione === 0) {
      restituisci vero;
    }
    se (!gruppo) {
      (0, _util.warn)("Gruppo di contenuti facoltativo non definito.");
      restituisci vero;
    }
    se (gruppo.tipo === "OCG") {
      se (!questo.#gruppi.has(gruppo.id)) {
        (0, _util.warn)(`Gruppo di contenuti facoltativo non trovato: ${group.id}`);
        restituisci vero;
      }
      restituisci questo.#groups.get(group.id).visible;
    } altrimenti se (gruppo.tipo === "OCMD") {
      se (espressione di gruppo) {
        restituisci questo.#evaluateVisibilityExpression(group.expression);
      }
      se (!group.policy || group.policy === "AnyOn") {
        per (id costante di group.ids) {
          se (!questo.#gruppi.has(id)) {
            (0, _util.warn)(`Gruppo di contenuti facoltativo non trovato: ${id}`);
            restituisci vero;
          }
          se (questo.#gruppi.get(id).visibile) {
            restituisci vero;
          }
        }
        restituisci falso;
      } altrimenti se (group.policy === "AllOn") {
        per (id costante di group.ids) {
          se (!questo.#gruppi.has(id)) {
            (0, _util.warn)(`Gruppo di contenuti facoltativo non trovato: ${id}`);
            restituisci vero;
          }
          se (!this.#groups.get(id).visible) {
            restituisci falso;
          }
        }
        restituisci vero;
      } altrimenti se (group.policy === "AnyOff") {
        per (id costante di group.ids) {
          se (!questo.#gruppi.has(id)) {
            (0, _util.warn)(`Gruppo di contenuti facoltativo non trovato: ${id}`);
            restituisci vero;
          }
          se (!this.#groups.get(id).visible) {
            restituisci vero;
          }
        }
        restituisci falso;
      } altrimenti se (group.policy === "AllOff") {
        per (id costante di group.ids) {
          se (!questo.#gruppi.has(id)) {
            (0, _util.warn)(`Gruppo di contenuti facoltativo non trovato: ${id}`);
            restituisci vero;
          }
          se (questo.#gruppi.get(id).visibile) {
            restituisci falso;
          }
        }
        restituisci vero;
      }
      (0, _util.warn)(`Criterio sui contenuti opzionali sconosciuto ${group.policy}.`);
      restituisci vero;
    }
    (0, _util.warn)(`Tipo di gruppo sconosciuto ${group.type}.`);
    restituisci vero;
  }
  setVisibility(id, visibile = vero) {
    se (!questo.#gruppi.has(id)) {
      (0, _util.warn)(`Gruppo di contenuti facoltativo non trovato: ${id}`);
      ritorno;
    }
    this.#groups.get(id)._setVisible(INTERNO, !!visibile);
    questo.#cachedGetHash = null;
  }
  ottieni hasInitialVisibility() {
    restituisci questo.#initialHash === null || questo.getHash() === questo.#initialHash;
  }
  getOrder() {
    se (!questo.#gruppi.dimensione) {
      restituisci null;
    }
    se (questo.#ordine) {
      restituisci questo.#order.slice();
    }
    restituisci [...questo.#gruppi.chiavi()];
  }
  getGroups() {
    restituisci questo.#groups.size > 0 ? (0, _util.objectFromMap)(this.#groups) : null;
  }
  getGroup(id) {
    restituisci questo.#groups.get(id) || null;
  }
  getHash() {
    se (questo.#cachedGetHash !== null) {
      restituisci questo.#cachedGetHash;
    }
    const hash = new _murmurhash.MurmurHash3_64();
    per (const [id, gruppo] di questo.#gruppi) {
      hash.update(`${id}:${group.visible}`);
    }
    restituisci questo.#cachedGetHash = hash.hexdigest();
  }
}
esportazioni.OptionalContentConfig = OptionalContentConfig;

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.PDFDataTransportStream = void 0;
var _util = __w_pdfjs_require__(1);
var _display_utils = __w_pdfjs_require__(6);
classe PDFDataTransportStream {
  costruttore({
    lunghezza,
    dati iniziali,
    progressiveDone = false,
    contentDispositionFilename = null,
    disableRange = falso,
    disableStream = falso
  }, pdfDataRangeTransport) {
    (0, _util.assert)(pdfDataRangeTransport, 'PDFDataTransportStream - argomento "pdfDataRangeTransport" obbligatorio mancante.');
    this._queuedChunks = [];
    this._progressiveDone = progressiveDone;
    this._contentDispositionFilename = contentDispositionFilename;
    se (initialData?.length > 0) {
      const buffer = initialData instanceof Uint8Array && initialData.byteLength === initialData.buffer.byteLength ? initialData.buffer : new Uint8Array(initialData).buffer;
      this._queuedChunks.push(buffer);
    }
    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !disableStream;
    this._isRangeSupported = !disableRange;
    this._contentLength = lunghezza;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    this._pdfDataRangeTransport.addRangeListener((inizio, frammento) => {
      questo._onReceiveData({
        inizio,
        pezzo
      });
    });
    this._pdfDataRangeTransport.addProgressListener((caricato, totale) => {
      questo._onProgress({
        caricato,
        totale
      });
    });
    this._pdfDataRangeTransport.addProgressiveReadListener(chunk => {
      questo._onReceiveData({
        pezzo
      });
    });
    this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    });
    this._pdfDataRangeTransport.transportReady();
  }
  _onReceiveData({
    inizio,
    pezzo
  }) {
    const buffer = chunk instanceof Uint8Array && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : new Uint8Array(chunk).buffer;
    se (inizio === indefinito) {
      se (this._fullRequestReader) {
        this._fullRequestReader._enqueue(buffer);
      } altro {
        this._queuedChunks.push(buffer);
      }
    } altro {
      const trovato = this._rangeReaders.some(function (rangeReader) {
        se (rangeReader._begin !== inizio) {
          restituisci falso;
        }
        rangeReader._enqueue(buffer);
        restituisci vero;
      });
      (0, _util.assert)(trovato, "_onReceiveData - nessuna istanza di `PDFDataTransportStreamRangeReader` trovata.");
    }
  }
  ottieni _progressiveDataLength() {
    restituisci this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(evt) {
    se (evt.totale === indefinito) {
      this._rangeReaders[0]?.onProgress?.({
        caricato: evt.loaded
      });
    } altro {
      this._fullRequestReader?.onProgress?.({
        caricato: evt.loaded,
        totale: evt.total
      });
    }
  }
  _onProgressiveDone() {
    this._fullRequestReader?.progressiveDone();
    this._progressiveDone = true;
  }
  _removeRangeReader(lettore) {
    const i = this._rangeReaders.indexOf(lettore);
    se (i >= 0) {
      this._rangeReaders.splice(i, 1);
    }
  }
  getFullReader() {
    (0, _util.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader può essere chiamato solo una volta.");
    const queuedChunks = this._queuedChunks;
    this._queuedChunks = null;
    restituisci nuovo PDFDataTransportStreamReader(questo, queuedChunks, questo._progressiveDone, questo._contentDispositionFilename);
  }
  getRangeReader(inizio, fine) {
    se (fine <= this._progressiveDataLength) {
      restituisci null;
    }
    const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
    this._pdfDataRangeTransport.requestDataRange(inizio, fine);
    this._rangeReaders.push(lettore);
    lettore di ritorno;
  }
  cancelAllRequests(motivo) {
    this._fullRequestReader?.cancel(motivo);
    per (const lettore di this._rangeReaders.slice(0)) {
      lettore.annulla(motivo);
    }
    this._pdfDataRangeTransport.abort();
  }
}
esportazioni.PDFDataTransportStream = PDFDataTransportStream;
classe PDFDataTransportStreamReader {
  costruttore(flusso, queuedChunks, progressiveDone = false, contentDispositionFilename = null) {
    this._stream = flusso;
    this._done = progressiveDone || false;
    this._filename = (0, _display_utils.isPdfFile)(contentDispositionFilename) ? contentDispositionFilename : null;
    this._queuedChunks = queuedChunks || [];
    questo._caricato = 0;
    per (const frammento di this._queuedChunks) {
      this._loaded += chunk.byteLength;
    }
    questo._richieste = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = questo;
    this.onProgress = null;
  }
  _enqueue(pezzo) {
    se (questo._fatto) {
      ritorno;
    }
    se (questa._lunghezza.richieste > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        valore: pezzo,
        fatto: falso
      });
    } altro {
      this._queuedChunks.push(chunk);
    }
    this._loaded += chunk.byteLength;
  }
  ottieni intestazioniPronte() {
    restituisci questo._headersReady;
  }
  ottieni nomefile() {
    restituisci questo._nomefile;
  }
  ottieni isRangeSupported() {
    restituisci this._stream._isRangeSupported;
  }
  ottieni isStreamingSupported() {
    restituisci this._stream._isStreamingSupported;
  }
  ottieni lunghezza del contenuto() {
    restituisci this._stream._contentLength;
  }
  lettura asincrona() {
    se (this._queuedChunks.length > 0) {
      const chunk = this._queuedChunks.shift();
      ritorno {
        valore: pezzo,
        fatto: falso
      };
    }
    se (questo._fatto) {
      ritorno {
        valore: indefinito,
        fatto: vero
      };
    }
    const requestCapability = new _util.PromiseCapability();
    this._requests.push(requestCapability);
    richiesta di ritornoCapability.promise;
  }
  annulla(motivo) {
    questo._fatto = vero;
    per (const requestCapacity di this._requests) {
      requestCapability.resolve({
        valore: indefinito,
        fatto: vero
      });
    }
    lunghezza_questa_richiesta = 0;
  }
  progressiveDone() {
    se (questo._fatto) {
      ritorno;
    }
    questo._fatto = vero;
  }
}
classe PDFDataTransportStreamRangeReader {
  costruttore(flusso, inizio, fine) {
    this._stream = flusso;
    this._begin = inizio;
    questo._fine = fine;
    this._queuedChunk = null;
    questo._richieste = [];
    questo._fatto = falso;
    this.onProgress = null;
  }
  _enqueue(pezzo) {
    se (questo._fatto) {
      ritorno;
    }
    se (questa._lunghezza.richieste === 0) {
      this._queuedChunk = pezzo;
    } altro {
      const requestsCapability = this._requests.shift();
      requestsCapability.resolve({
        valore: pezzo,
        fatto: falso
      });
      per (const requestCapacity di this._requests) {
        requestCapability.resolve({
          valore: indefinito,
          fatto: vero
        });
      }
      lunghezza_questa_richiesta = 0;
    }
    questo._fatto = vero;
    questo._stream._removeRangeReader(questo);
  }
  ottieni isStreamingSupported() {
    restituisci falso;
  }
  lettura asincrona() {
    se (this._queuedChunk) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      ritorno {
        valore: pezzo,
        fatto: falso
      };
    }
    se (questo._fatto) {
      ritorno {
        valore: indefinito,
        fatto: vero
      };
    }
    const requestCapability = new _util.PromiseCapability();
    this._requests.push(requestCapability);
    richiesta di ritornoCapability.promise;
  }
  annulla(motivo) {
    questo._fatto = vero;
    per (const requestCapacity di this._requests) {
      requestCapability.resolve({
        valore: indefinito,
        fatto: vero
      });
    }
    lunghezza_questa_richiesta = 0;
    questo._stream._removeRangeReader(questo);
  }
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.PDFFetchStream = void 0;
var _util = __w_pdfjs_require__(1);
var _network_utils = __w_pdfjs_require__(20);
;
funzione createFetchOptions(intestazioni, conCredenziali, abortController) {
  ritorno {
    metodo: "GET",
    intestazioni,
    segnale: abortController.signal,
    modalità: "cors",
    credenziali: conCredenziali? "include": "stessa origine",
    reindirizzamento: "segui"
  };
}
funzione createHeaders(httpHeaders) {
  const intestazioni = nuove intestazioni();
  per (proprietà const in httpHeaders) {
    valore costante = httpHeaders[proprietà];
    se (valore === indefinito) {
      continuare;
    }
    intestazioni.append(proprietà, valore);
  }
  intestazioni di ritorno;
}
funzione getArrayBuffer(val) {
  se (val instanceof Uint8Array) {
    restituisci val.buffer;
  }
  se (val instanceof ArrayBuffer) {
    restituisci valore;
  }
  (0, _util.warn)(`getArrayBuffer - formato dati imprevisto: ${val}`);
  restituisci nuovo Uint8Array(val).buffer;
}
classe PDFFetchStream {
  costruttore(sorgente) {
    this.source = sorgente;
    this.isHttp = /^https?:/i.test(source.url);
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  ottieni _progressiveDataLength() {
    restituisci this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    (0, _util.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader può essere chiamato solo una volta.");
    this._fullRequestReader = new PDFFetchStreamReader(this);
    restituisci questo._fullRequestReader;
  }
  getRangeReader(inizio, fine) {
    se (fine <= this._progressiveDataLength) {
      restituisci null;
    }
    const reader = new PDFFetchStreamRangeReader(this, begin, end);
    this._rangeRequestReaders.push(lettore);
    lettore di ritorno;
  }
  cancelAllRequests(motivo) {
    this._fullRequestReader?.cancel(motivo);
    per (const lettore di this._rangeRequestReaders.slice(0)) {
      lettore.annulla(motivo);
    }
  }
}
esportazioni.PDFFetchStream = PDFFetchStream;
classe PDFFetchStreamReader {
  costruttore(flusso) {
    this._stream = flusso;
    questo._lettore = null;
    questo._caricato = 0;
    questo._nomefile = null;
    const source = stream.source;
    this._withCredentials = source.withCredentials || falso;
    this._contentLength = lunghezza sorgente;
    this._headersCapability = new _util.PromiseCapability();
    this._disableRange = source.disableRange || falso;
    this._rangeChunkSize = source.rangeChunkSize;
    se (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._abortController = new AbortController();
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._headers = createHeaders(this._stream.httpHeaders);
    const url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(response => {
      se (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }
      this._reader = response.body.getReader();
      this._headersCapability.resolve();
      const getResponseHeader = nome => {
        restituisci response.headers.get(nome);
      };
      costante {
        consenti richieste di intervallo,
        lunghezza suggerita
      } = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader,
        isHttp: questo._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
      se (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new _util.AbortException("Lo streaming è disabilitato."));
      }
    }).catch(this._headersCapability.reject);
    this.onProgress = null;
  }
  ottieni intestazioniPronte() {
    restituisci this._headersCapability.promise;
  }
  ottieni nomefile() {
    restituisci questo._nomefile;
  }
  ottieni lunghezza del contenuto() {
    restituisci questo._contentLength;
  }
  ottieni isRangeSupported() {
    restituisci questo._isRangeSupported;
  }
  ottieni isStreamingSupported() {
    restituisci questo._isStreamingSupported;
  }
  lettura asincrona() {
    attendi questo._headersCapability.promise;
    costante {
      valore,
      Fatto
    } = attendi questo._reader.read();
    se (fatto) {
      ritorno {
        valore,
        Fatto
      };
    }
    questo._caricato += valore.byteLength;
    questo.inProgresso?.({
      caricato: questo._caricato,
      totale: this._contentLength
    });
    ritorno {
      valore: getArrayBuffer(valore),
      fatto: falso
    };
  }
  annulla(motivo) {
    this._reader?.cancel(motivo);
    this._abortController.abort();
  }
}
classe PDFFetchStreamRangeReader {
  costruttore(flusso, inizio, fine) {
    this._stream = flusso;
    questo._lettore = null;
    questo._caricato = 0;
    const source = stream.source;
    this._withCredentials = source.withCredentials || falso;
    this._readCapability = new _util.PromiseCapability();
    this._isStreamingSupported = !source.disableStream;
    this._abortController = new AbortController();
    this._headers = createHeaders(this._stream.httpHeaders);
    this._headers.append("Intervallo", `byte=${inizio}-${fine - 1}`);
    const url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(response => {
      se (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }
      this._readCapability.resolve();
      this._reader = response.body.getReader();
    }).catch(this._readCapability.reject);
    this.onProgress = null;
  }
  ottieni isStreamingSupported() {
    restituisci questo._isStreamingSupported;
  }
  lettura asincrona() {
    attendi questo._readCapability.promise;
    costante {
      valore,
      Fatto
    } = attendi questo._reader.read();
    se (fatto) {
      ritorno {
        valore,
        Fatto
      };
    }
    questo._caricato += valore.byteLength;
    questo.inProgresso?.({
      caricato: questo._caricato
    });
    ritorno {
      valore: getArrayBuffer(valore),
      fatto: falso
    };
  }
  annulla(motivo) {
    this._reader?.cancel(motivo);
    this._abortController.abort();
  }
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.createResponseStatusError = createResponseStatusError;
exports.extractFilenameFromHeader = extractFilenameFromHeader;
esportazioni.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
esportazioni.validateResponseStatus = validateResponseStatus;
var _util = __w_pdfjs_require__(1);
var _content_disposition = __w_pdfjs_require__(21);
var _display_utils = __w_pdfjs_require__(6);
funzione validateRangeRequestCapabilities({
  getResponseHeader,
  èHttp,
  intervalloChunkSize,
  disableRange
}) {
  const returnValues ​​= {
    allowRangeRequests: falso,
    lunghezza suggerita: indefinita
  };
  lunghezza costante = parseInt(getResponseHeader("Lunghezza del contenuto"), 10);
  se (!Number.isInteger(length)) {
    restituisci valori restituiti;
  }
  returnValues.suggestedLength = lunghezza;
  se (lunghezza <= 2 * rangeChunkSize) {
    restituisci valori restituiti;
  }
  se (disableRange || !isHttp) {
    restituisci valori restituiti;
  }
  se (getResponseHeader("Intervalli di accettazione") !== "byte") {
    restituisci valori restituiti;
  }
  const contentEncoding = getResponseHeader("Codifica del contenuto") || "identità";
  se (contentEncoding !== "identità") {
    restituisci valori restituiti;
  }
  returnValues.allowRangeRequests = true;
  restituisci valori restituiti;
}
funzione extractFilenameFromHeader(getResponseHeader) {
  const contentDisposition = getResponseHeader("Contenuto-Disposizione");
  se (contentDisposition) {
    lascia nomefile = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
    se (nomefile.include("%")) {
      Tentativo {
        nome file = decodeURIComponent(nome file);
      } presa {}
    }
    se ((0, _display_utils.isPdfFile)(nomefile)) {
      restituisci nome file;
    }
  }
  restituisci null;
}
funzione createResponseStatusError(stato, url) {
  se (stato === 404 || stato === 0 && url.startsWith("file:")) {
    restituisci nuovo _util.MissingPDFException('PDF mancante "' + url + '".');
  }
  return new _util.UnexpectedResponseException(`Risposta imprevista del server (${status}) durante il recupero del PDF "${url}".`, status);
}
funzione validateResponseStatus(stato) {
  ritorna stato === 200 || stato === 206;
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;
var _util = __w_pdfjs_require__(1);
funzione getFilenameFromContentDispositionHeader(contentDisposition) {
  lascia needsEncodingFixup = true;
  lascia tmp = toParamRegExp("nomefile\\*", "i").exec(contentDisposition);
  se (tmp) {
    tempo = tempo[1];
    lascia nomefile = rfc2616unquote(tmp);
    nomefile = unescape(nomefile);
    nome file = rfc5987decode(nome file);
    nome file = rfc2047decode(nome file);
    restituisci fixupEncoding(nomefile);
  }
  tmp = rfc2231getparam(contentDisposition);
  se (tmp) {
    const nomefile = rfc2047decode(tmp);
    restituisci fixupEncoding(nomefile);
  }
  tmp = toParamRegExp("nomefile", "i").exec(contentDisposition);
  se (tmp) {
    tempo = tempo[1];
    lascia nomefile = rfc2616unquote(tmp);
    nome file = rfc2047decode(nome file);
    restituisci fixupEncoding(nomefile);
  }
  funzione toParamRegExp(attributoPattern, flag) {
    restituisci nuova RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
  }
  funzione textdecode(codifica, valore) {
    se (codifica) {
      se (!/^[\x00-\xFF]+$/.test(valore)) {
        valore di ritorno;
      }
      Tentativo {
        const decoder = new TextDecoder(codifica, {
          fatale: vero
        });
        const buffer = (0, _util.stringToBytes)(valore);
        valore = decoder.decode(buffer);
        needsEncodingFixup = false;
      } presa {}
    }
    valore di ritorno;
  }
  funzione fixupEncoding(valore) {
    se (needsEncodingFixup && /[\x80-\xff]/.test(valore)) {
      valore = textdecode("utf-8", valore);
      se (needsEncodingFixup) {
        valore = textdecode("iso-8859-1", valore);
      }
    }
    valore di ritorno;
  }
  funzione rfc2231getparam(contentDispositionStr) {
    const corrispondenze = [];
    lascia che corrisponda;
    const iter = toParamRegExp("nomefile\\*((?!0\\d)\\d+)(\\*?)", "ig");
    while ((match = iter.exec(contentDispositionStr)) !== null) {
      lascia [, n, quot, parte] = corrispondenza;
      n = parseInt(n, 10);
      se (n nelle corrispondenze) {
        se (n === 0) {
          rottura;
        }
        continuare;
      }
      corrispondenze[n] = [quot, parte];
    }
    parti costanti = [];
    per (lascia che n = 0; n < corrispondenze.lunghezza; ++n) {
      se (!(n nelle corrispondenze)) {
        rottura;
      }
      lascia [quot, parte] = corrispondenze[n];
      parte = rfc2616unquote(parte);
      se (quot) {
        parte = unescape(parte);
        se (n === 0) {
          parte = rfc5987decode(parte);
        }
      }
      parti.push(parte);
    }
    restituisci parti.join("");
  }
  funzione rfc2616unquote(valore) {
    se (valore.iniziaCon('"')) {
      parti costanti = valore.fetta(1).split('\\"');
      per (lascia che i = 0; i < lunghezza parti; ++i) {
        const quotindex = parts[i].indexOf('"');
        se (quotindex !== -1) {
          parti[i] = parti[i].slice(0, quotindex);
          parti.lunghezza = i + 1;
        }
        parti[i] = parti[i].replaceAll(/\\(.)/g, "$1");
      }
      valore = parti.join('"');
    }
    valore di ritorno;
  }
  funzione rfc5987decode(valoreesteso) {
    const encodingend = extvalue.indexOf("'");
    se (encodingend === -1) {
      restituisci valore ext;
    }
    const encoding = extvalue.slice(0, encodingend);
    const langvalue = extvalue.slice(encodingend + 1);
    valore const = langvalue.replace(/^[^']*'/, "");
    restituisci textdecode(codifica, valore);
  }
  funzione rfc2047decode(valore) {
    se (!valore.iniziaCon("=?") || /[\x00-\x19\x80-\xff]/.test(valore)) {
      valore di ritorno;
    }
    valore di ritorno.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, funzione (corrispondenze, set di caratteri, codifica, testo) {
      se (codifica === "q" || codifica === "Q") {
        testo = testo.replaceAll("_", " ");
        testo = testo.sostituisciTutto(/=([0-9a-fA-F]{2})/g, funzione (corrispondenza, esadecimale) {
          restituisci String.fromCharCode(parseInt(esadecimale, 16));
        });
        restituisci textdecode(charset, testo);
      }
      Tentativo {
        testo = atob(testo);
      } presa {}
      restituisci textdecode(charset, testo);
    });
  }
  ritorno "";
}

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.PDFNetworkStream = void 0;
var _util = __w_pdfjs_require__(1);
var _network_utils = __w_pdfjs_require__(20);
;
const OK_RESPONSE = 200;
const RISPOSTA_CONTENUTO_PARTIZIONALE = 206;
funzione getArrayBuffer(xhr) {
  dati costanti = xhr.response;
  se (tipo di dati !== "stringa") {
    restituire i dati;
  }
  restituisci (0, _util.stringToBytes)(dati).buffer;
}
classe NetworkManager {
  costruttore(url, argomenti = {}) {
    questo.url = url;
    this.isHttp = /^https?:/i.test(url);
    this.httpHeaders = this.isHttp && args.httpHeaders || Object.create(null);
    this.withCredentials = args.withCredentials || false;
    questo.currXhrId = 0;
    this.pendingRequests = Object.create(null);
  }
  requestRange(inizio, fine, ascoltatori) {
    argomenti costanti = {
      inizio,
      FINE
    };
    per (const prop in listeners) {
      argomenti[prop] = ascoltatori[prop];
    }
    restituisci this.request(args);
  }
  requestFull(ascoltatori) {
    restituisci this.request(ascoltatori);
  }
  richiesta(argomenti) {
    const xhr = new XMLHttpRequest();
    const xhrId = this.currXhrId++;
    const pendingRequest = this.pendingRequests[xhrId] = {
      xhr
    };
    xhr.open("GET", this.url);
    xhr.withCredentials = this.withCredentials;
    per (proprietà const in this.httpHeaders) {
      valore costante = this.httpHeaders[proprietà];
      se (valore === indefinito) {
        continuare;
      }
      xhr.setRequestHeader(proprietà, valore);
    }
    if (this.isHttp && "inizio" negli argomenti && "fine" negli argomenti) {
      xhr.setRequestHeader("Intervallo", `byte=${args.begin}-${args.end - 1}`);
      pendingRequest.expectedStatus = RISPOSTA_CONTENUTO_PARTIZIONALE;
    } altro {
      pendingRequest.expectedStatus = OK_RESPONSE;
    }
    xhr.responseType = "arraybuffer";
    se (args.onError) {
      xhr.onerror = funzione (evt) {
        args.onError(xhr.status);
      };
    }
    xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
    xhr.onprogress = this.onProgress.bind(this, xhrId);
    pendingRequest.onHeadersReceived = args.onHeadersReceived;
    pendingRequest.onDone = args.onDone;
    pendingRequest.onError = args.onError;
    pendingRequest.onProgress = args.onProgress;
    xhr.send(null);
    restituisci xhrId;
  }
  onProgress(xhrId, evt) {
    const pendingRequest = this.pendingRequests[xhrId];
    se (!pendingRequest) {
      ritorno;
    }
    pendingRequest.onProgress?.(evt);
  }
  onStateChange(xhrId, evt) {
    const pendingRequest = this.pendingRequests[xhrId];
    se (!pendingRequest) {
      ritorno;
    }
    const xhr = pendingRequest.xhr;
    se (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
      pendingRequest.onHeadersReceived();
      elimina pendingRequest.onHeadersReceived;
    }
    se (xhr.readyState !== 4) {
      ritorno;
    }
    se (!(xhrId in this.pendingRequests)) {
      ritorno;
    }
    elimina this.pendingRequests[xhrId];
    se (xhr.status === 0 && this.isHttp) {
      pendingRequest.onError?.(xhr.status);
      ritorno;
    }
    const xhrStatus = xhr.status || OK_RESPONSE;
    const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
    se (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
      pendingRequest.onError?.(xhr.status);
      ritorno;
    }
    const chunk = getArrayBuffer(xhr);
    se (xhrStatus === RISPOSTA_CONTENUTO_PARTIZIONALE) {
      const rangeHeader = xhr.getResponseHeader("Intervallo di contenuti");
      const corrisponde a /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
      pendingRequest.onDone({
        inizio: parseInt(corrispondenze[1], 10),
        pezzo
      });
    } altrimenti se (pezzo) {
      pendingRequest.onDone({
        inizio: 0,
        pezzo
      });
    } altro {
      pendingRequest.onError?.(xhr.status);
    }
  }
  getRequestXhr(xhrId) {
    restituisci this.pendingRequests[xhrId].xhr;
  }
  isPendingRequest(xhrId) {
    restituisci xhrId in this.pendingRequests;
  }
  abortRequest(xhrId) {
    const xhr = this.pendingRequests[xhrId].xhr;
    elimina this.pendingRequests[xhrId];
    xhr.abort();
  }
}
classe PDFNetworkStream {
  costruttore(sorgente) {
    this._source = sorgente;
    this._manager = new NetworkManager(source.url, {
      httpHeaders: sorgente.httpHeaders,
      conCredenziali: source.withCredentials
    });
    this._rangeChunkSize = source.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(lettore) {
    const i = this._rangeRequestReaders.indexOf(lettore);
    se (i >= 0) {
      this._rangeRequestReaders.splice(i, 1);
    }
  }
  getFullReader() {
    (0, _util.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader può essere chiamato solo una volta.");
    this._fullRequestReader = nuovo PDFNetworkStreamFullRequestReader(this._manager, this._source);
    restituisci questo._fullRequestReader;
  }
  getRangeReader(inizio, fine) {
    const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
    lettore.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(lettore);
    lettore di ritorno;
  }
  cancelAllRequests(motivo) {
    this._fullRequestReader?.cancel(motivo);
    per (const lettore di this._rangeRequestReaders.slice(0)) {
      lettore.annulla(motivo);
    }
  }
}
esportazioni.PDFNetworkStream = PDFNetworkStream;
classe PDFNetworkStreamFullRequestReader {
  costruttore(gestore, sorgente) {
    this._manager = gestore;
    argomenti costanti = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = source.url;
    this._fullRequestId = manager.requestFull(args);
    this._headersReceivedCapability = new _util.PromiseCapability();
    this._disableRange = source.disableRange || falso;
    this._contentLength = lunghezza sorgente;
    this._rangeChunkSize = source.rangeChunkSize;
    se (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    questo._richieste = [];
    questo._fatto = falso;
    this._storedError = indefinito;
    questo._nomefile = null;
    this.onProgress = null;
  }
  _onHeadersReceived() {
    const fullRequestXhrId = this._fullRequestId;
    const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
    const getResponseHeader = nome => {
      restituisci fullRequestXhr.getResponseHeader(nome);
    };
    costante {
      consenti richieste di intervallo,
      lunghezza suggerita
    } = (0, _network_utils.validateRangeRequestCapabilities)({
      getResponseHeader,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    se (consentiRichiesteIntervallo) {
      this._isRangeSupported = true;
    }
    this._contentLength = suggestedLength || this._contentLength;
    this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
    se (this._isRangeSupported) {
      this._manager.abortRequest(fullRequestXhrId);
    }
    this._headersReceivedCapability.resolve();
  }
  _onDone(dati) {
    se (dati) {
      se (questa._lunghezza.richieste > 0) {
        const requestCapability = this._requests.shift();
        requestCapability.resolve({
          valore: data.chunk,
          fatto: falso
        });
      } altro {
        this._cachedChunks.push(data.chunk);
      }
    }
    questo._fatto = vero;
    se (this._cachedChunks.length > 0) {
      ritorno;
    }
    per (const requestCapacity di this._requests) {
      requestCapability.resolve({
        valore: indefinito,
        fatto: vero
      });
    }
    lunghezza_questa_richiesta = 0;
  }
  _onError(stato) {
    this._storedError = (0, _network_utils.createResponseStatusError)(stato, this._url);
    this._headersReceivedCapability.reject(this._storedError);
    per (const requestCapacity di this._requests) {
      requestCapability.reject(this._storedError);
    }
    lunghezza_questa_richiesta = 0;
    this._cachedChunks.length = 0;
  }
  _onProgress(evt) {
    questo.inProgresso?.({
      caricato: evt.loaded,
      totale: evt.lengthComputable ? evt.total : this._contentLength
    });
  }
  ottieni nomefile() {
    restituisci questo._nomefile;
  }
  ottieni isRangeSupported() {
    restituisci questo._isRangeSupported;
  }
  ottieni isStreamingSupported() {
    restituisci questo._isStreamingSupported;
  }
  ottieni lunghezza del contenuto() {
    restituisci questo._contentLength;
  }
  ottieni intestazioniPronte() {
    restituisci questo._headersReceivedCapability.promise;
  }
  lettura asincrona() {
    se (this._storedError) {
      lancia questo._storedError;
    }
    se (this._cachedChunks.length > 0) {
      const chunk = this._cachedChunks.shift();
      ritorno {
        valore: pezzo,
        fatto: falso
      };
    }
    se (questo._fatto) {
      ritorno {
        valore: indefinito,
        fatto: vero
      };
    }
    const requestCapability = new _util.PromiseCapability();
    this._requests.push(requestCapability);
    richiesta di ritornoCapability.promise;
  }
  annulla(motivo) {
    questo._fatto = vero;
    this._headersReceivedCapability.reject(motivo);
    per (const requestCapacity di this._requests) {
      requestCapability.resolve({
        valore: indefinito,
        fatto: vero
      });
    }
    lunghezza_questa_richiesta = 0;
    se (this._manager.isPendingRequest(this._fullRequestId)) {
      this._manager.abortRequest(this._fullRequestId);
    }
    this._fullRequestReader = null;
  }
}
classe PDFNetworkStreamRangeRequestReader {
  costruttore(gestore, inizio, fine) {
    this._manager = gestore;
    argomenti costanti = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    questo._url = gestore.url;
    this._requestId = manager.requestRange(inizio, fine, argomenti);
    questo._richieste = [];
    this._queuedChunk = null;
    questo._fatto = falso;
    this._storedError = indefinito;
    this.onProgress = null;
    this.onClosed = null;
  }
  _vicino() {
    questo.onClosed?.(questo);
  }
  _onDone(dati) {
    const chunk = data.chunk;
    se (questa._lunghezza.richieste > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        valore: pezzo,
        fatto: falso
      });
    } altro {
      this._queuedChunk = pezzo;
    }
    questo._fatto = vero;
    per (const requestCapacity di this._requests) {
      requestCapability.resolve({
        valore: indefinito,
        fatto: vero
      });
    }
    lunghezza_questa_richiesta = 0;
    questo._chiudi();
  }
  _onError(stato) {
    this._storedError = (0, _network_utils.createResponseStatusError)(stato, this._url);
    per (const requestCapacity di this._requests) {
      requestCapability.reject(this._storedError);
    }
    lunghezza_questa_richiesta = 0;
    this._queuedChunk = null;
  }
  _onProgress(evt) {
    se (!this.isStreamingSupported) {
      questo.inProgresso?.({
        caricato: evt.loaded
      });
    }
  }
  ottieni isStreamingSupported() {
    restituisci falso;
  }
  lettura asincrona() {
    se (this._storedError) {
      lancia questo._storedError;
    }
    se (this._queuedChunk !== null) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      ritorno {
        valore: pezzo,
        fatto: falso
      };
    }
    se (questo._fatto) {
      ritorno {
        valore: indefinito,
        fatto: vero
      };
    }
    const requestCapability = new _util.PromiseCapability();
    this._requests.push(requestCapability);
    richiesta di ritornoCapability.promise;
  }
  annulla(motivo) {
    questo._fatto = vero;
    per (const requestCapacity di this._requests) {
      requestCapability.resolve({
        valore: indefinito,
        fatto: vero
      });
    }
    lunghezza_questa_richiesta = 0;
    se (this._manager.isPendingRequest(this._requestId)) {
      this._manager.abortRequest(this._requestId);
    }
    questo._chiudi();
  }
}

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.PDFNodeStream = void 0;
var _util = __w_pdfjs_require__(1);
var _network_utils = __w_pdfjs_require__(20);
;
const fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
funzione parseUrl(sourceUrl) {
  const url = require("url");
  const parsedUrl = url.parse(sourceUrl);
  se (parsedUrl.protocol === "file:" || parsedUrl.host) {
    restituisci parsedUrl;
  }
  se (/^[az]:[/\\]/i.test(sourceUrl)) {
    restituisci url.parse(`file:///${sourceUrl}`);
  }
  se (!parsedUrl.host) {
    parsedUrl.protocol = "file:";
  }
  restituisci parsedUrl;
}
classe PDFNodeStream {
  costruttore(sorgente) {
    this.source = sorgente;
    questo.url = parseUrl(source.url);
    this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
    this.isFsUrl = this.url.protocol === "file:";
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  ottieni _progressiveDataLength() {
    restituisci this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    (0, _util.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader può essere chiamato solo una volta.");
    this._fullRequestReader = this.isFsUrl ? nuovo PDFNodeStreamFsFullReader(this) : nuovo PDFNodeStreamFullReader(this);
    restituisci questo._fullRequestReader;
  }
  getRangeReader(inizio, fine) {
    se (fine <= this._progressiveDataLength) {
      restituisci null;
    }
    const rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
    this._rangeRequestReaders.push(rangeReader);
    restituisci rangeReader;
  }
  cancelAllRequests(motivo) {
    this._fullRequestReader?.cancel(motivo);
    per (const lettore di this._rangeRequestReaders.slice(0)) {
      lettore.annulla(motivo);
    }
  }
}
esportazioni.PDFNodeStream = PDFNodeStream;
classe BaseFullReader {
  costruttore(flusso) {
    this._url = stream.url;
    questo._fatto = falso;
    this._storedError = null;
    this.onProgress = null;
    const source = stream.source;
    this._contentLength = lunghezza sorgente;
    questo._caricato = 0;
    questo._nomefile = null;
    this._disableRange = source.disableRange || falso;
    this._rangeChunkSize = source.rangeChunkSize;
    se (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = new _util.PromiseCapability();
    this._headersCapability = new _util.PromiseCapability();
  }
  ottieni intestazioniPronte() {
    restituisci this._headersCapability.promise;
  }
  ottieni nomefile() {
    restituisci questo._nomefile;
  }
  ottieni lunghezza del contenuto() {
    restituisci questo._contentLength;
  }
  ottieni isRangeSupported() {
    restituisci questo._isRangeSupported;
  }
  ottieni isStreamingSupported() {
    restituisci questo._isStreamingSupported;
  }
  lettura asincrona() {
    attendi questo._readCapability.promise;
    se (questo._fatto) {
      ritorno {
        valore: indefinito,
        fatto: vero
      };
    }
    se (this._storedError) {
      lancia questo._storedError;
    }
    const chunk = this._readableStream.read();
    se (pezzo === null) {
      this._readCapability = new _util.PromiseCapability();
      restituisci questo.leggi();
    }
    questo._caricato += lunghezza.pezzo;
    questo.inProgresso?.({
      caricato: questo._caricato,
      totale: this._contentLength
    });
    const buffer = new Uint8Array(chunk).buffer;
    ritorno {
      valore: buffer,
      fatto: falso
    };
  }
  annulla(motivo) {
    se (!this._readableStream) {
      this._error(motivo);
      ritorno;
    }
    this._readableStream.destroy(motivo);
  }
  _error(motivo) {
    this._storedError = motivo;
    this._readCapability.resolve();
  }
  _setReadableStream(flusso leggibile) {
    this._readableStream = readableStream;
    readableStream.on("leggibile", () => {
      this._readCapability.resolve();
    });
    readableStream.on("fine", () => {
      readableStream.destroy();
      questo._fatto = vero;
      this._readCapability.resolve();
    });
    readableStream.on("errore", motivo => {
      this._error(motivo);
    });
    se (!this._isStreamingSupported && this._isRangeSupported) {
      this._error(new _util.AbortException("lo streaming è disabilitato"));
    }
    se (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
classe BaseRangeReader {
  costruttore(flusso) {
    this._url = stream.url;
    questo._fatto = falso;
    this._storedError = null;
    this.onProgress = null;
    questo._caricato = 0;
    this._readableStream = null;
    this._readCapability = new _util.PromiseCapability();
    const source = stream.source;
    this._isStreamingSupported = !source.disableStream;
  }
  ottieni isStreamingSupported() {
    restituisci questo._isStreamingSupported;
  }
  lettura asincrona() {
    attendi questo._readCapability.promise;
    se (questo._fatto) {
      ritorno {
        valore: indefinito,
        fatto: vero
      };
    }
    se (this._storedError) {
      lancia questo._storedError;
    }
    const chunk = this._readableStream.read();
    se (pezzo === null) {
      this._readCapability = new _util.PromiseCapability();
      restituisci questo.leggi();
    }
    questo._caricato += lunghezza.pezzo;
    questo.inProgresso?.({
      caricato: questo._caricato
    });
    const buffer = new Uint8Array(chunk).buffer;
    ritorno {
      valore: buffer,
      fatto: falso
    };
  }
  annulla(motivo) {
    se (!this._readableStream) {
      this._error(motivo);
      ritorno;
    }
    this._readableStream.destroy(motivo);
  }
  _error(motivo) {
    this._storedError = motivo;
    this._readCapability.resolve();
  }
  _setReadableStream(flusso leggibile) {
    this._readableStream = readableStream;
    readableStream.on("leggibile", () => {
      this._readCapability.resolve();
    });
    readableStream.on("fine", () => {
      readableStream.destroy();
      questo._fatto = vero;
      this._readCapability.resolve();
    });
    readableStream.on("errore", motivo => {
      this._error(motivo);
    });
    se (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
funzione createRequestOptions(parsedUrl, intestazioni) {
  ritorno {
    protocollo: parsedUrl.protocol,
    autenticazione: parsedUrl.auth,
    host: parsedUrl.hostname,
    porta: parsedUrl.port,
    percorso: parsedUrl.path,
    metodo: "GET",
    intestazioni
  };
}
classe PDFNodeStreamFullReader estende BaseFullReader {
  costruttore(flusso) {
    super(flusso);
    const handleResponse = risposta => {
      se (response.statusCode === 404) {
        const error = new _util.MissingPDFException(`PDF mancante "${this._url}".`);
        this._storedError = errore;
        this._headersCapability.reject(errore);
        ritorno;
      }
      this._headersCapability.resolve();
      this._setReadableStream(risposta);
      const getResponseHeader = nome => {
        restituisci this._readableStream.headers[name.toLowerCase()];
      };
      costante {
        consenti richieste di intervallo,
        lunghezza suggerita
      } = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader,
        isHttp: flusso.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
    };
    this._request = null;
    se (questo._url.protocollo === "http:") {
      const http = require("http");
      this._request = http.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
    } altro {
      const https = require("https");
      this._request = https.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
    }
    this._request.on("errore", motivo => {
      this._storedError = motivo;
      this._headersCapability.reject(motivo);
    });
    questa._richiesta.fine();
  }
}
classe PDFNodeStreamRangeReader estende BaseRangeReader {
  costruttore(flusso, inizio, fine) {
    super(flusso);
    questo._httpHeaders = {};
    per (proprietà const in stream.httpHeaders) {
      valore costante = stream.httpHeaders[proprietà];
      se (valore === indefinito) {
        continuare;
      }
      this._httpHeaders[proprietà] = valore;
    }
    this._httpHeaders.Range = `byte=${inizio}-${fine - 1}`;
    const handleResponse = risposta => {
      se (response.statusCode === 404) {
        const error = new _util.MissingPDFException(`PDF mancante "${this._url}".`);
        this._storedError = errore;
        ritorno;
      }
      this._setReadableStream(risposta);
    };
    this._request = null;
    se (questo._url.protocollo === "http:") {
      const http = require("http");
      this._request = http.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
    } altro {
      const https = require("https");
      this._request = https.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
    }
    this._request.on("errore", motivo => {
      this._storedError = motivo;
    });
    questa._richiesta.fine();
  }
}
classe PDFNodeStreamFsFullReader estende BaseFullReader {
  costruttore(flusso) {
    super(flusso);
    lascia percorso = decodeURIComponent(this._url.path);
    se (fileUriRegex.test(this._url.href)) {
      percorso = percorso.sostituisci(/^\//, "");
    }
    const fs = require("fs");
    fs.lstat(percorso, (errore, stat) => {
      se (errore) {
        se (codice errore === "ENOENT") {
          errore = new _util.MissingPDFException(`PDF mancante "${path}".`);
        }
        this._storedError = errore;
        this._headersCapability.reject(errore);
        ritorno;
      }
      this._contentLength = stat.size;
      this._setReadableStream(fs.createReadStream(percorso));
      this._headersCapability.resolve();
    });
  }
}
classe PDFNodeStreamFsRangeReader estende BaseRangeReader {
  costruttore(flusso, inizio, fine) {
    super(flusso);
    lascia percorso = decodeURIComponent(this._url.path);
    se (fileUriRegex.test(this._url.href)) {
      percorso = percorso.sostituisci(/^\//, "");
    }
    const fs = require("fs");
    this._setReadableStream(fs.createReadStream(percorso, {
      inizio,
      fine: fine - 1
    }));
  }
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.SVGGraphics = void 0;
var _display_utils = __w_pdfjs_require__(6);
var _util = __w_pdfjs_require__(1);
;
const SVG_DEFAULTS = {
  fontStyle: "normale",
  fontWeight: "normale",
  colore di riempimento: "#000000"
};
const XML_NS = "http://www.w3.org/XML/1998/namespace";
const XLINK_NS = "http://www.w3.org/1999/xlink";
const LINE_CAP_STYLES = ["testa a testa", "rotondo", "quadrato"];
const LINE_JOIN_STYLES = ["mitra", "arrotondato", "smussato"];
const createObjectURL = function (data, contentType = "", forceDataSchema = false) {
  se (URL.createObjectURL && tipo di Blob !== "non definito" && !forceDataSchema) {
    restituisce URL.createObjectURL(nuovo Blob([dati], {
      tipo: contentType
    }));
  }
  cifre costanti = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  lascia buffer = `data:${contentType};base64,`;
  per (lascia che i = 0, ii = lunghezza dati; i < ii; i += 3) {
    const b1 = data[i] & 0xff;
    const b2 = dati[i + 1] & 0xff;
    const b3 = dati[i + 2] & 0xff;
    costante d1 = b1 >> 2,
      d2 = (b1 e 3) << 4 | b2 >> 4;
    const d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
    cost d4 = i + 2 < ii ? b3 e 0x3f: 64;
    buffer += cifre[d1] + cifre[d2] + cifre[d3] + cifre[d4];
  }
  buffer di ritorno;
};
const convertImgDataToPng = funzione () {
  const PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const CHUNK_WRAPPER_SIZE = 12;
  const crcTable = new Int32Array(256);
  per (lascia che i = 0; i < 256; i++) {
    sia c = i;
    per (lascia che h = 0; h < 8; h++) {
      c = c & 1 ? 0xedb88320 ^ c >> 1 & 0x7fffffff : c >> 1 & 0x7fffffff;
    }
    crcTable[i] = c;
  }
  funzione crc32(dati, inizio, fine) {
    lascia crc = -1;
    per (lascia che i = inizio; i < fine; i++) {
      const a = (crc ^ data[i]) & 0xff;
      const b = crcTable[a];
      crc = crc >>> 8 ^ b;
    }
    restituisci crc ^ -1;
  }
  funzione writePngChunk(tipo, corpo, dati, offset) {
    lascia p = offset;
    const len ​​= lunghezza corpo;
    dati[p] = len >> 24 & 0xff;
    dati[p + 1] = len >> 16 & 0xff;
    dati[p + 2] = len >> 8 & 0xff;
    dati[p + 3] = len & 0xff;
    p += 4;
    dati[p] = tipo.charCodeAt(0) & 0xff;
    dati[p + 1] = tipo.charCodeAt(1) & 0xff;
    dati[p + 2] = tipo.charCodeAt(2) & 0xff;
    dati[p + 3] = tipo.charCodeAt(3) & 0xff;
    p += 4;
    data.set(corpo, p);
    p += lunghezza del corpo;
    const crc = crc32(dati, offset + 4, p);
    dati[p] = crc >> 24 & 0xff;
    dati[p + 1] = crc >> 16 & 0xff;
    dati[p + 2] = crc >> 8 & 0xff;
    dati[p + 3] = crc & 0xff;
  }
  funzione adler32(dati, inizio, fine) {
    sia a = 1;
    sia b = 0;
    per (lascia che i = inizio; i < fine; ++i) {
      a = (a + (data[i] & 0xff)) % 65521;
      b = (b + a) % 65521;
    }
    ritorna b << 16 | a;
  }
  funzione deflateSync(letterali) {
    se (!_util.isNodeJS) {
      restituisci deflateSyncUncompressed(letterali);
    }
    Tentativo {
      const input = parseInt(process.versions.node) >= 8 ? letterali : Buffer.from(letterali);
      const output = require("zlib").deflateSync(input, {
        livello: 9
      });
      restituisci l'output instanceof Uint8Array ? output: new Uint8Array(output);
    } cattura (e) {
      (0, _util.warn)("Impossibile comprimere PNG perché zlib.deflateSync non è disponibile: " + e);
    }
    restituisci deflateSyncUncompressed(letterali);
  }
  funzione deflateSyncUncompressed(letterali) {
    lascia len = letterali.lunghezza;
    const maxBlockLength = 0xffff;
    const deflateBlocks = Math.ceil(len / maxBlockLength);
    const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
    lascia pi = 0;
    idat[pi++] = 0x78;
    idat[pi++] = 0x9c;
    lascia pos = 0;
    while (len > maxBlockLength) {
      idat[pi++] = 0x00;
      idat[pi++] = 0xff;
      idat[pi++] = 0xff;
      idat[pi++] = 0x00;
      idat[pi++] = 0x00;
      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
      pi += maxBlockLength;
      pos += maxBlockLength;
      len -= maxBlockLength;
    }
    idat[pi++] = 0x01;
    idat[pi++] = len & 0xff;
    idat[pi++] = len >> 8 & 0xff;
    idat[pi++] = ~len & 0xffff & 0xff;
    idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
    idat.set(literals.subarray(pos), pi);
    pi += letterali.lunghezza - pos;
    const adler = adler32(letterali, 0, letterali.lunghezza);
    idat[pi++] = adler >> 24 & 0xff;
    idat[pi++] = adler >> 16 & 0xff;
    idat[pi++] = adler >> 8 & 0xff;
    idat[pi++] = adler & 0xff;
    restituisci idat;
  }
  funzione encode(imgData, tipo, forceDataSchema, isMask) {
    const width = imgData.width;
    altezza costante = imgData.height;
    lascia bitDepth, colorType, lineSize;
    const byte = imgData.data;
    interruttore (tipo) {
      caso _util.ImageKind.GRAYSCALE_1BPP:
        tipocolore = 0;
        Profondità bit = 1;
        lineSize = larghezza + 7 >> 3;
        rottura;
      caso _util.ImageKind.RGB_24BPP:
        tipo di colore = 2;
        Profondità bit = 8;
        lineSize = larghezza * 3;
        rottura;
      caso _util.ImageKind.RGBA_32BPP:
        tipo di colore = 6;
        Profondità bit = 8;
        lineSize = larghezza * 4;
        rottura;
      predefinito:
        genera un nuovo errore ("formato non valido");
    }
    const letterali = new Uint8Array((1 + lineSize) * altezza);
    lascia offsetLiterals = 0,
      offsetBytes = 0;
    per (lascia che y = 0; y < altezza; ++y) {
      letterali[offsetLiterals++] = 0;
      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
      offsetBytes += dimensionelinea;
      offsetLiterals += lineSize;
    }
    if (tipo === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
      offsetLiterals = 0;
      per (lascia che y = 0; y < altezza; y++) {
        offsetLiterals++;
        per (lascia che i = 0; i < lineSize; i++) {
          letterali[offsetLiterals++] ^= 0xff;
        }
      }
    }
    const ihdr = new Uint8Array([larghezza >> 24 e 0xff, larghezza >> 16 e 0xff, larghezza >> 8 e 0xff, larghezza e 0xff, altezza >> 24 e 0xff, altezza >> 16 e 0xff, altezza >> 8 e 0xff, altezza e 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
    const idat = deflateSync(letterali);
    const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
    const data = new Uint8Array(pngLength);
    lascia offset = 0;
    data.set(PNG_HEADER, offset);
    offset += PNG_HEADER.length;
    writePngChunk("IHDR", ihdr, dati, offset);
    offset += CHUNK_WRAPPER_SIZE + ihdr.length;
    writePngChunk("IDATA", idat, dati, offset);
    offset += CHUNK_WRAPPER_SIZE + idat.length;
    writePngChunk("IEND", nuovo Uint8Array(0), dati, offset);
    restituisci createObjectURL(dati, "immagine/png", forceDataSchema);
  }
  funzione di ritorno convertImgDataToPng(imgData, forceDataSchema, isMask) {
    const kind = imgData.kind === non definito ? _util.ImageKind.GRAYSCALE_1BPP: imgData.kind;
    return encode(imgData, kind, forceDataSchema, isMask);
  };
}();
classe SVGExtraState {
  costruttore() {
    this.fontSizeScale = 1;
    this.fontWeight = SVG_DEFAULTS.fontWeight;
    this.fontSize = 0;
    this.textMatrix = _util.IDENTITY_MATRIX;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    questo.principale = 0;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.textMatrixScale = 1;
    questo.x = 0;
    questo.y = 0;
    questa.lineaX = 0;
    questa.lineaY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRise = 0;
    this.fillColor = SVG_DEFAULTS.fillColor;
    this.strokeColor = "#000000";
    questo.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.lineJoin = "";
    this.lineCap = "";
    this.miterLimit = 0;
    questo.dashArray = [];
    this.dashPhase = 0;
    questo.dipendenze = [];
    this.activeClipUrl = null;
    this.clipGroup = null;
    questo.maskId = "";
  }
  clona() {
    restituisci Object.create(this);
  }
  impostaPuntoCorrente(x, y) {
    questo.x = x;
    questo.y = y;
  }
}
funzione opListToTree(opList) {
  lascia opTree = [];
  const tmp = [];
  for (const opListElement di opList) {
    if (opListElement.fn === "salva") {
      opTree.push({
        fnId: 92,
        fn: "gruppo",
        elementi: []
      });
      tmp.push(opTree);
      opTree = opTree.at(-1).items;
      continuare;
    }
    if (opListElement.fn === "ripristina") {
      opTree = tmp.pop();
    } altro {
      opTree.push(opListElement);
    }
  }
  restituisci opTree;
}
funzione pf(valore) {
  se (Numero.èIntero(valore)) {
    valore di ritorno.toString();
  }
  const s = valore.toFixed(10);
  sia i = s.length - 1;
  se (s[i] !== "0") {
    restituisci s;
  }
  Fare {
    io--;
  } while (s[i] === "0");
  restituisce s.substring(0, s[i] === "." ? i : i + 1);
}
funzione pm(m) {
  se (m[4] === 0 e m[5] === 0) {
    se (m[1] === 0 e m[2] === 0) {
      se (m[0] === 1 && m[3] === 1) {
        ritorno "";
      }
      restituisci `scala(${pf(m[0])} ${pf(m[3])})`;
    }
    se (m[0] === m[3] e m[1] === -m[2]) {
      const a = Math.acos(m[0]) * 180 / Math.PI;
      ritorna `ruota(${pf(a)})`;
    }
  } altrimenti se (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
    restituisci `traduci(${pf(m[4])} ${pf(m[5])})`;
  }
  restituisci `matrice(${pf(m[0])} ${pf(m[1])} ${pf(m[2])} ${pf(m[3])} ${pf(m[4])} ` + `${pf(m[5])})`;
}
lascia clipCount = 0;
lascia maskCount = 0;
lascia shadingCount = 0;
classe SVGGraphics {
  costruttore(commonObjs, objs, forceDataSchema = false) {
    (0, _display_utils.deprecated)("Il back-end SVG non è più gestito e *potrebbe* essere rimosso in futuro.");
    this.svgFactory = new _display_utils.DOMSVGFactory();
    this.current = new SVGExtraState();
    this.transformMatrix = _util.IDENTITY_MATRIX;
    questo.transformStack = [];
    questo.extraStack = [];
    questo.commonObjs = commonObjs;
    questo.objs = objs;
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.embedFonts = false;
    this.embeddedFonts = Object.create(null);
    questo.cssStyle = null;
    questo.forceDataSchema = !!forceDataSchema;
    this._operatorIdMapping = [];
    per (const op in _util.OPS) {
      this._operatorIdMapping[_util.OPS[op]] = op;
    }
  }
  getObject(dati, fallback = null) {
    se (tipo di dati === "stringa") {
      restituisci dati.startsWith("g_") ? this.commonObjs.get(dati) : this.objs.get(dati);
    }
    ritorno di riserva;
  }
  salva() {
    questo.transformStack.push(questo.transformMatrix);
    const vecchio = questo.corrente;
    this.extraStack.push(vecchio);
    questo.corrente = vecchio.clone();
  }
  ripristinare() {
    questo.transformMatrix = questo.transformStack.pop();
    questo.corrente = questo.extraStack.pop();
    this.pendingClip = null;
    questo.tgrp = null;
  }
  gruppo(elementi) {
    questo.salva();
    this.executeOpTree(elementi);
    questo.ripristina();
  }
  loadDependencies(elencooperatori) {
    const fnArray = operatorList.fnArray;
    const argsArray = operatorList.argsArray;
    per (lascia che i = 0, ii = fnArray.length; i < ii; i++) {
      se (fnArray[i] !== _util.OPS.dependency) {
        continuare;
      }
      per (const obj di argsArray[i]) {
        const objsPool = obj.startsWith("g_") ? this.commonObjs : this.objs;
        const promise = new Promise(resolve => {
          objsPool.get(obj, resolve);
        });
        this.current.dependencies.push(promise);
      }
    }
    restituisci Promise.all(this.current.dependencies);
  }
  trasforma(a, b, c, d, e, f) {
    const transformMatrix = [a, b, c, d, e, f];
    this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
    questo.tgrp = null;
  }
  getSVG(elencooperatori, viewport) {
    this.viewport = finestra di visualizzazione;
    const svgElement = this._initialize(viewport);
    restituisci this.loadDependencies(operatorList).then(() => {
      this.transformMatrix = _util.IDENTITY_MATRIX;
      this.executeOpTree(this.convertOpList(operatorList));
      restituisci svgElement;
    });
  }
  convertOpList(operatoreList) {
    const operatorIdMapping = this._operatorIdMapping;
    const argsArray = operatorList.argsArray;
    const fnArray = operatorList.fnArray;
    const opList = [];
    per (lascia che i = 0, ii = fnArray.length; i < ii; i++) {
      const fnId = fnArray[i];
      opList.push({
        fnId,
        fn: operatorIdMapping[fnId],
        argomenti: argsArray[i]
      });
    }
    restituisci opListToTree(opList);
  }
  executeOpTree(opTree) {
    for (const opTreeElement di opTree) {
      const fn = opTreeElement.fn;
      const fnId = opTreeElement.fnId;
      const args = opTreeElement.args;
      interruttore (fnId | 0) {
        caso _util.OPS.beginText:
          questo.beginText();
          rottura;
        caso _util.OPS.dependency:
          rottura;
        caso _util.OPS.setLeading:
          this.setLeading(argomenti);
          rottura;
        caso _util.OPS.setLeadingMoveText:
          this.setLeadingMoveText(args[0], args[1]);
          rottura;
        caso _util.OPS.setFont:
          this.setFont(argomenti);
          rottura;
        caso _util.OPS.showText:
          questo.mostraTesto(argomenti[0]);
          rottura;
        caso _util.OPS.showSpacedText:
          questo.mostraTesto(argomenti[0]);
          rottura;
        caso _util.OPS.endText:
          questo.endText();
          rottura;
        caso _util.OPS.moveText:
          questo.moveText(argomenti[0], argomenti[1]);
          rottura;
        caso _util.OPS.setCharSpacing:
          questo.setCharSpacing(args[0]);
          rottura;
        caso _util.OPS.setWordSpacing:
          questo.setWordSpacing(args[0]);
          rottura;
        caso _util.OPS.setHScale:
          questo.setHScale(argomenti[0]);
          rottura;
        caso _util.OPS.setTextMatrix:
          this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
          rottura;
        caso _util.OPS.setTextRise:
          this.setTextRise(args[0]);
          rottura;
        caso _util.OPS.setTextRenderingMode:
          questo.setTextRenderingMode(args[0]);
          rottura;
        caso _util.OPS.setLineWidth:
          questo.setLineWidth(args[0]);
          rottura;
        caso _util.OPS.setLineJoin:
          questo.setLineJoin(args[0]);
          rottura;
        caso _util.OPS.setLineCap:
          this.setLineCap(args[0]);
          rottura;
        caso _util.OPS.setMiterLimit:
          this.setMiterLimit(args[0]);
          rottura;
        caso _util.OPS.setFillRGBColor:
          this.setFillRGBColor(argomenti[0], argomenti[1], argomenti[2]);
          rottura;
        caso _util.OPS.setStrokeRGBColor:
          this.setStrokeRGBColor(argomenti[0], argomenti[1], argomenti[2]);
          rottura;
        caso _util.OPS.setStrokeColorN:
          this.setStrokeColorN(argomenti);
          rottura;
        caso _util.OPS.setFillColorN:
          this.setFillColorN(argomenti);
          rottura;
        caso _util.OPS.shadingFill:
          questo.ombreggiaturaRiempimento(argomenti[0]);
          rottura;
        caso _util.OPS.setDash:
          questo.setDash(argomenti[0], argomenti[1]);
          rottura;
        case _util.OPS.setRenderingIntent:
          this.setRenderingIntent(args[0]);
          rottura;
        caso _util.OPS.setFlatness:
          questo.setFlatness(args[0]);
          rottura;
        caso _util.OPS.setGState:
          questo.setGState(args[0]);
          rottura;
        caso _util.OPS.fill:
          questo.riempi();
          rottura;
        caso _util.OPS.eoFill:
          questo.eoFill();
          rottura;
        caso _util.OPS.stroke:
          questo.tratto();
          rottura;
        caso _util.OPS.fillStroke:
          questo.fillStroke();
          rottura;
        caso _util.OPS.eoFillStroke:
          this.eoFillStroke();
          rottura;
        caso _util.OPS.clip:
          this.clip("nonzero");
          rottura;
        caso _util.OPS.eoClip:
          this.clip("evenodd");
          rottura;
        caso _util.OPS.paintSolidColorImageMask:
          this.paintSolidColorImageMask();
          rottura;
        caso _util.OPS.paintImageXObject:
          this.paintImageXObject(args[0]);
          rottura;
        caso _util.OPS.paintInlineImageXObject:
          this.paintInlineImageXObject(args[0]);
          rottura;
        caso _util.OPS.paintImageMaskXObject:
          this.paintImageMaskXObject(args[0]);
          rottura;
        caso _util.OPS.paintFormXObjectBegin:
          this.paintFormXObjectBegin(argomenti[0], argomenti[1]);
          rottura;
        caso _util.OPS.paintFormXObjectEnd:
          questo.paintFormXObjectEnd();
          rottura;
        caso _util.OPS.closePath:
          questo.closePath();
          rottura;
        caso _util.OPS.closeStroke:
          questo.closeStroke();
          rottura;
        caso _util.OPS.closeFillStroke:
          questo.chiudiFillStroke();
          rottura;
        caso _util.OPS.closeEOFillStroke:
          questo.chiudiEOFillStroke();
          rottura;
        caso _util.OPS.nextLine:
          questa.rigasuccessiva();
          rottura;
        caso _util.OPS.transform:
          questo.trasforma(argomenti[0], argomenti[1], argomenti[2], argomenti[3], argomenti[4], argomenti[5]);
          rottura;
        caso _util.OPS.constructPath:
          questo.costruisciPath(argomenti[0], argomenti[1]);
          rottura;
        caso _util.OPS.endPath:
          questo.endPath();
          rottura;
        caso 92:
          questo.gruppo(opTreeElement.elementi);
          rottura;
        predefinito:
          (0, _util.warn)(`Operatore non implementato ${fn}`);
          rottura;
      }
    }
  }
  setWordSpacing(spaziaturaparole) {
    this.current.wordSpacing = wordSpacing;
  }
  setCharSpacing(spaziaturacaratteri) {
    this.current.charSpacing = charSpacing;
  }
  rigasuccessiva() {
    this.moveText(0, this.current.leading);
  }
  impostaMatriceTesto(a, b, c, d, e, f) {
    const corrente = this.current;
    matrice.testo corrente = matrice.riga corrente = [a, b, c, d, e, f];
    current.textMatrixScale = Math.hypot(a, b);
    corrente.x = corrente.lineX = 0;
    corrente.y = corrente.lineY = 0;
    coordinate correnti = [];
    coordinate.y correnti = [];
    current.tspan = this.svgFactory.createElement("svg:tspan");
    current.tspan.setAttributeNS(null, "famiglia-di-caratteri", current.fontFamily);
    current.tspan.setAttributeNS(null, "dimensione-carattere", `${pf(current.fontSize)}px`);
    current.tspan.setAttributeNS(null, "y", pf(-current.y));
    current.txtElement = this.svgFactory.createElement("svg:text");
    corrente.txtElement.append(corrente.tspan);
  }
  inizioTesto() {
    const corrente = this.current;
    corrente.x = corrente.lineX = 0;
    corrente.y = corrente.lineY = 0;
    current.textMatrix = _util.IDENTITY_MATRIX;
    current.lineMatrix = _util.IDENTITY_MATRIX;
    corrente.textMatrixScale = 1;
    current.tspan = this.svgFactory.createElement("svg:tspan");
    current.txtElement = this.svgFactory.createElement("svg:text");
    current.txtgrp = this.svgFactory.createElement("svg:g");
    coordinate correnti = [];
    coordinate.y correnti = [];
  }
  spostaTesto(x, y) {
    const corrente = this.current;
    corrente.x = corrente.lineX += x;
    corrente.y = corrente.lineY += y;
    coordinate correnti = [];
    coordinate.y correnti = [];
    current.tspan = this.svgFactory.createElement("svg:tspan");
    current.tspan.setAttributeNS(null, "famiglia-di-caratteri", current.fontFamily);
    current.tspan.setAttributeNS(null, "dimensione-carattere", `${pf(current.fontSize)}px`);
    current.tspan.setAttributeNS(null, "y", pf(-current.y));
  }
  showText(glifi) {
    const corrente = this.current;
    const font = current.font;
    const fontSize = current.fontSize;
    se (dimensione carattere === 0) {
      ritorno;
    }
    const fontSizeScale = current.fontSizeScale;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const fontDirection = current.fontDirection;
    const textHScale = current.textHScale * fontDirection;
    const verticale = font.vertical;
    const spacingDir = verticale ? 1 : -1;
    const defaultVMetrics = font.defaultVMetrics;
    const widthAdvanceScale = fontSize * current.fontMatrix[0];
    sia x = 0;
    per (glifo costante di glifi) {
      se (glifo === null) {
        x += fontDirection * wordSpacing;
        continuare;
      } else if (typeof glyph === "numero") {
        x += spaziaturaDir * glifo * dimensionecarattere / 1000;
        continuare;
      }
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const carattere = glyph.fontChar;
      lascia scalatoX, scalatoY;
      lascia larghezza = glifo.larghezza;
      se (verticale) {
        lascia vx;
        const vmetric = glyph.vmetric || defaultVMetrics;
        vx = glyph.vmetric ? vmetric[1] : larghezza * 0,5;
        vx = -vx * widthAdvanceScale;
        const vy = vmetric[2] * widthAdvanceScale;
        larghezza = vmetric ? -vmetric[0] : larghezza;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
      } altro {
        scaledX = x / fontSizeScale;
        scalatoY = 0;
      }
      se (glyph.isInFont || font.missingFile) {
        current.xcoords.push(current.x + scaledX);
        se (verticale) {
          coordinate.y correnti.push(-corrente.y + scalataY);
        }
        current.tspan.textContent += carattere;
      } altro {}
      const charWidth = vertical ? width * widthAdvanceScale - spacing * fontDirection : width * widthAdvanceScale + spacing * fontDirection;
      x += larghezza carattere;
    }
    current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
    se (verticale) {
      current.tspan.setAttributeNS(null, "y", current.ycoords.map(pf).join(" "));
    } altro {
      current.tspan.setAttributeNS(null, "y", pf(-current.y));
    }
    se (verticale) {
      corrente.y -= x;
    } altro {
      current.x += x * textHScale;
    }
    current.tspan.setAttributeNS(null, "famiglia-di-caratteri", current.fontFamily);
    current.tspan.setAttributeNS(null, "dimensione-carattere", `${pf(current.fontSize)}px`);
    se (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
      current.tspan.setAttributeNS(null, "stile-carattere", current.fontStyle);
    }
    se (pesofont.corrente !== SVG_DEFAULTS.pesofont) {
      current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
    }
    const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
    se (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
      se (current.fillColor !== SVG_DEFAULTS.fillColor) {
        current.tspan.setAttributeNS(null, "riempimento", current.fillColor);
      }
      se (current.fillAlpha < 1) {
        current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
      }
    } altrimenti se (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
      current.tspan.setAttributeNS(null, "riempi", "trasparente");
    } altro {
      current.tspan.setAttributeNS(null, "riempi", "nessuno");
    }
    se (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
      const lineWidthScale = 1 / (current.textMatrixScale || 1);
      this._setStrokeAttributes(current.tspan, lineWidthScale);
    }
    lascia textMatrix = current.textMatrix;
    se (current.textRise !== 0) {
      textMatrix = textMatrix.slice();
      textMatrix[5] += current.textRise;
    }
    current.txtElement.setAttributeNS(null, "trasforma", `${pm(textMatrix)} scale(${pf(textHScale)}, -1)`);
    current.txtElement.setAttributeNS(XML_NS, "xml:spazio", "conserva");
    corrente.txtElement.append(corrente.tspan);
    corrente.txtgrp.append(corrente.txtElement);
    this._ensureTransformGroup().append(current.txtElement);
  }
  impostaTestoMossaPrincipale(x, y) {
    questo.setLeading(-y);
    questo.moveText(x, y);
  }
  aggiungiFontStyle(fontObj) {
    se (!fontObj.data) {
      throw new Error("addFontStyle: nessun dato sul font disponibile, " + 'assicurati che il parametro API "fontExtraProperties" sia impostato.');
    }
    se (!this.cssStyle) {
      this.cssStyle = this.svgFactory.createElement("svg:style");
      this.cssStyle.setAttributeNS(null, "tipo", "testo/css");
      questo.defs.append(questo.cssStyle);
    }
    const url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
    this.cssStyle.textContent += `@font-face { font-family: "${fontObj.loadedName}";` + ` src: url(${url}); }\n`;
  }
  setFont(dettagli) {
    const corrente = this.current;
    const fontObj = this.commonObjs.get(details[0]);
    lascia che size = details[1];
    current.font = fontObj;
    se (this.embedFonts && !fontObj.missingFile && !this.embeddedFonts[fontObj.loadedName]) {
      questo.addFontStyle(fontObj);
      this.embeddedFonts[fontObj.loadedName] = fontObj;
    }
    current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;
    lascia grassetto = "normale";
    se (fontObj.black) {
      grassetto = "900";
    } altrimenti se (fontObj.bold) {
      grassetto = "grassetto";
    }
    const italic = fontObj.italic ? "corsivo" : "normale";
    se (dimensione < 0) {
      dimensione = -dimensione;
      direzione.font.corrente = -1;
    } altro {
      direzione del carattere corrente = 1;
    }
    current.fontSize = dimensione;
    current.fontFamily = fontObj.loadedName;
    current.fontWeight = grassetto;
    current.fontStyle = corsivo;
    current.tspan = this.svgFactory.createElement("svg:tspan");
    current.tspan.setAttributeNS(null, "y", pf(-current.y));
    coordinate correnti = [];
    coordinate.y correnti = [];
  }
  fineTesto() {
    const corrente = this.current;
    se (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement?.hasChildNodes()) {
      elemento corrente = elemento testo corrente;
      this.clip("nonzero");
      questo.endPath();
    }
  }
  setLineWidth(larghezza) {
    se (larghezza > 0) {
      this.current.lineWidth = larghezza;
    }
  }
  setLineCap(stile) {
    this.current.lineCap = LINE_CAP_STYLES[style];
  }
  setLineJoin(stile) {
    this.current.lineJoin = LINE_JOIN_STYLES[stile];
  }
  setMiterLimit(limite) {
    this.current.miterLimit = limite;
  }
  impostaAlfaTratto(AlfaTratto) {
    this.current.strokeAlpha = strokeAlpha;
  }
  setStrokeRGBColor(r, g, b) {
    this.current.strokeColor = _util.Util.makeHexColor(r, g, b);
  }
  setFillAlpha(fillAlpha) {
    questo.attuale.fillAlpha = fillAlpha;
  }
  setFillRGBColor(r, g, b) {
    questo.colore.di.riempimento.corrente = _util.Util.makeHexColor(r, g, b);
    this.current.tspan = this.svgFactory.createElement("svg:tspan");
    questo.coordinate.correnti = [];
    questo.coordinate.correnti = [];
  }
  setStrokeColorN(argomenti) {
    this.current.strokeColor = this._makeColorN_Pattern(args);
  }
  setFillColorN(argomenti) {
    questo.colore.di.riempimento.corrente = questo._makeColorN_Pattern(argomenti);
  }
  shadingFill(argomenti) {
    costante {
      larghezza,
      altezza
    } = this.viewport;
    const inv = _util.Util.inverseTransform(this.transformMatrix);
    const [x0, y0, x1, y1] = _util.Util.getAxialAlignedBoundingBox([0, 0, larghezza, altezza], inv);
    const rect = this.svgFactory.createElement("svg:rect");
    rect.setAttributeNS(null, "x", x0);
    rect.setAttributeNS(null, "y", y0);
    rect.setAttributeNS(null, "larghezza", x1 - x0);
    rect.setAttributeNS(null, "altezza", y1 - y0);
    rect.setAttributeNS(null, "riempi", this._makeShadingPattern(args));
    se (questo.current.fillAlpha < 1) {
      rect.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
    }
    this._ensureTransformGroup().append(rect);
  }
  _makeColorN_Pattern(argomenti) {
    se (args[0] === "TilingPattern") {
      restituisci questo._makeTilingPattern(args);
    }
    restituisci questo._makeShadingPattern(args);
  }
  _makeTilingPattern(argomenti) {
    const colore = argomenti[1];
    const operatorList = args[2];
    matrice costante = argomenti[3] || _util.IDENTITY_MATRIX;
    const [x0, y0, x1, y1] = argomenti[4];
    const xstep = args[5];
    const ystep = args[6];
    const paintType = args[7];
    const tilingId = `shading${shadingCount++}`;
    const [tx0, ty0, tx1, ty1] = _util.Util.normalizeRect([..._util.Util.applyTransform([x0, y0], matrice), ..._util.Util.applyTransform([x1, y1], matrice)]);
    const [scala x, scala y] = _util.Util.singularValueDecompose2dScale(matrice);
    const txstep = xstep * xscale;
    const tystep = ystep * yscale;
    const tiling = this.svgFactory.createElement("svg:pattern");
    tiling.setAttributeNS(null, "id", tilingId);
    tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
    tiling.setAttributeNS(null, "larghezza", txstep);
    tiling.setAttributeNS(null, "altezza", typest);
    tiling.setAttributeNS(null, "x", `${tx0}`);
    tiling.setAttributeNS(null, "y", `${ty0}`);
    const svg = this.svg;
    const transformMatrix = this.transformMatrix;
    const fillColor = this.current.fillColor;
    const strokeColor = this.current.strokeColor;
    const bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
    this.svg = bbox;
    this.transformMatrix = matrice;
    se (tipovernice === 2) {
      const cssColor = _util.Util.makeHexColor(...color);
      questo.colore.di.riempimento.corrente = cssColor;
      questo.colore.tratto.corrente = cssColor;
    }
    this.executeOpTree(this.convertOpList(operatorList));
    questo.svg = svg;
    this.transformMatrix = transformMatrix;
    questo.colore.di.riempimento.corrente = colore.di.riempimento;
    this.current.strokeColor = strokeColor;
    tiling.append(bbox.childNodes[0]);
    this.defs.append(tiling);
    restituisci `url(#${tilingId})`;
  }
  _makeShadingPattern(argomenti) {
    se (tipo di argomenti === "stringa") {
      argomenti = this.objs.get(argomenti);
    }
    interruttore (argomenti[0]) {
      caso "RadialAxial":
        const shadingId = `shading${shadingCount++}`;
        const colorStops = args[3];
        lascia gradiente;
        interruttore (argomenti[1]) {
          caso "assiale":
            const point0 = args[4];
            const point1 = args[5];
            gradiente = this.svgFactory.createElement("svg:linearGradient");
            gradient.setAttributeNS(null, "id", shadingId);
            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
            gradiente.setAttributeNS(null, "x1", punto0[0]);
            gradiente.setAttributeNS(null, "y1", punto0[1]);
            gradiente.setAttributeNS(null, "x2", punto1[0]);
            gradiente.setAttributeNS(null, "y2", punto1[1]);
            rottura;
          caso "radiale":
            const focalPoint = args[4];
            const circlePoint = args[5];
            const focalRadius = args[6];
            const circleRadius = args[7];
            gradiente = this.svgFactory.createElement("svg:radialGradient");
            gradient.setAttributeNS(null, "id", shadingId);
            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
            gradiente.setAttributeNS(null, "cx", circlePoint[0]);
            gradiente.setAttributeNS(null, "cy", circlePoint[1]);
            gradient.setAttributeNS(null, "r", circleRadius);
            gradiente.setAttributeNS(null, "fx", focalPoint[0]);
            gradiente.setAttributeNS(null, "fy", focalPoint[1]);
            gradient.setAttributeNS(null, "fr", focalRadius);
            rottura;
          predefinito:
            lancia un nuovo errore(`Tipo radiale assiale sconosciuto: ${args[1]}`);
        }
        per (const colorStop di colorStops) {
          const stop = this.svgFactory.createElement("svg:stop");
          stop.setAttributeNS(null, "offset", colorStop[0]);
          stop.setAttributeNS(null, "stop-color", colorStop[1]);
          gradiente.append(stop);
        }
        this.defs.append(gradiente);
        restituisci `url(#${shadingId})`;
      caso "Mesh":
        (0, _util.warn)("Modello Mesh non implementato");
        restituisci null;
      caso "Fintizio":
        restituisci "hotpink";
      predefinito:
        genera un nuovo errore (`Tipo IR sconosciuto: ${args[0]}`);
    }
  }
  setDash(dashArray, dashPhase) {
    this.current.dashArray = dashArray;
    this.current.dashPhase = dashPhase;
  }
  constructPath(ops, args) {
    const corrente = this.current;
    lascia x = corrente.x,
      y = corrente.y;
    lascia d = [];
    sia j = 0;
    per (const op di ops) {
      interruttore (op | 0) {
        caso _util.OPS.rectangle:
          x = argomenti[j++];
          y = argomenti[j++];
          larghezza costante = argomenti[j++];
          altezza costante = argomenti[j++];
          const xw = x + larghezza;
          const yh = y + altezza;
          d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
          rottura;
        caso _util.OPS.moveTo:
          x = argomenti[j++];
          y = argomenti[j++];
          d.push("M", pf(x), pf(y));
          rottura;
        caso _util.OPS.lineTo:
          x = argomenti[j++];
          y = argomenti[j++];
          d.push("L", pf(x), pf(y));
          rottura;
        caso _util.OPS.curveTo:
          x = argomenti[j + 4];
          y = argomenti[j + 5];
          d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
          j += 6;
          rottura;
        caso _util.OPS.curveTo2:
          d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
          x = argomenti[j + 2];
          y = argomenti[j + 3];
          j += 4;
          rottura;
        caso _util.OPS.curveTo3:
          x = argomenti[j + 2];
          y = argomenti[j + 3];
          d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
          j += 4;
          rottura;
        caso _util.OPS.closePath:
          d.push("Z");
          rottura;
      }
    }
    d = d.join(" ");
    se (percorso corrente e lunghezza operazioni > 0 e operazioni[0] !== _util.OPS.rettangolo e operazioni[0] !== _util.OPS.sposta in) {
      d = current.path.getAttributeNS(null, "d") + d;
    } altro {
      percorso.corrente = this.svgFactory.createElement("svg:percorso");
      this._ensureTransformGroup().append(current.path);
    }
    current.path.setAttributeNS(null, "d", d);
    current.path.setAttributeNS(null, "riempi", "nessuno");
    elemento corrente = percorso corrente;
    corrente.impostaPuntoCorrente(x, y);
  }
  endPath() {
    const corrente = this.current;
    percorso corrente = null;
    se (!this.pendingClip) {
      ritorno;
    }
    se (!elemento.corrente) {
      this.pendingClip = null;
      ritorno;
    }
    const clipId = `clippath${clipCount++}`;
    const clipPath = this.svgFactory.createElement("svg:clipPath");
    clipPath.setAttributeNS(null, "id", clipId);
    clipPath.setAttributeNS(null, "trasforma", pm(this.transformMatrix));
    const clipElement = current.element.cloneNode(true);
    se (this.pendingClip === "evenodd") {
      clipElement.setAttributeNS(null, "clip-rule", "evenodd");
    } altro {
      clipElement.setAttributeNS(null, "regola-clip", "nonzero");
    }
    this.pendingClip = null;
    clipPath.append(clipElement);
    this.defs.append(clipPath);
    se (current.activeClipUrl) {
      current.clipGroup = null;
      per (const prev di this.extraStack) {
        prev.clipGroup = null;
      }
      clipPath.setAttributeNS(null, "percorso-clip", current.activeClipUrl);
    }
    current.activeClipUrl = `url(#${clipId})`;
    questo.tgrp = null;
  }
  clip(tipo) {
    this.pendingClip = tipo;
  }
  closePath() {
    const corrente = this.current;
    se (percorso corrente) {
      const d = `${current.path.getAttributeNS(null, "d")}Z`;
      current.path.setAttributeNS(null, "d", d);
    }
  }
  setLeading(principale) {
    questo.corrente.principale = -principale;
  }
  setTextRise(textRise) {
    this.current.textRise = textRise;
  }
  setTextRenderingMode(textRenderingMode) {
    this.current.textRenderingMode = textRenderingMode;
  }
  setHScale(scala) {
    this.current.textHScale = scala / 100;
  }
  setRenderingIntent(intento) {}
  setFlatness(piattezza) {}
  setGState(stati) {
    per (const [chiave, valore] degli stati) {
      interruttore (chiave) {
        caso "LW":
          this.setLineWidth(valore);
          rottura;
        caso "LC":
          this.setLineCap(valore);
          rottura;
        caso "LJ":
          this.setLineJoin(valore);
          rottura;
        caso "ML":
          this.setMiterLimit(valore);
          rottura;
        caso "D":
          this.setDash(valore[0], valore[1]);
          rottura;
        caso "RI":
          this.setRenderingIntent(valore);
          rottura;
        caso "FL":
          this.setFlatness(valore);
          rottura;
        caso "Font":
          this.setFont(valore);
          rottura;
        caso "CA":
          this.setStrokeAlpha(valore);
          rottura;
        caso "ca":
          this.setFillAlpha(valore);
          rottura;
        predefinito:
          (0, _util.warn)(`Operatore di stato grafico non implementato ${key}`);
          rottura;
      }
    }
  }
  riempire() {
    const corrente = this.current;
    se (elemento corrente) {
      current.element.setAttributeNS(null, "riempimento", current.fillColor);
      current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
      questo.endPath();
    }
  }
  colpo() {
    const corrente = this.current;
    se (elemento corrente) {
      this._setStrokeAttributes(current.element);
      current.element.setAttributeNS(null, "riempi", "nessuno");
      questo.endPath();
    }
  }
  _setStrokeAttributes(elemento, lineWidthScale = 1) {
    const corrente = this.current;
    lascia che dashArray = current.dashArray;
    se (lineWidthScale !== 1 && dashArray.length > 0) {
      dashArray = dashArray.map(funzione (valore) {
        restituisci lineWidthScale * valore;
      });
    }
    element.setAttributeNS(null, "stroke", current.strokeColor);
    element.setAttributeNS(null, "opacità-tratto", current.strokeAlpha);
    element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
    element.setAttributeNS(null, "stroke-linecap", current.lineCap);
    element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
    element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
    element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
    element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
  }
  eoFill() {
    this.current.element?.setAttributeNS(null, "fill-rule", "evenodd");
    questo.riempi();
  }
  fillStroke() {
    questo.tratto();
    questo.riempi();
  }
  eoFillStroke() {
    this.current.element?.setAttributeNS(null, "fill-rule", "evenodd");
    questo.fillStroke();
  }
  chiudiStroke() {
    questo.closePath();
    questo.tratto();
  }
  chiudiRiempiTratto() {
    questo.closePath();
    questo.fillStroke();
  }
  closeEOFillStroke() {
    questo.closePath();
    this.eoFillStroke();
  }
  paintSolidColorImageMask() {
    const rect = this.svgFactory.createElement("svg:rect");
    rect.setAttributeNS(null, "x", "0");
    rect.setAttributeNS(null, "y", "0");
    rect.setAttributeNS(null, "larghezza", "1px");
    rect.setAttributeNS(null, "altezza", "1px");
    rect.setAttributeNS(null, "riempi", this.current.fillColor);
    this._ensureTransformGroup().append(rect);
  }
  paintImageXObject(objId) {
    const imgData = this.getObject(objId);
    se (!imgData) {
      (0, _util.warn)(`L'immagine dipendente con ID oggetto ${objId} non è ancora pronta`);
      ritorno;
    }
    this.paintInlineImageXObject(imgData);
  }
  paintInlineImageXObject(imgData, maschera) {
    const width = imgData.width;
    altezza costante = imgData.height;
    const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
    const cliprect = this.svgFactory.createElement("svg:rect");
    cliprect.setAttributeNS(null, "x", "0");
    cliprect.setAttributeNS(null, "y", "0");
    cliprect.setAttributeNS(null, "larghezza", pf(larghezza));
    cliprect.setAttributeNS(null, "altezza", pf(altezza));
    questo.elemento.corrente = cliprect;
    this.clip("nonzero");
    const imgEl = this.svgFactory.createElement("svg:immagine");
    imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
    imgEl.setAttributeNS(null, "x", "0");
    imgEl.setAttributeNS(null, "y", pf(-altezza));
    imgEl.setAttributeNS(null, "larghezza", pf(larghezza) + "px");
    imgEl.setAttributeNS(null, "altezza", pf(altezza) + "px");
    imgEl.setAttributeNS(null, "trasforma", `scala(${pf(1 / larghezza)} ${pf(-1 / altezza)})`);
    se (maschera) {
      maschera.append(imgEl);
    } altro {
      this._ensureTransformGroup().append(imgEl);
    }
  }
  paintImageMaskXObject(img) {
    const imgData = this.getObject(img.data, img);
    se (imgData.bitmap) {
      (0, _util.warn)("paintImageMaskXObject: il supporto ImageBitmap non è implementato, " + "assicurarsi che il parametro API `isOffscreenCanvasSupported` sia disabilitato.");
      ritorno;
    }
    const corrente = this.current;
    const width = imgData.width;
    altezza costante = imgData.height;
    const fillColor = current.fillColor;
    current.maskId = `mask${maskCount++}`;
    const mask = this.svgFactory.createElement("svg:mask");
    maschera.setAttributeNS(null, "id", current.maskId);
    const rect = this.svgFactory.createElement("svg:rect");
    rect.setAttributeNS(null, "x", "0");
    rect.setAttributeNS(null, "y", "0");
    rect.setAttributeNS(null, "larghezza", pf(larghezza));
    rect.setAttributeNS(null, "altezza", pf(altezza));
    rect.setAttributeNS(null, "riempimento", fillColor);
    rect.setAttributeNS(null, "maschera", `url(#${current.maskId})`);
    this.defs.append(maschera);
    this._ensureTransformGroup().append(rect);
    this.paintInlineImageXObject(imgData, maschera);
  }
  paintFormXObjectBegin(matrice, bbox) {
    se (Array.isArray(matrice) && lunghezza matrice === 6) {
      questo.trasforma(matrice[0], matrice[1], matrice[2], matrice[3], matrice[4], matrice[5]);
    }
    se (bbox) {
      larghezza costante = bbox[2] - bbox[0];
      altezza costante = bbox[3] - bbox[1];
      const cliprect = this.svgFactory.createElement("svg:rect");
      cliprect.setAttributeNS(null, "x", bbox[0]);
      cliprect.setAttributeNS(null, "y", bbox[1]);
      cliprect.setAttributeNS(null, "larghezza", pf(larghezza));
      cliprect.setAttributeNS(null, "altezza", pf(altezza));
      questo.elemento.corrente = cliprect;
      this.clip("nonzero");
      questo.endPath();
    }
  }
  paintFormXObjectEnd() {}
  _inizializza(viewport) {
    const svg = this.svgFactory.create( viewport.width, viewport.height);
    definizioni costanti = this.svgFactory.createElement("svg:defs");
    svg.append(definizioni);
    this.defs = definizioni;
    const rootGroup = this.svgFactory.createElement("svg:g");
    rootGroup.setAttributeNS(null, "trasforma", pm(viewport.transform));
    svg.append(rootGroup);
    this.svg = grupporadice;
    restituisci svg;
  }
  _ensureClipGroup() {
    se (!this.current.clipGroup) {
      const clipGroup = this.svgFactory.createElement("svg:g");
      clipGroup.setAttributeNS(null, "percorso-clip", this.current.activeClipUrl);
      this.svg.append(clipGroup);
      questo.gruppo.clipcorrente = gruppo.clip;
    }
    restituisci questo.current.clipGroup;
  }
  _ensureTransformGroup() {
    se (!this.tgrp) {
      this.tgrp = this.svgFactory.createElement("svg:g");
      this.tgrp.setAttributeNS(null, "trasforma", pm(this.transformMatrix));
      se (this.current.activeClipUrl) {
        this._ensureClipGroup().append(this.tgrp);
      } altro {
        questo.svg.append(questo.tgrp);
      }
    }
    restituisci questo.tgrp;
  }
}
esportazioni.SVGGraphics = SVGGraphics;

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.XfaText = void 0;
classe XfaText {
  testo staticoContenuto(xfa) {
    elementi costanti = [];
    output costante = {
      elementi,
      stili: Object.create(null)
    };
    funzione walk(nodo) {
      se (!nodo) {
        ritorno;
      }
      lascia str = null;
      const nome = node.name;
      se (nome === "#testo") {
        str = nodo.valore;
      } altrimenti se (!XfaText.shouldBuildText(nome)) {
        ritorno;
      } altrimenti se (nodo?.attributi?.textContent) {
        str = node.attributes.textContent;
      } altrimenti se (nodo.valore) {
        str = nodo.valore;
      }
      se (str !== null) {
        elementi.push({
          str
        });
      }
      se (!node.children) {
        ritorno;
      }
      per (figlio costante di node.children) {
        camminare(bambino);
      }
    }
    camminare(xfa);
    restituire l'output;
  }
  static shouldBuildText(nome) {
    return !(name === "textarea" || name === "input" || name === "option" || name === "select");
  }
}
esportazioni.XfaText = XfaText;

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.TextLayerRenderTask = void 0;
esportazioni.renderTextLayer = renderTextLayer;
esportazioni.updateTextLayer = updateTextLayer;
var _util = __w_pdfjs_require__(1);
var _display_utils = __w_pdfjs_require__(6);
const MAX_TEXT_DIVS_TO_RENDER = 100000;
costante DEFAULT_FONT_SIZE = 30;
const DEFAULT_FONT_ASCENT = 0.8;
const ascentCache = new Map();
funzione getCtx(dimensione, isOffscreenCanvasSupported) {
  lascia ctx;
  se (isOffscreenCanvasSupported && _util.FeatureTest.isOffscreenCanvasSupported) {
    ctx = new OffscreenCanvas(dimensione, dimensione).getContext("2d", {
      alfa: falso
    });
  } altro {
    const canvas = document.createElement("canvas");
    larghezza tela = altezza tela = dimensione;
    ctx = canvas.getContext("2d", {
      alfa: falso
    });
  }
  restituisci ctx;
}
funzione getAscent(fontFamily, isOffscreenCanvasSupported) {
  const cachedAscent = ascentCache.get(fontFamily);
  se (cachedAscent) {
    restituisci cachedAscent;
  }
  const ctx = getCtx(DEFAULT_FONT_SIZE, isOffscreenCanvasSupported);
  ctx.font = `${DEFAULT_FONT_SIZE}px ${fontFamily}`;
  metriche costanti = ctx.measureText("");
  lascia che l'ascesa = metrics.fontBoundingBoxAscent;
  lascia discesa = Math.abs(metrics.fontBoundingBoxDescent);
  se (ascesa) {
    rapporto costante = salita / (salita + discesa);
    ascentCache.set(fontFamily, ratio);
    ctx.canvas.width = ctx.canvas.height = 0;
    rapporto di rendimento;
  }
  ctx.strokeStyle = "rosso";
  ctx.clearRect(0, 0, DIMENSIONE_FONT_DEFINITA, DIMENSIONE_FONT_DEFINITA);
  ctx.strokeText("g", 0, 0);
  lascia pixel = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
  discesa = 0;
  per (lascia che i = pixel.lunghezza - 1 - 3; i >= 0; i -= 4) {
    se (pixel[i] > 0) {
      discesa = Math.ceil(i / 4 / DEFAULT_FONT_SIZE);
      rottura;
    }
  }
  ctx.clearRect(0, 0, DIMENSIONE_FONT_DEFINITA, DIMENSIONE_FONT_DEFINITA);
  ctx.strokeText("A", 0, DEFAULT_FONT_SIZE);
  pixel = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
  salita = 0;
  per (lascia che i = 0, ii = pixel.lunghezza; i < ii; i += 4) {
    se (pixel[i] > 0) {
      salita = DEFAULT_FONT_SIZE - Math.floor(i / 4 / DEFAULT_FONT_SIZE);
      rottura;
    }
  }
  ctx.canvas.width = ctx.canvas.height = 0;
  se (ascesa) {
    rapporto costante = salita / (salita + discesa);
    ascentCache.set(fontFamily, ratio);
    rapporto di rendimento;
  }
  ascentCache.set(fontFamily, DEFAULT_FONT_ASCENT);
  restituisci DEFAULT_FONT_ASCENT;
}
funzione appendText(attività, geom, stili) {
  const textDiv = document.createElement("span");
  const textDivProperties = {
    angolo: 0,
    Larghezza tela: 0,
    haTesto: geom.str !== "",
    hasEOL: geom.hasEOL,
    dimensione carattere: 0
  };
  task._textDivs.push(textDiv);
  const tx = _util.Util.transform(task._transform, geom.transform);
  lascia angolo = Math.atan2(tx[1], tx[0]);
  const style = styles[geom.fontName];
  se (stile.verticale) {
    angolo += Math.PI / 2;
  }
  const fontHeight = Math.hypot(tx[2], tx[3]);
  const fontAscent = fontHeight * getAscent(style.fontFamily, task._isOffscreenCanvasSupported);
  lascia a sinistra, in alto;
  se (angolo === 0) {
    sinistra = tx[4];
    top = tx[5] - fontAscent;
  } altro {
    sinistra = tx[4] + fontAscent * Math.sin(angolo);
    top = tx[5] - fontAscent * Math.cos(angolo);
  }
  const scaleFactorStr = "calc(var(--fattore-scala)*";
  const divStyle = textDiv.style;
  se (task._container === task._rootContainer) {
    divStyle.left = `${(100 * left / task._pageWidth).toFixed(2)}%`;
    divStyle.top = `${(100 * top / task._pageHeight).toFixed(2)}%`;
  } altro {
    divStyle.left = `${scaleFactorStr}${left.toFixed(2)}px)`;
    divStyle.top = `${scaleFactorStr}${top.toFixed(2)}px)`;
  }
  divStyle.fontSize = `${scaleFactorStr}${fontHeight.toFixed(2)}px)`;
  divStyle.fontFamily = stile.fontFamily;
  textDivProperties.fontSize = fontHeight;
  textDiv.setAttribute("ruolo", "presentazione");
  textDiv.textContent = geom.str;
  textDiv.dir = geom.dir;
  se (task._fontInspectorEnabled) {
    textDiv.dataset.fontName = geom.fontName;
  }
  se (angolo !== 0) {
    textDivProperties.angle = angolo * (180 / Math.PI);
  }
  lascia shouldScaleText = false;
  se (geom.str.length > 1) {
    shouldScaleText = true;
  } altrimenti se (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
    const absScaleX = Math.abs(geom.transform[0]),
      absScaleY = Math.abs(geom.transform[3]);
    se (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
      shouldScaleText = true;
    }
  }
  se (shouldScaleText) {
    textDivProperties.canvasWidth = style.vertical ? geom.height : geom.width;
  }
  task._textDivProperties.set(textDiv, textDivProperties);
  se (task._isReadableStream) {
    task._layoutText(textDiv);
  }
}
layout della funzione (parametri) {
  costante {
    divisione,
    scala,
    proprietà,
    ctx,
    precedenteFontSize,
    prevFontFamily
  } = parametri;
  costante {
    stile
  } = div;
  lascia trasformare = "";
  se (proprietà.larghezzatela !== 0 e proprietà.hasText) {
    costante {
      famiglia di caratteri
    } = stile;
    costante {
      Larghezzatela,
      dimensione del carattere
    } = proprietà;
    se (prevFontSize !== fontSize || prevFontFamily !== fontFamily) {
      ctx.font = `${fontSize * scala}px ${fontFamily}`;
      params.prevFontSize = fontSize;
      params.prevFontFamily = fontFamily;
    }
    costante {
      larghezza
    } = ctx.measureText(div.textContent);
    se (larghezza > 0) {
      trasforma = `scaleX(${canvasWidth * scala / larghezza})`;
    }
  }
  se (proprietà.angolo !== 0) {
    trasforma = `ruota(${properties.angle}deg) ${trasforma}`;
  }
  se (lunghezza di trasformazione > 0) {
    stile.trasformazione = trasforma;
  }
}
funzione render(attività) {
  se (attività._annullata) {
    ritorno;
  }
  const textDivs = task._textDivs;
  const capacità = task._capacità;
  const textDivsLength = textDivs.length;
  se (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
    capacità.risolvi();
    ritorno;
  }
  se (!task._isReadableStream) {
    per (const textDiv di textDivs) {
      task._layoutText(textDiv);
    }
  }
  capacità.risolvi();
}
classe TextLayerRenderTask {
  costruttore({
    testoContenutoOrigine,
    contenitore,
    finestra,
    textDivs,
    textDivProperties,
    textContentItemsStr,
    èOffscreenCanvasSupported
  }) {
    this._textContentSource = textContentSource;
    this._isReadableStream = textContentSource instanceof ReadableStream;
    questo._contenitore = questo._rootContainer = contenitore;
    questo._textDivs = textDivs || [];
    this._textContentItemsStr = textContentItemsStr || [];
    this._isOffscreenCanvasSupported = isOffscreenCanvasSupported;
    this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
    questo._lettore = null;
    this._textDivProperties = textDivProperties || new WeakMap();
    this._canceled = false;
    this._capability = new _util.PromiseCapability();
    questo._layoutTextParams = {
      prevFontSize: null,
      prevFontFamily: null,
      div: nullo,
      scala: viewport.scale * (globalThis.devicePixelRatio || 1),
      proprietà: nullo,
      ctx: getCtx(0, isOffscreenCanvasSupported)
    };
    costante {
      Larghezza pagina,
      altezza della pagina,
      paginaX,
      paginaY
    } = viewport.rawDims;
    this._transform = [1, 0, 0, -1, -pageX, pageY + pageHeight];
    this._pageWidth = larghezzapagina;
    this._pageHeight = altezzapagina;
    (0, _display_utils.setLayerDimensions)(contenitore, viewport);
    this._capability.promise.finally(() => {
      this._layoutTextParams = null;
    }).catch(() => {});
  }
  ottieni promessa() {
    restituisci this._capability.promise;
  }
  annulla() {
    this._canceled = true;
    se (questo._lettore) {
      this._reader.cancel(new _util.AbortException("Attività TextLayer annullata.")).catch(() => {});
      questo._lettore = null;
    }
    this._capability.reject(new _util.AbortException("Attività TextLayer annullata."));
  }
  _processItems(elementi, styleCache) {
    per (const elemento di elementi) {
      se (item.str === indefinito) {
        se (item.type === "beginMarkedContentProps" || item.type === "beginMarkedContent") {
          const genitore = this._container;
          this._container = document.createElement("span");
          this._container.classList.add("markedContent");
          se (item.id !== null) {
            this._container.setAttribute("id", `${item.id}`);
          }
          genitore.append(questo._contenitore);
        } altrimenti se (item.type === "endMarkedContent") {
          questo._contenitore = questo._contenitore.parentNode;
        }
        continuare;
      }
      this._textContentItemsStr.push(item.str);
      appendText(questo, elemento, styleCache);
    }
  }
  _layoutText(textDiv) {
    const textDivProperties = this._layoutTextParams.properties = this._textDivProperties.get(textDiv);
    this._layoutTextParams.div = textDiv;
    layout(this._layoutTextParams);
    se (textDivProperties.hasText) {
      this._container.append(textDiv);
    }
    se (textDivProperties.hasEOL) {
      const br = document.createElement("br");
      br.setAttribute("ruolo", "presentazione");
      questo._contenitore.append(br);
    }
  }
  _render() {
    const capability = new _util.PromiseCapability();
    lascia styleCache = Object.create(null);
    se (this._isReadableStream) {
      const pompa = () => {
        this._reader.read().then(({
          valore,
          Fatto
        }) => {
          se (fatto) {
            capacità.risolvi();
            ritorno;
          }
          Oggetto.assegna(styleCache, valore.stili);
          this._processItems(value.items, styleCache);
          pompa();
        }, capacità.rifiuto);
      };
      this._reader = this._textContentSource.getReader();
      pompa();
    } altrimenti se (this._textContentSource) {
      costante {
        elementi,
        stili
      } = this._textContentSource;
      this._processItems(elementi, stili);
      capacità.risolvi();
    } altro {
      throw new Error('Nessun parametro "textContentSource" specificato.');
    }
    capacità.promessa.quindi(() => {
      styleCache = null;
      render(questo);
    }, this._capability.reject);
  }
}
esportazioni.TextLayerRenderTask = TextLayerRenderTask;
funzione renderTextLayer(parametri) {
  se (!params.textContentSource && (params.textContent || params.textContentStream)) {
    (0, _display_utils.deprecated)("I parametri `textContent`/`textContentStream` di TextLayerRender " + "verranno rimossi in futuro, utilizzare invece `textContentSource`.");
    params.textContentSource = params.textContent || params.textContentStream;
  }
  costante {
    contenitore,
    finestra
  } = parametri;
  const style = getComputedStyle(contenitore);
  const visibility = style.getPropertyValue("visibilità");
  const scaleFactor = parseFloat(style.getPropertyValue("--scale-factor"));
  se (visibilità === "visibile" && (!scaleFactor || Math.abs(scaleFactor - viewport.scale) > 1e-5)) {
    console.error("La variabile CSS `--scale-factor` deve essere impostata, " + "sullo stesso valore di `viewport.scale`, " + "sull'elemento `container` stesso o più in alto nel DOM.");
  }
  const task = new TextLayerRenderTask(params);
  compito._render();
  compito di ritorno;
}
funzione updateTextLayer({
  contenitore,
  finestra,
  textDivs,
  textDivProperties,
  èOffscreenCanvasSupported,
  mustRotate = true,
  mustRescale = true
}) {
  se (deveRuotare) {
    (0, _display_utils.setLayerDimensions)(contenitore, {
      rotazione: viewport.rotation
    });
  }
  se (deve essere ridimensionato) {
    const ctx = getCtx(0, isOffscreenCanvasSupported);
    const scale = viewport.scale * (globalThis.devicePixelRatio || 1);
    parametri costanti = {
      prevFontSize: null,
      prevFontFamily: null,
      div: nullo,
      scala,
      proprietà: nullo,
      ctx
    };
    per (const div di textDivs) {
      params.properties = textDivProperties.get(div);
      params.div = div;
      layout(parametri);
    }
  }
}

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.AnnotationEditorLayer = void 0;
var _util = __w_pdfjs_require__(1);
var _editor = __w_pdfjs_require__(4);
var _freetext = __w_pdfjs_require__(28);
var _ink = __w_pdfjs_require__(33);
var _display_utils = __w_pdfjs_require__(6);
var _stamp = __w_pdfjs_require__(34);
classe AnnotationEditorLayer {
  #gestoreaccessibilità;
  #allowClick = false;
  #annotationLayer = null;
  #boundPointerup = this.pointerup.bind(this);
  #boundPointerdown = this.pointerdown.bind(this);
  #editor = nuova mappa();
  #hadPointerDown = false;
  #isCleaningUp = false;
  #isDisabling = false;
  #uiManager;
  static _initialized = false;
  costruttore({
    uiManager,
    indice della pagina,
    divisione,
    responsabile dell'accessibilità,
    annotationLayer,
    finestra,
    l10n
  }) {
    const editorTypes = [_freetext.FreeTextEditor, _ink.InkEditor, _stamp.StampEditor];
    se (!AnnotationEditorLayer._inizializzato) {
      AnnotationEditorLayer._initialized = true;
      per (const editorType di editorTypes) {
        editorType.initialize(l10n);
      }
    }
    uiManager.registerEditorTypes(editorTypes);
    questo.#uiManager = uiManager;
    this.pageIndex = pageIndex;
    questo.div = div;
    questo.#accessibilityManager = accessibilityManager;
    questo.#annotationLayer = annotationLayer;
    this.viewport = finestra di visualizzazione;
    questo.#uiManager.addLayer(questo);
  }
  ottieni isEmpty() {
    restituisci questo.#editors.size === 0;
  }
  updateToolbar(modalità) {
    questo.#uiManager.updateToolbar(modalità);
  }
  updateMode(modalità = questo.#uiManager.getMode()) {
    questo.#pulizia();
    se (modalità === _util.AnnotationEditorType.INK) {
      this.addInkEditorIfNeeded(false);
      questo.disabilitaClick();
    } altro {
      questo.abilitaClicca();
    }
    se (modalità !== _util.AnnotationEditorType.NONE) {
      this.div.classList.toggle("freeTextEditing", mode === _util.AnnotationEditorType.FREETEXT);
      this.div.classList.toggle("inkEditing", mode === _util.AnnotationEditorType.INK);
      this.div.classList.toggle("stampEditing", mode === _util.AnnotationEditorType.STAMP);
      this.div.hidden = false;
    }
  }
  addInkEditorIfNeeded(isCommission) {
    se (!isCommitting && this.#uiManager.getMode() !== _util.AnnotationEditorType.INK) {
      ritorno;
    }
    se (!isCommitting) {
      per (const editor di questo.#editors.values()) {
        se (editor.isEmpty()) {
          editor.setInBackground();
          ritorno;
        }
      }
    }
    const editor = this.#createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, falso);
    editor.setInBackground();
  }
  setEditingState(isEditing) {
    questo.#uiManager.setEditingState(isEditing);
  }
  aggiungiComandi(parametri) {
    questo.#uiManager.addCommands(parametri);
  }
  abilitare() {
    this.div.style.pointerEvents = "auto";
    const annotationElementIds = new Set();
    per (const editor di questo.#editors.values()) {
      editor.enableEditing();
      se (editor.annotationElementId) {
        annotationElementIds.add(editor.annotationElementId);
      }
    }
    se (!questo.#annotationLayer) {
      ritorno;
    }
    const editables = this.#annotationLayer.getEditableAnnotations();
    per (const modificabile di modificabili) {
      modificabile.nascondi();
      se (this.#uiManager.isDeletedAnnotationElement(editable.data.id)) {
        continuare;
      }
      se (annotationElementIds.has(editable.data.id)) {
        continuare;
      }
      const editor = this.deserialize(editable);
      se (!editor) {
        continuare;
      }
      this.addOrRebuild(editor);
      editor.enableEditing();
    }
  }
  disabilita() {
    questo.#isDisabling = true;
    this.div.style.pointerEvents = "nessuno";
    const hiddenAnnotationIds = new Set();
    per (const editor di questo.#editors.values()) {
      editor.disableEditing();
      se (!editor.annotationElementId || editor.serialize() !== null) {
        hiddenAnnotationIds.add(editor.annotationElementId);
        continuare;
      }
      this.getEditableAnnotation(editor.annotationElementId)?.show();
      editor.remove();
    }
    se (questo.#annotationLayer) {
      const editables = this.#annotationLayer.getEditableAnnotations();
      per (const modificabile di modificabili) {
        costante {
          id
        } = dati modificabili;
        se (hiddenAnnotationIds.has(id) || this.#uiManager.isDeletedAnnotationElement(id)) {
          continuare;
        }
        modificabile.mostra();
      }
    }
    questo.#pulizia();
    se (questo.èVuoto) {
      this.div.hidden = true;
    }
    questo.#isDisabling = false;
  }
  getEditableAnnotation(id) {
    restituisci questo.#annotationLayer?.getEditableAnnotation(id) || null;
  }
  setActiveEditor(editor) {
    const currentActive = this.#uiManager.getActive();
    se (currentActive === editor) {
      ritorno;
    }
    questo.#uiManager.setActiveEditor(editor);
  }
  abilitaClick() {
    this.div.addEventListener("puntatoregiù", this.#boundPointerdown);
    this.div.addEventListener("puntatoresu", this.#boundPointerup);
  }
  disabilitaClick() {
    this.div.removeEventListener("puntatoregiù", this.#boundPointerdown);
    this.div.removeEventListener("puntatoresu", this.#boundPointerup);
  }
  allega(editor) {
    questo.#editors.set(editor.id, editor);
    costante {
      annotationElementId
    } = editore;
    se (annotationElementId e questo.#uiManager.isDeletedAnnotationElement(annotationElementId)) {
      questo.#uiManager.removeDeletedAnnotationElement(editor);
    }
  }
  stacca(editor) {
    questo.#editors.delete(editor.id);
    questo.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
    se (!this.#isDisabling && editor.annotationElementId) {
      questo.#uiManager.addDeletedAnnotationElement(editor);
    }
  }
  rimuovi(editor) {
    questo.stacca(editor);
    questo.#uiManager.removeEditor(editor);
    se (editor.div.contains(document.activeElement)) {
      impostaTimeout(() => {
        questo.#uiManager.focusMainContainer();
      }, 0);
    }
    editor.div.remove();
    editor.isAttachedToDOM = false;
    se (!this.#isCleaningUp) {
      this.addInkEditorIfNeeded(false);
    }
  }
  changeParent(editor) {
    se (editor.parent === questo) {
      ritorno;
    }
    se (editor.annotationElementId) {
      questo.#uiManager.addDeletedAnnotationElement(editor.annotationElementId);
      _editor.AnnotationEditor.deleteAnnotationElement(editor);
      editor.annotationElementId = null;
    }
    questo.attach(editor);
    editor.parent?.detach(editor);
    editor.setParent(questo);
    se (editor.div && editor.isAttachedToDOM) {
      editor.div.remove();
      this.div.append(editor.div);
    }
  }
  aggiungi(editor) {
    questo.cambiaParente(editor);
    this.#uiManager.addEditor(editor);
    questo.attach(editor);
    se (!editor.isAttachedToDOM) {
      const div = editor.render();
      questo.div.append(div);
      editor.isAttachedToDOM = true;
    }
    editor.fixAndSetPosition();
    editor.onceAdded();
    questo.#uiManager.addToAnnotationStorage(editor);
  }
  spostaEditorInDOM(editor) {
    se (!editor.isAttachedToDOM) {
      ritorno;
    }
    costante {
      elemento attivo
    } = documento;
    se (editor.div.contains(activeElement)) {
      editor._focusEventsAllowed = false;
      impostaTimeout(() => {
        se (!editor.div.contains(document.activeElement)) {
          editor.div.addEventListener("focusin", () => {
            editor._focusEventsAllowed = true;
          }, {
            una volta: vero
          });
          elementoattivo.focus();
        } altro {
          editor._focusEventsAllowed = true;
        }
      }, 0);
    }
    editor._structTreeParentId = this.#accessibilityManager?.moveElementInDOM(this.div, editor.div, editor.contentDiv, true);
  }
  aggiungi o ricostruisci (editor) {
    se (editor.needsToBeRebuilt()) {
      editor.rebuild();
    } altro {
      questo.aggiungi(editor);
    }
  }
  addUndoableEditor(editor) {
    const cmd = () => editor._uiManager.rebuild(editor);
    const undo = () => {
      editor.remove();
    };
    questo.aggiungiComandi({
      comando,
      disfare,
      mustExec: falso
    });
  }
  getNextId() {
    restituisci questo.#uiManager.getId();
  }
  #createNewEditor(parametri) {
    cambia (questo.#uiManager.getMode()) {
      caso _util.AnnotationEditorType.FREETEXT:
        restituisci nuovo _freetext.FreeTextEditor(params);
      caso _util.AnnotationEditorType.INK:
        restituisci nuovo _ink.InkEditor(parametri);
      caso _util.AnnotationEditorType.STAMP:
        restituisci nuovo _stamp.StampEditor(params);
    }
    restituisci null;
  }
  pasteEditor(modalità, parametri) {
    questo.#uiManager.updateToolbar(modalità);
    questo.#uiManager.updateMode(modalità);
    costante {
      offsetX,
      offsetY
    } = questo.#getCenterPoint();
    const id = this.getNextId();
    const editor = this.#createNewEditor({
      genitore: questo,
      id,
      x: offsetX,
      y: offsetY,
      uiManager: questo.#uiManager,
      è centrato: vero,
      ...parametri
    });
    se (editor) {
      questo.aggiungi(editor);
    }
  }
  deserializzare(dati) {
    switch (data.annotationType ?? data.annotationEditorType) {
      caso _util.AnnotationEditorType.FREETEXT:
        restituisci _freetext.FreeTextEditor.deserialize(dati, questo, questo.#uiManager);
      caso _util.AnnotationEditorType.INK:
        restituisci _ink.InkEditor.deserialize(dati, questo, questo.#uiManager);
      caso _util.AnnotationEditorType.STAMP:
        restituisci _stamp.StampEditor.deserialize(dati, questo, questo.#uiManager);
    }
    restituisci null;
  }
  #createAndAddNewEditor(evento, è centrato) {
    const id = this.getNextId();
    const editor = this.#createNewEditor({
      genitore: questo,
      id,
      x: evento.offsetX,
      y: evento.offsetY,
      uiManager: questo.#uiManager,
      è centrato
    });
    se (editor) {
      questo.aggiungi(editor);
    }
    editor di ritorno;
  }
  #getCenterPoint() {
    costante {
      X,
      e,
      larghezza,
      altezza
    } = this.div.getBoundingClientRect();
    const tlX = Math.max(0, x);
    const tlY = Math.max(0, y);
    const brX = Math.min(window.innerWidth, x + width);
    const brY = Math.min(window.innerHeight, y + altezza);
    const centerX = (tlX + brX) / 2 - x;
    const centerY = (tlY + brY) / 2 - y;
    const [offsetX, offsetY] = this.viewport.rotation % 180 === 0 ? [centerX, centerY] : [centerY, centerX];
    ritorno {
      offsetX,
      offsetY
    };
  }
  aggiungiNuovoEditor() {
    questo.#createAndAddNewEditor(questo.#getCenterPoint(), true);
  }
  setSelected(editor) {
    questo.#uiManager.setSelected(editor);
  }
  toggleSelected(editor) {
    questo.#uiManager.toggleSelected(editor);
  }
  èSelezionato(editor) {
    restituisci questo.#uiManager.isSelected(editor);
  }
  deseleziona(editor) {
    questo.#uiManager.unselect(editor);
  }
  puntatoresu(evento) {
    costante {
      èMac
    } = _util.FeatureTest.platform;
    se (evento.pulsante !== 0 || evento.ctrlKey && isMac) {
      ritorno;
    }
    se (evento.target !== questo.div) {
      ritorno;
    }
    se (!this.#hadPointerDown) {
      ritorno;
    }
    questo.#hadPointerDown = false;
    se (!questo.#consentiClic) {
      questo.#allowClick = true;
      ritorno;
    }
    se (questo.#uiManager.getMode() === _util.AnnotationEditorType.STAMP) {
      questo.#uiManager.unselectAll();
      ritorno;
    }
    questo.#createAndAddNewEditor(evento, falso);
  }
  puntatoregiù(evento) {
    se (questo.#hadPointerDown) {
      questo.#hadPointerDown = false;
      ritorno;
    }
    costante {
      èMac
    } = _util.FeatureTest.platform;
    se (evento.pulsante !== 0 || evento.ctrlKey && isMac) {
      ritorno;
    }
    se (evento.target !== questo.div) {
      ritorno;
    }
    questo.#hadPointerDown = true;
    const editor = this.#uiManager.getActive();
    questo.#allowClick = !editor || editor.isEmpty();
  }
  findNewParent(editor, x, y) {
    const layer = this.#uiManager.findParent(x, y);
    se (strato === null || strato === questo) {
      restituisci falso;
    }
    layer.changeParent(editor);
    restituisci vero;
  }
  distruggere() {
    se (questo.#uiManager.getActive()?.parent === questo) {
      questo.#uiManager.commitOrRemove();
      questo.#uiManager.setActiveEditor(null);
    }
    per (const editor di questo.#editors.values()) {
      questo.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
      editor.setParent(null);
      editor.isAttachedToDOM = false;
      editor.div.remove();
    }
    questo.div = null;
    questo.#editori.chiaro();
    questo.#uiManager.removeLayer(questo);
  }
  #ripulire() {
    questo.#isCleaningUp = true;
    per (const editor di questo.#editors.values()) {
      se (editor.isEmpty()) {
        editor.remove();
      }
    }
    questo.#isCleaningUp = false;
  }
  rendere({
    finestra
  }) {
    this.viewport = finestra di visualizzazione;
    (0, _display_utils.setLayerDimensions)(this.div, viewport);
    per (const editor di this.#uiManager.getEditors(this.pageIndex)) {
      questo.aggiungi(editor);
    }
    questo.updateMode();
  }
  aggiornamento({
    finestra
  }) {
    questo.#uiManager.commitOrRemove();
    this.viewport = finestra di visualizzazione;
    (0, _display_utils.setLayerDimensions)(this.div, {
      rotazione: viewport.rotation
    });
    questo.updateMode();
  }
  ottieni pageDimensions() {
    costante {
      Larghezza pagina,
      altezza della pagina
    } = this.viewport.rawDims;
    restituisci [larghezzapagina, altezzapagina];
  }
}
esportazioni.AnnotationEditorLayer = AnnotationEditorLayer;

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.FreeTextEditor = void 0;
var _util = __w_pdfjs_require__(1);
var _tools = __w_pdfjs_require__(5);
var _editor = __w_pdfjs_require__(4);
var _annotation_layer = __w_pdfjs_require__(29);
classe FreeTextEditor estende _editor.AnnotationEditor {
  #boundEditorDivBlur = this.editorDivBlur.bind(this);
  #boundEditorDivFocus = this.editorDivFocus.bind(this);
  #boundEditorDivInput = this.editorDivInput.bind(this);
  #boundEditorDivKeydown = this.editorDivKeydown.bind(this);
  #colore;
  #contenuto = "";
  #editorDivId = `${this.id}-editor`;
  #dimensionecarattere;
  #initialData = null;
  statico _freeTextDefaultContent = "";
  static _internalPadding = 0;
  statico _defaultColor = null;
  statico _defaultFontSize = 10;
  statico ottieni _keyboardManager() {
    const proto = FreeTextEditor.prototype;
    const arrowChecker = self => self.isEmpty();
    const small = _tools.AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = _tools.AnnotationEditorUIManager.TRANSLATE_BIG;
    return (0, _util.shadow)(this, "_keyboardManager", new _tools.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], proto.commitOrRemove, {
      bolle: vero
    }], [["ctrl+Invio", "mac+meta+Invio", "Esc", "mac+Esc"], proto.commitOrRemove], [["FrecciaSinistra", "mac+FrecciaSinistra"], proto._translateEmpty, {
      argomenti: [-piccolo, 0],
      verificatore: arrowChecker
    }], [["ctrl+freccia sinistra", "mac+maiusc+freccia sinistra"], proto._translateEmpty, {
      argomenti: [-grande, 0],
      verificatore: arrowChecker
    }], [["Freccia destra", "mac+Freccia destra"], proto._translateEmpty, {
      argomenti: [piccolo, 0],
      verificatore: arrowChecker
    }], [["ctrl+freccia destra", "mac+shift+freccia destra"], proto._translateEmpty, {
      argomenti: [grande, 0],
      verificatore: arrowChecker
    }], [["Freccia su", "mac+Freccia su"], proto._translateEmpty, {
      argomenti: [0, -piccolo],
      verificatore: arrowChecker
    }], [["ctrl+Freccia su", "mac+shift+Freccia su"], proto._translateEmpty, {
      argomenti: [0, -grande],
      verificatore: arrowChecker
    }], [["FrecciaGiù", "mac+FrecciaGiù"], proto._translateEmpty, {
      argomenti: [0, piccolo],
      verificatore: arrowChecker
    }], [["ctrl+freccia giù", "mac+shift+freccia giù"], proto._translateEmpty, {
      argomenti: [0, grande],
      verificatore: arrowChecker
    }]]));
  }
  static _type = "testo libero";
  costruttore(parametri) {
    super({
      ...parametri,
      nome: "freeTextEditor"
    });
    questo.#colore = params.color || FreeTextEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor;
    questo.#fontSize = params.fontSize || FreeTextEditor._defaultFontSize;
  }
  inizializzazione statica (l10n) {
    _editor.AnnotationEditor.initialize(l10n, {
      stringhe: ["free_text2_default_content", "editor_free_text2_aria_label"]
    });
    stile const = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(style.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(tipo, valore) {
    interruttore (tipo) {
      caso _util.AnnotationEditorParamsType.FREETEXT_SIZE:
        FreeTextEditor._defaultFontSize = valore;
        rottura;
      caso _util.AnnotationEditorParamsType.FREETEXT_COLOR:
        FreeTextEditor._defaultColor = valore;
        rottura;
    }
  }
  updateParams(tipo, valore) {
    interruttore (tipo) {
      caso _util.AnnotationEditorParamsType.FREETEXT_SIZE:
        questo.#updateFontSize(valore);
        rottura;
      caso _util.AnnotationEditorParamsType.FREETEXT_COLOR:
        questo.#updateColor(valore);
        rottura;
    }
  }
  statico ottieni defaultPropertiesToUpdate() {
    restituisci [[_util.AnnotationEditorParamsType.FREETEXT_SIZE, FreeTextEditor._defaultFontSize], [_util.AnnotationEditorParamsType.FREETEXT_COLOR, FreeTextEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor]];
  }
  ottieni propertiesToUpdate() {
    restituisci [[_util.AnnotationEditorParamsType.FREETEXT_SIZE, questo.#fontSize], [_util.AnnotationEditorParamsType.FREETEXT_COLOR, questo.#color]];
  }
  #updateFontSize(dimensionecarattere) {
    const setFontsize = dimensione => {
      this.editorDiv.style.fontSize = `calc(${size}px * var(--scale-factor))`;
      this.translate(0, -(size - this.#fontSize) * this.parentScale);
      questo.#fontSize = dimensione;
      questo.#setEditorDimensions();
    };
    const savedFontsize = this.#fontSize;
    questo.aggiungiComandi({
      comando: () => {
        impostaDimensioneFonte(DimensioneFonte);
      },
      annulla: () => {
        setFontsize(savedFontsize);
      },
      mustExec: vero,
      tipo: _util.AnnotationEditorParamsType.FREETEXT_SIZE,
      sovrascriviSeSameType: vero,
      keepUndo: vero
    });
  }
  #updateColor(colore) {
    const savedColor = this.#color;
    questo.aggiungiComandi({
      comando: () => {
        questo.#colore = questo.editorDiv.style.colore = colore;
      },
      annulla: () => {
        questo.#colore = questo.editorDiv.style.colore = salvatoColore;
      },
      mustExec: vero,
      tipo: _util.AnnotationEditorParamsType.FREETEXT_COLOR,
      sovrascriviSeSameType: vero,
      keepUndo: vero
    });
  }
  _traduciVuoto(x, y) {
    this._uiManager.translateSelectedEditors(x, y, true);
  }
  getInitialTranslation() {
    const scale = this.parentScale;
    restituisci [-FreeTextEditor._internalPadding * scala, -(FreeTextEditor._internalPadding + this.#fontSize) * scala];
  }
  ricostruisci() {
    se (!questo.genitore) {
      ritorno;
    }
    super.ricostruzione();
    se (this.div === null) {
      ritorno;
    }
    se (!this.isAttachedToDOM) {
      questo.genitore.aggiungi(questo);
    }
  }
  enableEditMode() {
    se (this.isInEditMode()) {
      ritorno;
    }
    this.parent.setEditingState(false);
    this.parent.updateToolbar(_util.AnnotationEditorType.FREETEXT);
    super.enableEditMode();
    this.overlayDiv.classList.remove("abilitato");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    this.editorDiv.addEventListener("keydown", this.#boundEditorDivKeydown);
    this.editorDiv.addEventListener("focus", this.#boundEditorDivFocus);
    this.editorDiv.addEventListener("sfocatura", this.#boundEditorDivBlur);
    this.editorDiv.addEventListener("input", this.#boundEditorDivInput);
  }
  disableEditMode() {
    se (!this.isInEditMode()) {
      ritorno;
    }
    this.parent.setEditingState(true);
    super.disableEditMode();
    this.overlayDiv.classList.add("abilitato");
    this.editorDiv.contentEditable = false;
    this.div.setAttribute("aria-activedescendant", this.#editorDivId);
    this._isDraggable = true;
    this.editorDiv.removeEventListener("keydown", this.#boundEditorDivKeydown);
    this.editorDiv.removeEventListener("focus", this.#boundEditorDivFocus);
    this.editorDiv.removeEventListener("sfocatura", this.#boundEditorDivBlur);
    this.editorDiv.removeEventListener("input", this.#boundEditorDivInput);
    questo.div.focus({
      preventScroll: vero
    });
    this.isEditing = false;
    this.parent.div.classList.add("freeTextEditing");
  }
  focusin(evento) {
    se (!this._focusEventsAllowed) {
      ritorno;
    }
    super.focusin(evento);
    se (evento.target !== questo.editorDiv) {
      questo.editorDiv.focus();
    }
  }
  una voltaAggiunto() {
    se (questa larghezza) {
      questo.#cheatInitialRect();
      ritorno;
    }
    questo.abilitaModalitàModifica();
    questo.editorDiv.focus();
    se (this._initialOptions?.isCentered) {
      questo.centro();
    }
    this._initialOptions = null;
  }
  èVuoto() {
    restituisci !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  rimuovi() {
    this.isEditing = false;
    se (questo.genitore) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freeTextEditing");
    }
    super.rimuovi();
  }
  #estraiTesto() {
    const divs = this.editorDiv.getElementsByTagName("div");
    se (lunghezza div === 0) {
      restituisci this.editorDiv.innerText;
    }
    buffer costante = [];
    per (const div di div) {
      buffer.push(div.innerText.replace(/\r\n?|\n/, ""));
    }
    restituisci buffer.join("\n");
  }
  #setEditorDimensions() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    lascia retto;
    se (this.isAttachedToDOM) {
      rect = this.div.getBoundingClientRect();
    } altro {
      costante {
        livellocorrente,
        divisione
      } = questo;
      const savedDisplay = div.style.display;
      div.style.display = "nascosto";
      currentLayer.div.append(this.div);
      rect = div.getBoundingClientRect();
      div.remove();
      div.style.display = savedDisplay;
    }
    se (questa rotazione % 180 === questa rotazione principale % 180) {
      questa.larghezza = larghezza.rett. / larghezza.parente;
      this.height = rect.height / parentHeight;
    } altro {
      questa.larghezza = altezza.rett. / larghezza.parente;
      this.height = rect.width / parentHeight;
    }
    questo.fixAndSetPosition();
  }
  commetti() {
    se (!this.isInEditMode()) {
      ritorno;
    }
    super.commit();
    questo.disableEditMode();
    const savedText = this.#content;
    const newText = this.#content = this.#extractText().trimEnd();
    se (testosalvato === nuovotesto) {
      ritorno;
    }
    const setText = testo => {
      questo.#contenuto = testo;
      se (!testo) {
        questo.rimuovi();
        ritorno;
      }
      questo.#setContent();
      this._uiManager.rebuild(this);
      questo.#setEditorDimensions();
    };
    questo.aggiungiComandi({
      comando: () => {
        setText(nuovoTesto);
      },
      annulla: () => {
        impostaTesto(Testo salvato);
      },
      mustExec: falso
    });
    questo.#setEditorDimensions();
  }
  shouldGetKeyboardEvents() {
    restituisci this.isInEditMode();
  }
  entraInModalitàModifica() {
    questo.abilitaModalitàModifica();
    questo.editorDiv.focus();
  }
  dblclick(evento) {
    questo.enterInEditMode();
  }
  keydown(evento) {
    if (event.target === this.div && event.key === "Invio") {
      questo.enterInEditMode();
      evento.prevenzioneDefault();
    }
  }
  editorDivKeydown(evento) {
    FreeTextEditor._keyboardManager.exec(questo, evento);
  }
  editorDivFocus(evento) {
    this.isEditing = true;
  }
  editorDivBlur(evento) {
    this.isEditing = false;
  }
  editorDivInput(evento) {
    this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
  }
  disabilitaModifica() {
    this.editorDiv.setAttribute("ruolo", "commento");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  abilitaModifica() {
    this.editorDiv.setAttribute("ruolo", "casella di testo");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  render() {
    se (questo.div) {
      restituisci questo.div;
    }
    lascia baseX, baseY;
    se (questa larghezza) {
      baseX = questo.x;
      baseY = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "interno";
    this.editorDiv.setAttribute("id", this.#editorDivId);
    questo.abilitaModifica();
    _editor.AnnotationEditor._l10nPromise.get("editor_free_text2_aria_label").then(msg => this.editorDiv?.setAttribute("aria-label", msg));
    _editor.AnnotationEditor._l10nPromise.get("free_text2_default_content").then(msg => this.editorDiv?.setAttribute("default-content", msg));
    this.editorDiv.contentEditable = true;
    costante {
      stile
    } = this.editorDiv;
    style.fontSize = `calc(${this.#fontSize}px * var(--scale-factor))`;
    stile.colore = questo.#colore;
    questo.div.append(questo.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("sovrapposizione", "abilitato");
    questo.div.append(questo.overlayDiv);
    (0, _tools.bindEvents)(this, this.div, ["dblclick", "keydown"]);
    se (questa larghezza) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      se (this.annotationElementId) {
        costante {
          posizione
        } = questo.#datiiniziali;
        lascia [tx, ty] = this.getInitialTranslation();
        [tx, ty] = this.pageTranslationToScreen(tx, ty);
        const [larghezzapagina, altezzapagina] = this.pageDimensions;
        const [paginaX, paginaY] = this.pageTranslation;
        lascia posX, posY;
        interruttore (questa rotazione) {
          caso 0:
            posX = baseX + (posizione[0] - paginaX) / larghezzapagina;
            posY = baseY + this.height - (posizione[1] - paginaY) / altezzapagina;
            rottura;
          caso 90:
            posX = baseX + (posizione[0] - paginaX) / larghezzapagina;
            posY = baseY - (posizione[1] - paginaY) / altezzapagina;
            [tx, tà] = [tà, -tx];
            rottura;
          caso 180:
            posX = baseX - this.width + (posizione[0] - paginaX) / larghezzapagina;
            posY = baseY - (posizione[1] - paginaY) / altezzapagina;
            [tx, tà] = [-tx, -tà];
            rottura;
          caso 270:
            posX = baseX + (posizione[0] - paginaX - this.height * pageHeight) / pageWidth;
            posY = baseY + (posizione[1] - paginaY - questa.larghezza * larghezzapagina) / altezzapagina;
            [tx, tà] = [-tà, tx];
            rottura;
        }
        this.setAt(posX * parentWidth, posY * parentHeight, tx, ty);
      } altro {
        this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
      }
      questo.#setContent();
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } altro {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    restituisci questo.div;
  }
  #impostaContenuto() {
    this.editorDiv.replaceChildren();
    se (!questo.#contenuto) {
      ritorno;
    }
    per (linea costante di questo.#content.split("\n")) {
      const div = document.createElement("div");
      div.append(linea ? document.createTextNode(linea) : document.createElement("br"));
      this.editorDiv.append(div);
    }
  }
  ottenere contentDiv() {
    restituisci questo.editorDiv;
  }
  deserialize statico (dati, genitore, uiManager) {
    lascia che initialData = null;
    se (istanza di dati di _annotation_layer.FreeTextAnnotationElement) {
      costante {
        dati: {
          Dati di aspetto predefiniti: {
            dimensione del carattere,
            colore del carattere
          },
          dritto,
          rotazione,
          id
        },
        testoContenuto,
        posizione del testo,
        genitore: {
          pagina: {
            numero di pagina
          }
        }
      } = dati;
      se (!textContent || textContent.length === 0) {
        restituisci null;
      }
      datiiniziali = dati = {
        annotationType: _util.AnnotationEditorType.FREETEXT,
        colore: Array.from(fontColor),
        dimensione del carattere,
        valore: textContent.join("\n"),
        posizione: posizione del testo,
        pageIndex: pageNumber - 1,
        dritto,
        rotazione,
        id,
        cancellato: falso
      };
    }
    const editor = super.deserialize(data, parent, uiManager);
    editor.#fontSize = dati.fontSize;
    editor.#color = _util.Util.makeHexColor(...data.color);
    editor.#content = data.value;
    editor.annotationElementId = data.id || null;
    editor.#initialData = initialData;
    editor di ritorno;
  }
  serialize(isForCopying = false) {
    se (questo.èVuoto()) {
      restituisci null;
    }
    se (questo.eliminato) {
      ritorno {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        cancellato: vero
      };
    }
    const padding = FreeTextEditor._internalPadding * this.parentScale;
    const rect = this.getRect(imbottitura, imbottitura);
    const color = _editor.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#color);
    const serializzato = {
      annotationType: _util.AnnotationEditorType.FREETEXT,
      colore,
      fontSize: questo.#fontSize,
      valore: questo.#contenuto,
      pageIndex: this.pageIndex,
      dritto,
      rotazione: questa.rotazione,
      structTreeParentId: this._structTreeParentId
    };
    se (èPerCopiare) {
      restituisci serializzato;
    }
    se (this.annotationElementId && !this.#hasElementChanged(serializzato)) {
      restituisci null;
    }
    serialized.id = this.annotationElementId;
    restituisci serializzato;
  }
  #hasElementChanged(serializzato) {
    costante {
      valore,
      dimensione del carattere,
      colore,
      dritto,
      indice della pagina
    } = questo.#datiiniziali;
    restituisci serialized.value !== valore || serialized.fontSize !== fontSize || serialized.rect.some((x, i) => Math.abs(x - rect[i]) >= 1) || serialized.color.some((c, i) => c !== color[i]) || serialized.pageIndex !== pageIndex;
  }
  #cheatInitialRect(ritardato = falso) {
    se (!this.annotationElementId) {
      ritorno;
    }
    questo.#setEditorDimensions();
    se (!ritardato && (questa.larghezza === 0 || questa.altezza === 0)) {
      setTimeout(() => this.#cheatInitialRect(true), 0);
      ritorno;
    }
    const padding = FreeTextEditor._internalPadding * this.parentScale;
    questo.#initialData.rect = questo.getRect(imbottitura, imbottitura);
  }
}
esportazioni.FreeTextEditor = FreeTextEditor;

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
exports.StampAnnotationElement = exports.InkAnnotationElement = exports.FreeTextAnnotationElement = exports.AnnotationLayer = void 0;
var _util = __w_pdfjs_require__(1);
var _display_utils = __w_pdfjs_require__(6);
var _annotation_storage = __w_pdfjs_require__(3);
var _scripting_utils = __w_pdfjs_require__(30);
var _displayL10n_utils = __w_pdfjs_require__(31);
var _xfa_layer = __w_pdfjs_require__(32);
const DEFAULT_TAB_INDEX = 1000;
costante DEFAULT_FONT_SIZE = 9;
const GetElementsByNameSet = new WeakSet();
funzione getRectDims(rect) {
  ritorno {
    larghezza: rect[2] - rect[0],
    altezza: rect[3] - rect[1]
  };
}
classe AnnotationElementFactory {
  static create(parametri) {
    const sottotipo = parametri.dati.tipoannotazione;
    switch (sottotipo) {
      caso _util.AnnotationType.LINK:
        restituisci nuovo LinkAnnotationElement(parametri);
      caso _util.AnnotationType.TEXT:
        restituisci nuovo TextAnnotationElement(parametri);
      caso _util.AnnotationType.WIDGET:
        const fieldType = parametri.dati.fieldType;
        switch (tipocampo) {
          caso "Tx":
            restituisci nuovo TextWidgetAnnotationElement(parametri);
          caso "Btn":
            se (parametri.dati.pulsanteradio) {
              restituisci nuovo RadioButtonWidgetAnnotationElement(parametri);
            } altrimenti se (parametri.dati.checkBox) {
              restituisci nuovo CheckboxWidgetAnnotationElement(parametri);
            }
            restituisci nuovo PushButtonWidgetAnnotationElement(parametri);
          caso "Ch":
            restituisci nuovo ChoiceWidgetAnnotationElement(parametri);
          caso "Sig":
            restituisci nuovo SignatureWidgetAnnotationElement(parametri);
        }
        restituisci nuovo WidgetAnnotationElement(parametri);
      caso _util.AnnotationType.POPUP:
        restituisci nuovo PopupAnnotationElement(parametri);
      caso _util.AnnotationType.FREETEXT:
        restituisci nuovo FreeTextAnnotationElement(parametri);
      caso _util.AnnotationType.LINE:
        restituisci nuovo LineAnnotationElement(parametri);
      caso _util.AnnotationType.SQUARE:
        restituisci nuovo SquareAnnotationElement(parametri);
      caso _util.AnnotationType.CIRCLE:
        restituisci nuovo CircleAnnotationElement(parametri);
      caso _util.AnnotationType.POLYLINE:
        restituisci nuovo PolylineAnnotationElement(parametri);
      caso _util.AnnotationType.CARET:
        restituisci nuovo CaretAnnotationElement(parametri);
      caso _util.AnnotationType.INK:
        restituisci nuovo InkAnnotationElement(parametri);
      caso _util.AnnotationType.POLYGON:
        restituisci nuovo PolygonAnnotationElement(parametri);
      caso _util.AnnotationType.HIGHLIGHT:
        restituisci nuovo HighlightAnnotationElement(parametri);
      caso _util.AnnotationType.UNDERLINE:
        restituisci nuovo UnderlineAnnotationElement(parametri);
      caso _util.AnnotationType.SQUIGGLY:
        restituisci nuovo SquigglyAnnotationElement(parametri);
      caso _util.AnnotationType.STRIKEOUT:
        restituisci nuovo StrikeOutAnnotationElement(parametri);
      caso _util.AnnotationType.STAMP:
        restituisci nuovo StampAnnotationElement(parametri);
      case _util.AnnotationType.FILEATTACHMENT:
        restituisci nuovo FileAttachmentAnnotationElement(parametri);
      predefinito:
        restituisci nuovo AnnotationElement(parametri);
    }
  }
}
classe AnnotationElement {
  #hasBorder = false;
  costruttore(parametri, {
    isRenderable = falso,
    ignoreBorder = falso,
    createQuadrilaterals = false
  } = {}) {
    this.isRenderable = isRenderable;
    questo.dati = parametri.dati;
    questo.strato = parametri.strato;
    this.linkService = parametri.linkService;
    questo.downloadManager = parametri.downloadManager;
    this.imageResourcesPath = parametri.imageResourcesPath;
    this.renderForms = parametri.renderForms;
    this.svgFactory = parameters.svgFactory;
    this.annotationStorage = parametri.annotationStorage;
    questo.abilitaScripting = parametri.abilitaScripting;
    questo.hasJSActions = parametri.hasJSActions;
    questo._fieldObjects = parametri.fieldObjects;
    questo.genitore = parametri.genitore;
    se (èRenderizzabile) {
      questo.contenitore = questo._createContainer(ignoreBorder);
    }
    se (creaQuadrilateri) {
      this._createQuadrilaterals();
    }
  }
  statico _hasPopupData({
    titoloObj,
    contenutiObj,
    RichText
  }) {
    ritorno !!(titleObj?.str || contentsObj?.str || richText?.str);
  }
  ottieni hasPopupData() {
    restituisci AnnotationElement._hasPopupData(this.data);
  }
  _createContainer(ignoreBorder) {
    costante {
      dati,
      genitore: {
        pagina,
        finestra
      }
    } = questo;
    const contenitore = document.createElement("sezione");
    container.setAttribute("data-annotation-id", data.id);
    se (!(questa istanza di WidgetAnnotationElement)) {
      contenitore.tabIndex = DEFAULT_TAB_INDEX;
    }
    contenitore.stile.zIndex = questo.genitore.zIndex++;
    se (questo.dati.popupRef) {
      container.setAttribute("aria-haspopup", "dialog");
    }
    se (data.noRotate) {
      contenitore.classList.add("norotate");
    }
    costante {
      Larghezza pagina,
      altezza della pagina,
      paginaX,
      paginaY
    } = viewport.rawDims;
    se (!data.rect || questa istanza di PopupAnnotationElement) {
      costante {
        rotazione
      } = dati;
      se (!data.hasOwnCanvas && rotazione !== 0) {
        this.setRotation(rotazione, contenitore);
      }
      restituire il contenitore;
    }
    costante {
      larghezza,
      altezza
    } = getRectDims(data.rect);
    const rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
    se (!ignoreBorder && data.borderStyle.width > 0) {
      contenitore.stile.larghezzadelbordo = `${data.borderStyle.larghezza}px`;
      const horizontalRadius = data.borderStyle.horizontalCornerRadius;
      const verticalRadius = data.borderStyle.verticalCornerRadius;
      if (Raggioorizzontale > 0 || Raggio verticale > 0) {
        const radius = `calc(${horizontalRadius}px * var(--scale-factor)) / calc(${verticalRadius}px * var(--scale-factor))`;
        container.style.borderRadius = raggio;
      } altrimenti se (questa istanza di RadioButtonWidgetAnnotationElement) {
        raggio costante = `calc(${larghezza}px * var(--fattore-scala)) / calc(${altezza}px * var(--fattore-scala))`;
        container.style.borderRadius = raggio;
      }
      cambia (data.borderStyle.style) {
        caso _util.AnnotationBorderStyleType.SOLID:
          container.style.borderStyle = "solid";
          rottura;
        caso _util.AnnotationBorderStyleType.DASHED:
          container.style.borderStyle = "tratteggiato";
          rottura;
        caso _util.AnnotationBorderStyleType.BEVELED:
          (0, _util.warn)("Stile del bordo non implementato: smussato");
          rottura;
        caso _util.AnnotationBorderStyleType.INSET:
          (0, _util.warn)("Stile del bordo non implementato: inserto");
          rottura;
        caso _util.AnnotationBorderStyleType.UNDERLINE:
          container.style.borderBottomStyle = "solid";
          rottura;
        predefinito:
          rottura;
      }
      const borderColor = data.borderColor || null;
      se (coloredelbordo) {
        questo.#hasBorder = true;
        contenitore.stile.coloredibordo = _util.Util.makeHexColor(coloredibordo[0] | 0, coloredibordo[1] | 0, coloredibordo[2] | 0);
      } altro {
        contenitore.stile.larghezzadelbordo = 0;
      }
    }
    container.style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    container.style.top = `${100 * (rect[1] - pageY) / pageHeight}%`;
    costante {
      rotazione
    } = dati;
    se (data.hasOwnCanvas || rotazione === 0) {
      container.style.width = `${100 * larghezza / larghezzapagina}%`;
      container.style.height = `${100 * altezza / altezzapagina}%`;
    } altro {
      this.setRotation(rotazione, contenitore);
    }
    restituire il contenitore;
  }
  setRotation(angolo, contenitore = this.container) {
    se (!questo.dato.rect) {
      ritorno;
    }
    costante {
      Larghezza pagina,
      altezza della pagina
    } = this.parent.viewport.rawDims;
    costante {
      larghezza,
      altezza
    } = getRectDims(this.data.rect);
    lascia elementWidth, elementHeight;
    se (angolo % 180 === 0) {
      elementWidth = 100 * width / pageWidth;
      elementHeight = 100 * altezza / pageHeight;
    } altro {
      elementWidth = 100 * altezza / pageWidth;
      elementHeight = 100 * width / pageHeight;
    }
    larghezza.stile.contenitore = `${larghezzaelemento}%`;
    altezza.stile.contenitore = `${elementHeight}%`;
    container.setAttribute("data-main-rotation", (360 - angolo) % 360);
  }
  ottieni _commonActions() {
    const setColor = (jsName, styleName, event) => {
      const color = event.detail[jsName];
      const colorType = color[0];
      const colorArray = color.slice(1);
      event.target.style[styleName] = _scripting_utils.ColorConverters[`${colorType}_HTML`](colorArray);
      questo.annotazioneStorage.setValue(questo.data.id, {
        [styleName]: _scripting_utils.ColorConverters[`${colorType}_rgb`](colorArray)
      });
    };
    restituisci (0, _util.shadow)(questo, "_commonActions", {
      visualizzazione: evento => {
        costante {
          display
        } = evento.dettaglio;
        const nascosto = visualizza % 2 === 1;
        this.container.style.visibility = hidden ? "nascosto" : "visibile";
        questo.annotazioneStorage.setValue(questo.data.id, {
          noView: nascosto,
          noPrint: visualizza === 1 || visualizza === 2
        });
      },
      stampa: evento => {
        questo.annotazioneStorage.setValue(questo.data.id, {
          noPrint: !evento.dettaglio.stampa
        });
      },
      nascosto: evento => {
        costante {
          nascosto
        } = evento.dettaglio;
        this.container.style.visibility = hidden ? "nascosto" : "visibile";
        questo.annotazioneStorage.setValue(questo.data.id, {
          noPrint: nascosto,
          noView: nascosto
        });
      },
      focus: evento => {
        setTimeout(() => evento.target.focus({
          preventScroll: falso
        }), 0);
      },
      Nome utente: evento => {
        evento.target.title = evento.detail.userName;
      },
      sola lettura: evento => {
        evento.target.disabled = evento.dettaglio.sola lettura;
      },
      richiesto: evento => {
        this._setRequired(evento.target, evento.detail.required);
      },
      bgColor: evento => {
        setColor("bgColor", "backgroundColor", evento);
      },
      fillColor: evento => {
        setColor("fillColor", "backgroundColor", event);
      },
      fgColor: evento => {
        setColor("fgColor", "colore", evento);
      },
      textColor: evento => {
        setColor("textColor", "colore", evento);
      },
      borderColor: evento => {
        setColor("borderColor", "borderColor", evento);
      },
      strokeColor: evento => {
        setColor("strokeColor", "borderColor", evento);
      },
      rotazione: evento => {
        angolo costante = evento.dettaglio.rotazione;
        this.setRotation(angolo);
        questo.annotazioneStorage.setValue(questo.data.id, {
          rotazione: angolo
        });
      }
    });
  }
  _dispatchEventFromSandbox(azioni, jsEvent) {
    const commonActions = this._commonActions;
    per (const nome di Object.keys(jsEvent.detail)) {
      const action = azioni[nome] || azionicomuni[nome];
      azione?.(jsEvent);
    }
  }
  _setDefaultPropertiesFromJS(elemento) {
    se (!this.enableScripting) {
      ritorno;
    }
    const storedData = this.annotationStorage.getRawValue(this.data.id);
    se (!storedData) {
      ritorno;
    }
    const commonActions = this._commonActions;
    per (const [actionName, detail] di Object.entries(storedData)) {
      const action = commonActions[actionName];
      se (azione) {
        const eventProxy = {
          dettaglio: {
            [actionName]: dettaglio
          },
          target: elemento
        };
        azione(eventoProxy);
        elimina storedData[actionName];
      }
    }
  }
  _creaQuadrilaterali() {
    se (!questo.contenitore) {
      ritorno;
    }
    costante {
      Punti quadrupli
    } = questo.dato;
    se (!quadPoints) {
      ritorno;
    }
    const [rectBlX, rectBlY, rectTrX, rectTrY] = this.data.rect;
    se (quadPoints.length === 1) {
      costante [, {
        x: trX,
        y: provare
      }, {
        x: blX,
        y: blY
      }] = quadPoints[0];
      se (rectTrX === trX e rectTrY === trY e rectBlX === blX e rectBlY === blY) {
        ritorno;
      }
    }
    costante {
      stile
    } = questo.contenitore;
    lascia svgBuffer;
    se (questo.#hasBorder) {
      costante {
        colore del bordo,
        Larghezza del bordo
      } = stile;
      stile.borderWidth = 0;
      svgBuffer = ["url('data:image/svg+xml;utf8,", `<svg xmlns="http://www.w3.org/2000/svg"`, ` preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`];
      this.container.classList.add("hasBorder");
    }
    larghezza costante = rectTrX - rectBlX;
    altezza costante = rectTrY - rectBlY;
    costante {
      svgFactory
    } = questo;
    const svg = svgFactory.createElement("svg");
    svg.classList.add("quadrilateriContainer");
    svg.setAttribute("larghezza", 0);
    svg.setAttribute("altezza", 0);
    const defs = svgFactory.createElement("defs");
    svg.append(defs);
    const clipPath = svgFactory.createElement("clipPath");
    const id = `clippath_${this.data.id}`;
    clipPath.setAttribute("id", id);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    defs.append(clipPath);
    per (const [, {
      x: trX,
      y: provare
    }, {
      x: blX,
      y: blY
    }] di quadPoints) {
      const rect = svgFactory.createElement("rect");
      const x = (blX - rectBlX) / larghezza;
      const y = (rectTrY - trY) / altezza;
      const rectWidth = (trX - blX) / larghezza;
      const rectHeight = (trY - blY) / altezza;
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("larghezza", rectWidth);
      rect.setAttribute("altezza", rectHeight);
      clipPath.append(rect);
      svgBuffer?.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}"/>`);
    }
    se (questo.#hasBorder) {
      svgBuffer.push(`</g></svg>')`);
      stile.immagine di sfondo = svgBuffer.join("");
    }
    questo.contenitore.aggiungi(svg);
    questo.contenitore.stile.clipPath = `url(#${id})`;
  }
  _creaPopup() {
    costante {
      contenitore,
      dati
    } = questo;
    container.setAttribute("aria-haspopup", "dialog");
    const popup = new PopupAnnotationElement({
      dati: {
        colore: data.color,
        titleObj: dati.titleObj,
        data di modifica: data.data di modifica,
        contentsObj: dati.contentsObj,
        richText: dati.richText,
        parentRect: data.rect,
        Stile bordo: 0,
        id: `popup_${data.id}`,
        rotazione: dati.rotazione
      },
      genitore: questo.genitore,
      elementi: [questo]
    });
    this.parent.div.append(popup.render());
  }
  render() {
    (0, _util.unreachable)("Metodo astratto `AnnotationElement.render` chiamato");
  }
  _getElementsByName(nome, skipId = null) {
    campi costanti = [];
    se (this._fieldObjects) {
      const fieldObj = this._fieldObjects[nome];
      se (campoObj) {
        per (cost {
          pagina,
          id,
          valori di esportazione
        } di fieldObj) {
          se (pagina === -1) {
            continuare;
          }
          se (id === skipId) {
            continuare;
          }
          const exportValue = typeof exportValues ​​=== "stringa" ? exportValues ​​: null;
          const domElement = document.querySelector(`[data-element-id="${id}"]`);
          se (domElement && !GetElementsByNameSet.has(domElement)) {
            (0, _util.warn)(`_getElementsByName - elemento non consentito: ${id}`);
            continuare;
          }
          campi.push({
            id,
            valore di esportazione,
            domElement
          });
        }
      }
      campi di ritorno;
    }
    per (const domElement di document.getElementsByName(nome)) {
      costante {
        valore di esportazione
      } = domElement;
      const id = domElement.getAttribute("id-elemento-dati");
      se (id === skipId) {
        continuare;
      }
      se (!GetElementsByNameSet.has(domElement)) {
        continuare;
      }
      campi.push({
        id,
        valore di esportazione,
        domElement
      });
    }
    campi di ritorno;
  }
  spettacolo() {
    se (questo.contenitore) {
      questo.contenitore.nascosto = falso;
    }
    questo.popup?.forseMostra();
  }
  nascondere() {
    se (questo.contenitore) {
      questo.contenitore.nascosto = vero;
    }
    questo.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    restituisci questo.contenitore;
  }
  aggiungiEvidenziaArea() {
    const trigger = this.getElementsToTriggerPopup();
    se (Array.isArray(trigger)) {
      per (elemento costante dei trigger) {
        elemento.classList.add("highlightArea");
      }
    } altro {
      triggers.classList.add("highlightArea");
    }
  }
  _editOnDoubleClick() {
    costante {
      annotationEditorType: modalità,
      dati: {
        id: editId
      }
    } = questo;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        fonte: questo,
        modalità,
        ID di modifica
      });
    });
  }
}
classe LinkAnnotationElement estende AnnotationElement {
  costruttore(parametri, opzioni = null) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: !!opzioni?.ignoreBorder,
      createQuadrilaterals: true
    });
    this.isTooltipOnly = parametri.dati.isTooltipOnly;
  }
  render() {
    costante {
      dati,
      linkService
    } = questo;
    const link = document.createElement("a");
    link.setAttribute("id-elemento-dati", data.id);
    lascia che isBound = false;
    se (data.url) {
      linkService.addLinkAttributes(link, data.url, data.newWindow);
      è Limitato = vero;
    } altrimenti se (dati.azione) {
      this._bindNamedAction(link, data.action);
      è Limitato = vero;
    } altrimenti se (data.attachment) {
      this._bindAttachment(link, data.attachment);
      è Limitato = vero;
    } altrimenti se (data.setOCGState) {
      questo.#bindSetOCGState(link, data.setOCGState);
      è Limitato = vero;
    } altrimenti se (data.dest) {
      this._bindLink(link, data.dest);
      è Limitato = vero;
    } altro {
      if (data.actions && (data.actions.Action || data.actions["Mouse su"] || data.actions["Mouse giù"]) && this.enableScripting && this.hasJSActions) {
        this._bindJSAction(link, dati);
        è Limitato = vero;
      }
      se (data.resetForm) {
        this._bindResetFormAction(link, data.resetForm);
        è Limitato = vero;
      } altrimenti se (this.isTooltipOnly && !isBound) {
        this._bindLink(collegamento, "");
        è Limitato = vero;
      }
    }
    this.container.classList.add("linkAnnotation");
    se (è vincolato) {
      questo.contenitore.aggiungi(collegamento);
    }
    restituisci questo.contenitore;
  }
  #setInternalLink() {
    this.container.setAttribute("collegamento-interno-dati", "");
  }
  _bindLink(collegamento, destinazione) {
    link.href = this.linkService.getDestinationHash(destinazione);
    link.onclick = () => {
      se (destinazione) {
        this.linkService.goToDestination(destinazione);
      }
      restituisci falso;
    };
    se (destinazione || destinazione === "") {
      questo.#setInternalLink();
    }
  }
  _bindNamedAction(collegamento, azione) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.linkService.executeNamedAction(azione);
      restituisci falso;
    };
    questo.#setInternalLink();
  }
  _bindAttachment(collegamento, allegato) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.downloadManager?.openOrDownloadData(this.container, attachment.content, attachment.filename);
      restituisci falso;
    };
    questo.#setInternalLink();
  }
  #bindSetOCGState(collegamento, azione) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.linkService.executeSetOCGState(azione);
      restituisci falso;
    };
    questo.#setInternalLink();
  }
  _bindJSAction(collegamento, dati) {
    link.href = this.linkService.getAnchorUrl("");
    const map = new Map([["Azione", "onclick"], ["Mouse su", "onmouseup"], ["Mouse giù", "onmousedown"]]);
    per (const nome di Object.keys(data.actions)) {
      const jsName = map.get(nome);
      se (!jsName) {
        continuare;
      }
      link[nomejs] = () => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          fonte: questo,
          dettaglio: {
            id: data.id,
            nome
          }
        });
        restituisci falso;
      };
    }
    se (!link.onclick) {
      link.onclick = () => falso;
    }
    questo.#setInternalLink();
  }
  _bindResetFormAction(collegamento, resetForm) {
    const otherClickAction = link.onclick;
    se (!altroClickAction) {
      link.href = this.linkService.getAnchorUrl("");
    }
    questo.#setInternalLink();
    se (!this._fieldObjects) {
      (0, _util.warn)(`_bindResetFormAction - azione "resetForm" non supportata, ` + "assicurarsi che sia fornito il parametro `fieldObjects`.");
      se (!altroClickAction) {
        link.onclick = () => falso;
      }
      ritorno;
    }
    link.onclick = () => {
      altraazioneClick?.();
      costante {
        campi: resetFormFields,
        riferimenti: resetFormRefs,
        includere
      } = resetForm;
      const tutti i campi = [];
      se (resetFormFields.length !== 0 || resetFormRefs.length !== 0) {
        const fieldIds = new Set(resetFormRefs);
        per (const fieldName di resetFormFields) {
          const fields = this._fieldObjects[fieldName] || [];
          per (cost {
            id
          } di campi) {
            fieldIds.add(id);
          }
        }
        per (campi costanti di Object.values(this._fieldObjects)) {
          per (const campo di campi) {
            se (fieldIds.has(field.id) === include) {
              allFields.push(campo);
            }
          }
        }
      } altro {
        per (campi costanti di Object.values(this._fieldObjects)) {
          allFields.push(...campi);
        }
      }
      const storage = this.annotationStorage;
      const allIds = [];
      per (campo costante di tutti i campi) {
        costante {
          id
        } = campo;
        tutti gli ID.push(id);
        switch (campo.tipo) {
          caso "testo":
            {
              valore costante = campo.valorepredefinito || "";
              storage.setValue(id, {
                valore
              });
              rottura;
            }
          caso "casella di controllo":
          caso "radiobutton":
            {
              valore costante = campo.valorepredefinito === campo.valoriesportazione;
              storage.setValue(id, {
                valore
              });
              rottura;
            }
          caso "combobox":
          caso "listbox":
            {
              valore costante = campo.valorepredefinito || "";
              storage.setValue(id, {
                valore
              });
              rottura;
            }
          predefinito:
            continuare;
        }
        const domElement = document.querySelector(`[data-element-id="${id}"]`);
        se (!domElement) {
          continuare;
        } altrimenti se (!GetElementsByNameSet.has(domElement)) {
          (0, _util.warn)(`_bindResetFormAction - elemento non consentito: ${id}`);
          continuare;
        }
        domElement.dispatchEvent(nuovo evento("resetform"));
      }
      se (this.enableScripting) {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          fonte: questo,
          dettaglio: {
            id: "app",
            id: tutti gli ID,
            nome: "ResetForm"
          }
        });
      }
      restituisci falso;
    };
  }
}
classe TextAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      isRenderable: vero
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const image = document.createElement("img");
    image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
    image.alt = "[{{type}} Annotazione]";
    image.dataset.l10nId = "text_annotation_type";
    immagine.dataset.l10nArgs = JSON.stringify({
      tipo: questo.nome.dati
    });
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    questo.contenitore.aggiungi(immagine);
    restituisci questo.contenitore;
  }
}
classe WidgetAnnotationElement estende AnnotationElement {
  render() {
    se (questo.dati.testo alternativo) {
      questo.contenitore.titolo = questo.dati.testo alternativo;
    }
    restituisci questo.contenitore;
  }
  showElementAndHideCanvas(elemento) {
    se (this.data.hasOwnCanvas) {
      se (element.previousSibling?.nodeName === "CANVAS") {
        elemento.precedenteSibling.nascosto = vero;
      }
      elemento.nascosto = falso;
    }
  }
  _getKeyModifier(evento) {
    costante {
      èWin,
      èMac
    } = _util.FeatureTest.platform;
    restituisci isWin && event.ctrlKey || isMac && event.metaKey;
  }
  _setEventListener(elemento, elementData, baseName, eventName, valueGetter) {
    se (baseName.includes("mouse")) {
      element.addEventListener(baseName, event => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          fonte: questo,
          dettaglio: {
            id: questo.data.id,
            nome: eventName,
            valore: valueGetter(evento),
            spostamento: evento.shiftKey,
            modificatore: this._getKeyModifier(evento)
          }
        });
      });
    } altro {
      element.addEventListener(baseName, event => {
        se (baseName === "sfocatura") {
          se (!elementData.focused || !event.relatedTarget) {
            ritorno;
          }
          elementData.focused = false;
        } altrimenti se (baseName === "focus") {
          se (elementData.focused) {
            ritorno;
          }
          elementData.focused = true;
        }
        se (!valueGetter) {
          ritorno;
        }
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          fonte: questo,
          dettaglio: {
            id: questo.data.id,
            nome: eventName,
            valore: valueGetter(evento)
          }
        });
      });
    }
  }
  _setEventListeners(elemento, dati dell'elemento, nomi, getter) {
    per (const [baseName, eventName] di nomi) {
      se (nomeevento === "Azione" || questo.dati.azioni?.[nomeevento]) {
        if (eventName === "Focus" || eventName === "Blur") {
          elementData ||= {
            focalizzato: falso
          };
        }
        this._setEventListener(elemento, datielemento, nomebase, nomeevento, getter);
        se (eventName === "Focus" && !this.data.actions?.Blur) {
          this._setEventListener(elemento, elementData, "blur", "Blur", null);
        } else if (eventName === "Sfocatura" && !this.data.actions?.Focus) {
          this._setEventListener(elemento, elementData, "focus", "Focus", null);
        }
      }
    }
  }
  _setBackgroundColor(elemento) {
    const color = this.data.backgroundColor || null;
    element.style.backgroundColor = color === null ? "trasparente" : _util.Util.makeHexColor(color[0], color[1], color[2]);
  }
  _setTextStyle(elemento) {
    const TEXT_ALIGNMENT = ["sinistra", "centro", "destra"];
    costante {
      colore del carattere
    } = questo.dati.datiApparenzaPredefiniti;
    const fontSize = this.data.defaultAppearanceData.fontSize || DEFAULT_FONT_SIZE;
    const style = elemento.stile;
    lascia computedFontSize;
    const DIMENSIONE_BORDO = 2;
    const roundToOneDecimal = x => Math.round(10 * x) / 10;
    se (questo.dati.multilinea) {
      altezza costante = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      const numberOfLines = Math.round(altezza / (_util.LINE_FACTOR * fontSize)) || 1;
      const lineHeight = altezza / numeroRighe;
      computedFontSize = Math.min(fontSize, roundToOneDecimal(lineHeight / _util.LINE_FACTOR));
    } altro {
      altezza costante = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      computedFontSize = Math.min(fontSize, roundToOneDecimal(height / _util.LINE_FACTOR));
    }
    style.fontSize = `calc(${computedFontSize}px * var(--scale-factor))`;
    style.color = _util.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
    se (this.data.textAlignment !== null) {
      style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
    }
  }
  _setRequired(elemento, è obbligatorio) {
    se (è obbligatorio) {
      element.setAttribute("obbligatorio", true);
    } altro {
      elemento.removeAttribute("obbligatorio");
    }
    element.setAttribute("aria-required", isRequired);
  }
}
classe TextWidgetAnnotationElement estende WidgetAnnotationElement {
  costruttore(parametri) {
    const isRenderable = parameters.renderForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
    super(parametri, {
      èRenderizzabile
    });
  }
  setPropertyOnSiblings(base, chiave, valore, chiaveInMemoria) {
    const storage = this.annotationStorage;
    per (elemento costante di this._getElementsByName(base.name, base.id)) {
      se (elemento.domElement) {
        elemento.domElement[chiave] = valore;
      }
      storage.setValue(elemento.id, {
        [keyInStorage]: valore
      });
    }
  }
  render() {
    const storage = this.annotationStorage;
    const id = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    lascia elemento = null;
    se (this.renderForms) {
      const storedData = storage.getValue(id, {
        valore: this.data.fieldValue
      });
      let textContent = storedData.value || "";
      const maxLen = storage.getValue(id, {
        charLimit: this.data.maxLen
      }).charLimit;
      se (maxLen && textContent.length > maxLen) {
        textContent = textContent.slice(0, maxLen);
      }
      lascia fieldFormattedValues ​​= storedData.formattedValue || this.data.textContent?.join("\n") || null;
      se (fieldFormattedValues ​​&& this.data.comb) {
        fieldFormattedValues ​​= fieldFormattedValues.replaceAll(/\s+/g, "");
      }
      const elementData = {
        userValue: textContent,
        formattedValue: fieldFormattedValues,
        lastCommittedValue: null,
        commitKey: 1,
        focalizzato: falso
      };
      se (questo.dati.multilinea) {
        elemento = document.createElement("textarea");
        element.textContent = fieldFormattedValues ​​?? contenutotesto;
        se (this.data.doNotScroll) {
          element.style.overflowY = "nascosto";
        }
      } altro {
        elemento = document.createElement("input");
        elemento.tipo = "testo";
        element.setAttribute("valore", fieldFormattedValues ​​?? textContent);
        se (this.data.doNotScroll) {
          element.style.overflowX = "nascosto";
        }
      }
      se (this.data.hasOwnCanvas) {
        elemento.nascosto = vero;
      }
      GetElementsByNameSet.add(elemento);
      element.setAttribute("id-elemento-dati", id);
      elemento.disabilitato = questo.dati.sola lettura;
      nome.elemento = questo.nome.campo.dati;
      elemento.tabIndex = DEFAULT_TAB_INDEX;
      this._setRequired(elemento, this.data.required);
      se (maxLen) {
        elemento.maxLength = maxLen;
      }
      element.addEventListener("input", evento => {
        storage.setValue(id, {
          valore: evento.valore.destinazione
        });
        this.setPropertyOnSiblings(elemento, "valore", evento.valore di destinazione, "valore");
        elementData.formattedValue = null;
      });
      element.addEventListener("resetform", evento => {
        const defaultValue = this.data.defaultFieldValue ?? "";
        elemento.valore = elementData.valoreutente = valorepredefinito;
        elementData.formattedValue = null;
      });
      lascia blurListener = evento => {
        costante {
          valoreformattato
        } = elementData;
        se (formattedValue !== null && formattedValue !== indefinito) {
          evento.valore.destinazione = valoreformattato;
        }
        evento.target.scrollLeft = 0;
      };
      se (this.enableScripting && this.hasJSActions) {
        element.addEventListener("focus", evento => {
          se (elementData.focused) {
            ritorno;
          }
          costante {
            bersaglio
          } = evento;
          se (elementData.userValue) {
            valore.destinazione = elementData.valore.utente;
          }
          elementData.lastCommittedValue = target.value;
          elementData.commitKey = 1;
          elementData.focused = true;
        });
        element.addEventListener("updatefromsandbox", jsEvent => {
          this.showElementAndHideCanvas(jsEvent.target);
          azioni costanti = {
            valore(evento) {
              elementData.userValue = event.detail.value ?? "";
              storage.setValue(id, {
                valore: elementData.userValue.toString()
              });
              evento.valore.destinazione = elementData.valoreutente;
            },
            formattedValue(evento) {
              costante {
                valoreformattato
              } = evento.dettaglio;
              elementData.formattedValue = formattedValue;
              if (formattedValue !== null && formattedValue !== undefined && event.target !== document.activeElement) {
                evento.valore.destinazione = valoreformattato;
              }
              storage.setValue(id, {
                valoreformattato
              });
            },
            selRange(evento) {
              evento.target.setSelectionRange(...evento.dettaglio.selRange);
            },
            charLimit: evento => {
              costante {
                charLimit
              } = evento.dettaglio;
              costante {
                bersaglio
              } = evento;
              se (charLimit === 0) {
                target.removeAttribute("maxLength");
                ritorno;
              }
              target.setAttribute("maxLength", charLimit);
              lascia valore = elementData.userValue;
              se (!valore || valore.lunghezza <= charLimit) {
                ritorno;
              }
              valore = valore.slice(0, charLimit);
              target.value = elementData.userValue = valore;
              storage.setValue(id, {
                valore
              });
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                fonte: questo,
                dettaglio: {
                  id,
                  nome: "battitura di tasti",
                  valore,
                  willCommit: vero,
                  commitKey: 1,
                  selStart: target.selectionStart,
                  selEnd: target.selectionEnd
                }
              });
            }
          };
          this._dispatchEventFromSandbox(azioni, jsEvent);
        });
        element.addEventListener("keydown", evento => {
          elementData.commitKey = 1;
          lascia commitKey = -1;
          se (evento.chiave === "Escape") {
            commitKey = 0;
          } else if (event.key === "Invio" && !this.data.multiLine) {
            commitKey = 2;
          } altrimenti se (evento.chiave === "Tab") {
            elementData.commitKey = 3;
          }
          se (commitKey === -1) {
            ritorno;
          }
          costante {
            valore
          } = evento.target;
          se (elementData.lastCommittedValue === valore) {
            ritorno;
          }
          elementData.lastCommittedValue = valore;
          elementData.userValue = valore;
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            fonte: questo,
            dettaglio: {
              id,
              nome: "battitura di tasti",
              valore,
              willCommit: vero,
              commitKey,
              selStart: evento.target.selectionStart,
              selEnd: evento.target.selectionEnd
            }
          });
        });
        const _blurListener = blurListener;
        blurListener = null;
        element.addEventListener("sfocatura", evento => {
          se (!elementData.focused || !event.relatedTarget) {
            ritorno;
          }
          elementData.focused = false;
          costante {
            valore
          } = evento.target;
          elementData.userValue = valore;
          se (elementData.lastCommittedValue !== valore) {
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              fonte: questo,
              dettaglio: {
                id,
                nome: "battitura di tasti",
                valore,
                willCommit: vero,
                commitKey: elementData.commitKey,
                selStart: evento.target.selectionStart,
                selEnd: evento.target.selectionEnd
              }
            });
          }
          _blurListener(evento);
        });
        se (questo.dati.azioni?.battitura) {
          element.addEventListener("prima dell'input", evento => {
            elementData.lastCommittedValue = null;
            costante {
              dati,
              bersaglio
            } = evento;
            costante {
              valore,
              selezioneInizio,
              selezioneFine
            } = destinazione;
            lascia che selInizio = inizioselezione,
              selEnd = selezioneEnd;
            switch (evento.inputType) {
              caso "deleteWordBackward":
                {
                  const match = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                  se (corrispondenza) {
                    selStart -= match[0].length;
                  }
                  rottura;
                }
              caso "deleteWordForward":
                {
                  const match = value.substring(selectionStart).match(/^[^\w]*\w*/);
                  se (corrispondenza) {
                    selEnd += match[0].length;
                  }
                  rottura;
                }
              caso "deleteContentBackward":
                se (selezioneInizio === selezioneFine) {
                  selStart -= 1;
                }
                rottura;
              caso "deleteContentForward":
                se (selezioneInizio === selezioneFine) {
                  selEnd += 1;
                }
                rottura;
            }
            evento.prevenzioneDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              fonte: questo,
              dettaglio: {
                id,
                nome: "battitura di tasti",
                valore,
                modifica: dati || "",
                willCommit: falso,
                selStart,
                selEnd
              }
            });
          });
        }
        this._setEventListeners(element, elementData, [["focus", "Focus"], ["blur", "Sfocatura"], ["mousedown", "Mouse giù"], ["mouseenter", "Invio mouse"], ["mouseleave", "Esci mouse"], ["mouseup", "Mouse su"]], event => event.target.value);
      }
      se (blurListener) {
        elemento.addEventListener("blur", blurListener);
      }
      se (this.data.comb) {
        const fieldWidth = this.data.rect[2] - this.data.rect[0];
        const combWidth = fieldWidth / maxLen;
        element.classList.add("pettine");
        element.style.letterSpacing = `calc(${combWidth}px * var(--scale-factor) - 1ch)`;
      }
    } altro {
      elemento = document.createElement("div");
      elemento.textContent = this.data.fieldValue;
      element.style.verticalAlign = "middle";
      element.style.display = "cella-tabella";
    }
    this._setTextStyle(elemento);
    this._setBackgroundColor(elemento);
    this._setDefaultPropertiesFromJS(elemento);
    questo.contenitore.aggiungi(elemento);
    restituisci questo.contenitore;
  }
}
classe SignatureWidgetAnnotationElement estende WidgetAnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      isRenderable: !!parameters.data.hasOwnCanvas
    });
  }
}
classe CheckboxWidgetAnnotationElement estende WidgetAnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      isRenderable: parametri.renderForms
    });
  }
  render() {
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    lascia valore = storage.getValue(id, {
      valore: data.exportValue === data.fieldValue
    }).valore;
    se (tipo di valore === "stringa") {
      valore = valore !== "Spento";
      storage.setValue(id, {
        valore
      });
    }
    this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    elemento costante = document.createElement("input");
    GetElementsByNameSet.add(elemento);
    element.setAttribute("id-elemento-dati", id);
    elemento.disabilitato = dati.sola lettura;
    this._setRequired(elemento, this.data.required);
    element.type = "casella di controllo";
    nome.elemento = nome.campo.dati;
    se (valore) {
      element.setAttribute("selezionato", true);
    }
    element.setAttribute("exportValue", data.exportValue);
    elemento.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("cambia", evento => {
      costante {
        nome,
        controllato
      } = evento.target;
      per (const checkbox di this._getElementsByName(name, id)) {
        const curChecked = checked && checkbox.exportValue === data.exportValue;
        se (checkbox.domElement) {
          checkbox.domElement.checked = curChecked;
        }
        storage.setValue(checkbox.id, {
          valore: curChecked
        });
      }
      storage.setValue(id, {
        valore: selezionato
      });
    });
    element.addEventListener("resetform", evento => {
      const defaultValue = data.defaultFieldValue || "Spento";
      evento.target.controllato = defaultValue === dati.exportValue;
    });
    se (this.enableScripting && this.hasJSActions) {
      element.addEventListener("updatefromsandbox", jsEvent => {
        azioni costanti = {
          valore(evento) {
            event.target.checked = event.detail.value !== "Spento";
            storage.setValue(id, {
              valore: evento.target.controllato
            });
          }
        };
        this._dispatchEventFromSandbox(azioni, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
    }
    this._setBackgroundColor(elemento);
    this._setDefaultPropertiesFromJS(elemento);
    questo.contenitore.aggiungi(elemento);
    restituisci questo.contenitore;
  }
}
class RadioButtonWidgetAnnotationElement estende WidgetAnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      isRenderable: parametri.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    lascia valore = storage.getValue(id, {
      valore: data.fieldValue === data.buttonValue
    }).valore;
    se (tipo di valore === "stringa") {
      valore = valore !== dati.buttonValue;
      storage.setValue(id, {
        valore
      });
    }
    elemento costante = document.createElement("input");
    GetElementsByNameSet.add(elemento);
    element.setAttribute("id-elemento-dati", id);
    elemento.disabilitato = dati.sola lettura;
    this._setRequired(elemento, this.data.required);
    elemento.tipo = "radio";
    nome.elemento = nome.campo.dati;
    se (valore) {
      element.setAttribute("selezionato", true);
    }
    elemento.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("cambia", evento => {
      costante {
        nome,
        controllato
      } = evento.target;
      per (const radio di this._getElementsByName(name, id)) {
        storage.setValue(radio.id, {
          valore: falso
        });
      }
      storage.setValue(id, {
        valore: selezionato
      });
    });
    element.addEventListener("resetform", evento => {
      const defaultValue = data.defaultFieldValue;
      event.target.checked = defaultValue !== null && defaultValue !== undefined && defaultValue === data.buttonValue;
    });
    se (this.enableScripting && this.hasJSActions) {
      const pdfButtonValue = data.buttonValue;
      element.addEventListener("updatefromsandbox", jsEvent => {
        azioni costanti = {
          valore: evento => {
            const checked = pdfButtonValue === event.detail.value;
            per (const radio di this._getElementsByName(event.target.name)) {
              const curChecked = checked && radio.id === id;
              se (radio.domElement) {
                radio.domElement.checked = curChecked;
              }
              storage.setValue(radio.id, {
                valore: curChecked
              });
            }
          }
        };
        this._dispatchEventFromSandbox(azioni, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
    }
    this._setBackgroundColor(elemento);
    this._setDefaultPropertiesFromJS(elemento);
    questo.contenitore.aggiungi(elemento);
    restituisci questo.contenitore;
  }
}
classe PushButtonWidgetAnnotationElement estende LinkAnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      ignoreBorder: parametri.dati.hasAppearance
    });
  }
  render() {
    const contenitore = super.render();
    contenitore.classList.add("buttonWidgetAnnotation", "pushButton");
    se (questo.dati.testo alternativo) {
      contenitore.titolo = questo.dati.testo alternativo;
    }
    const linkElement = container.lastChild;
    se (this.enableScripting && this.hasJSActions && linkElement) {
      this._setDefaultPropertiesFromJS(linkElement);
      linkElement.addEventListener("updatefromsandbox", jsEvent => {
        this._dispatchEventFromSandbox({}, jsEvent);
      });
    }
    restituire il contenitore;
  }
}
classe ChoiceWidgetAnnotationElement estende WidgetAnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      isRenderable: parametri.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const storage = this.annotationStorage;
    const id = this.data.id;
    const storedData = storage.getValue(id, {
      valore: this.data.fieldValue
    });
    const selectElement = document.createElement("select");
    GetElementsByNameSet.add(selectElement);
    selectElement.setAttribute("id-elemento-dati", id);
    selectElement.disabled = this.data.readOnly;
    this._setRequired(selectElement, this.data.required);
    selectElement.name = this.data.fieldName;
    selectElement.tabIndex = DEFAULT_TAB_INDEX;
    lascia addAnEmptyEntry = this.data.combo && this.data.options.length > 0;
    se (!this.data.combo) {
      selectElement.size = this.data.options.length;
      se (this.data.multiSelect) {
        selectElement.multiple = true;
      }
    }
    selectElement.addEventListener("resetform", evento => {
      const defaultValue = this.data.defaultFieldValue;
      per (opzione costante di selectElement.options) {
        opzione.selezionata = opzione.valore === valorepredefinito;
      }
    });
    per (opzione costante di this.data.options) {
      const optionElement = document.createElement("opzione");
      optionElement.textContent = option.displayValue;
      optionElement.value = option.exportValue;
      se (storedData.value.includes(option.exportValue)) {
        optionElement.setAttribute("selezionato", true);
        addAnEmptyEntry = false;
      }
      selectElement.append(optionElement);
    }
    lascia removeEmptyEntry = null;
    se (aggiungiUnaVoceVuota) {
      const noneOptionElement = document.createElement("opzione");
      noneOptionElement.value = " ";
      noneOptionElement.setAttribute("nascosto", true);
      noneOptionElement.setAttribute("selezionato", true);
      selectElement.prepend(noneOptionElement);
      rimuoviVoceVuota = () => {
        noneOptionElement.remove();
        selectElement.removeEventListener("input", removeEmptyEntry);
        removeEmptyEntry = null;
      };
      selectElement.addEventListener("input", removeEmptyEntry);
    }
    const getValue = isExport => {
      const name = isExport ? "value" : "textContent";
      costante {
        opzioni,
        multiplo
      } = selezionaElemento;
      se (!multiplo) {
        restituisci opzioni.selectedIndex === -1 ? null : opzioni[opzioni.selectedIndex][nome];
      }
      restituisci Array.prototype.filter.call(opzioni, opzione => opzione.selezionata).map(opzione => opzione[nome]);
    };
    lascia che i valori selezionati = getValue(false);
    const getItems = evento => {
      const opzioni = evento.target.opzioni;
      restituisci Array.prototype.map.call(opzioni, opzione => {
        ritorno {
          displayValue: opzione.textContent,
          exportValue: opzione.valore
        };
      });
    };
    se (this.enableScripting && this.hasJSActions) {
      selectElement.addEventListener("updatefromsandbox", jsEvent => {
        azioni costanti = {
          valore(evento) {
            rimuoviVoceVuota?.();
            valore costante = evento.dettaglio.valore;
            valori costanti = nuovo Set(Array.isArray(valore) ? valore : [valore]);
            per (opzione costante di selectElement.options) {
              opzione.selezionata = valori.has(opzione.valore);
            }
            storage.setValue(id, {
              valore: getValue(true)
            });
            selectedValues ​​= getValue(false);
          },
          multipleSelection(evento) {
            selectElement.multiple = true;
          },
          rimuovi(evento) {
            const opzioni = selectElement.options;
            indice costante = evento.dettaglio.rimuovi;
            opzioni[indice].selezionato = falso;
            selectElement.remove(indice);
            se (opzioni.lunghezza > 0) {
              const i = Array.prototype.findIndex.call(opzioni, opzione => opzione.selezionata);
              se (i === -1) {
                opzioni[0].selezionato = vero;
              }
            }
            storage.setValue(id, {
              valore: getValue(true),
              elementi: getItems(evento)
            });
            selectedValues ​​= getValue(false);
          },
          clear(evento) {
            mentre (selectElement.length !== 0) {
              selezionaElemento.rimuovi(0);
            }
            storage.setValue(id, {
              valore: nullo,
              elementi: []
            });
            selectedValues ​​= getValue(false);
          },
          inserisci(evento) {
            costante {
              indice,
              valore di visualizzazione,
              valore di esportazione
            } = evento.dettaglio.inserimento;
            const selectChild = selectElement.children[indice];
            const optionElement = document.createElement("opzione");
            optionElement.textContent = displayValue;
            optionElement.value = exportValue;
            se (selezionaFiglio) {
              selectChild.before(optionElement);
            } altro {
              selectElement.append(optionElement);
            }
            storage.setValue(id, {
              valore: getValue(true),
              elementi: getItems(evento)
            });
            selectedValues ​​= getValue(false);
          },
          elementi(evento) {
            costante {
              elementi
            } = evento.dettaglio;
            mentre (selectElement.length !== 0) {
              selezionaElemento.rimuovi(0);
            }
            per (const elemento di elementi) {
              costante {
                valore di visualizzazione,
                valore di esportazione
              } = elemento;
              const optionElement = document.createElement("opzione");
              optionElement.textContent = displayValue;
              optionElement.value = exportValue;
              selectElement.append(optionElement);
            }
            se (selectElement.options.length > 0) {
              selectElement.options[0].selected = true;
            }
            storage.setValue(id, {
              valore: getValue(true),
              elementi: getItems(evento)
            });
            selectedValues ​​= getValue(false);
          },
          indici(evento) {
            const indici = new Set(event.detail.indices);
            per (opzione costante di event.target.options) {
              opzione.selezionata = indices.has(opzione.indice);
            }
            storage.setValue(id, {
              valore: getValue(true)
            });
            selectedValues ​​= getValue(false);
          },
          modificabile(evento) {
            evento.target.disabled = !evento.dettaglio.modificabile;
          }
        };
        this._dispatchEventFromSandbox(azioni, jsEvent);
      });
      selectElement.addEventListener("input", evento => {
        const exportValue = getValue(true);
        storage.setValue(id, {
          valore: exportValue
        });
        evento.prevenzioneDefault();
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          fonte: questo,
          dettaglio: {
            id,
            nome: "battitura di tasti",
            valore: valoriselezionati,
            changeEx: exportValue,
            willCommit: falso,
            commitKey: 1,
            tastoGiù: falso
          }
        });
      });
      this._setEventListeners(selectElement, null, [["focus", "Focus"], ["blur", "Sfocatura"], ["mousedown", "Mouse giù"], ["mouseenter", "Invio mouse"], ["mouseleave", "Esci mouse"], ["mouseup", "Mouse su"], ["input", "Azione"], ["input", "Convalida"]], event => event.target.value);
    } altro {
      selectElement.addEventListener("input", funzione (evento) {
        storage.setValue(id, {
          valore: getValue(true)
        });
      });
    }
    se (questo.data.combo) {
      this._setTextStyle(selectElement);
    } altro {}
    this._setBackgroundColor(selectElement);
    this._setDefaultPropertiesFromJS(selectElement);
    questo.contenitore.append(selectElement);
    restituisci questo.contenitore;
  }
}
classe PopupAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    costante {
      dati,
      elementi
    } = parametri;
    super(parametri, {
      isRenderable: AnnotationElement._hasPopupData(dati)
    });
    this.elements = elementi;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const popup = new PopupElement({
      contenitore: questo.contenitore,
      colore: questo.dati.colore,
      titleObj: questo.dato.titleObj,
      datadimodifica: questo.dato.datadimodifica,
      contentsObj: questo.dati.contentsObj,
      richText: questo.dati.richText,
      rect: questo.dato.rect,
      parentRect: questo.dati.parentRect || null,
      genitore: questo.genitore,
      elementi: questo.elementi,
      aperto: questo.dati.apri
    });
    const elementIds = [];
    per (elemento costante di this.elements) {
      elemento.popup = popup;
      elementIds.push(elemento.data.id);
      elemento.addHighlightArea();
    }
    this.container.setAttribute("aria-controls", elementIds.map(id => `${_util.AnnotationPrefix}${id}`).join(","));
    restituisci questo.contenitore;
  }
}
classe PopupElement {
  #dateTimePromise = null;
  #boundKeyDown = this.#keyDown.bind(this);
  #boundHide = questo.#hide.bind(questo);
  #boundShow = this.#show.bind(this);
  #boundToggle = questo.#toggle.bind(questo);
  #colore = null;
  #contenitore = null;
  #contentsObj = null;
  #elementi = null;
  #genitore = null;
  #parentRect = null;
  #pinned = falso;
  #popup = null;
  #rect = null;
  #richText = null;
  #titleObj = null;
  #wasVisible = false;
  costruttore({
    contenitore,
    colore,
    elementi,
    titoloObj,
    data di modifica,
    contenutiObj,
    RichText,
    genitore,
    dritto,
    parentRect,
    aprire
  }) {
    questo.#contenitore = contenitore;
    questo.#titleObj = titleObj;
    questo.#contentsObj = contentsObj;
    questo.#richText = richText;
    questo.#genitore = genitore;
    questo.#colore = colore;
    questo.#rect = rect;
    questo.#parentRect = parentRect;
    questo.#elementi = elementi;
    const dateObject = _display_utils.PDFDateString.toDateObject(modificationDate);
    se (dateObject) {
      questo.#dateTimePromise = parent.l10n.get("annotation_date_string", {
        data: dateObject.toLocaleDateString(),
        ora: dateObject.toLocaleTimeString()
      });
    }
    this.trigger = elements.flatMap(e => e.getElementsToTriggerPopup());
    per (elemento costante di this.trigger) {
      element.addEventListener("clic", this.#boundToggle);
      element.addEventListener("mouseenter", this.#boundShow);
      element.addEventListener("mouseleave", this.#boundHide);
      element.classList.add("popupTriggerArea");
    }
    per (elemento costante di elementi) {
      element.container?.addEventListener("keydown", this.#boundKeyDown);
    }
    questo.#contenitore.nascosto = vero;
    se (aperto) {
      questo.#toggle();
    }
  }
  render() {
    se (questo.#popup) {
      ritorno;
    }
    costante {
      pagina: {
        visualizzazione
      },
      finestra di visualizzazione: {
        rawDims: {
          Larghezza pagina,
          altezza della pagina,
          paginaX,
          paginaY
        }
      }
    } = questo.#genitore;
    const popup = this.#popup = document.createElement("div");
    popup.className = "popup";
    se (questo.#colore) {
      const baseColor = popup.style.outlineColor = _util.Util.makeHexColor(...this.#color);
      if (CSS.supports("background-color", "color-mix(in srgb, rosso 30%, bianco)")) {
        popup.style.backgroundColor = `color-mix(in srgb, ${baseColor} 30%, bianco)`;
      } altro {
        const BACKGROUND_ENLIGHT = 0.7;
        popup.style.backgroundColor = _util.Util.makeHexColor(...this.#color.map(c => Math.floor(BACKGROUND_ENLIGHT * (255 - c) + c)));
      }
    }
    const header = document.createElement("span");
    header.className = "intestazione";
    const titolo = document.createElement("h1");
    intestazione.append(titolo);
    ({
      dir: titolo.dir,
      str: titolo.testoContenuto
    } = questo.#titleObj);
    popup.append(intestazione);
    se (questo.#dateTimePromise) {
      const modificationDate = document.createElement("span");
      modificationDate.classList.add("popupDate");
      questo.#dateTimePromise.then(localizzato => {
        modificationDate.textContent = localizzato;
      });
      header.append(datadimodifica);
    }
    const contentsObj = this.#contentsObj;
    const richText = this.#richText;
    se (richText?.str && (!contentsObj?.str || contentsObj.str === richText.str)) {
      _xfa_layer.XfaLayer.render({
        xfaHtml: richText.html,
        intento: "richText",
        div: popup
      });
      popup.lastChild.classList.add("richText", "popupContent");
    } altro {
      const contenuti = this._formatContents(contentsObj);
      popup.append(contenuto);
    }
    lascia che useParentRect = !!this.#parentRect;
    lascia rect = usaParentRect ? questo.#parentRect : questo.#rect;
    per (elemento costante di questo.#elementi) {
      se (!rect || _util.Util.intersect(element.data.rect, rect) !== null) {
        rect = elemento.dati.rect;
        useParentRect = true;
        rottura;
      }
    }
    const normalizedRect = _util.Util.normalizeRect([rect[0], view[3] - rect[1] + view[1], rect[2], view[3] - rect[3] + view[1]]);
    const SPAZIO_ORIZZONTALE_DOPO_ANNOTAZIONE = 5;
    const parentWidth = useParentRect ? rect[2] - rect[0] + HORIZONTAL_SPACE_AFTER_ANNOTATION : 0;
    const popupLeft = normalizedRect[0] + parentWidth;
    const popupTop = normalizedRect[1];
    costante {
      stile
    } = questo.#contenitore;
    style.left = `${100 * (popupLeft - pageX) / pageWidth}%`;
    style.top = `${100 * (popupTop - pageY) / pageHeight}%`;
    questo.#contenitore.append(popup);
  }
  _formatContents({
    str,
    direzione
  }) {
    const p = document.createElement("p");
    p.classList.add("popupContent");
    p.dir = dir;
    linee costanti = str.split(/(?:\r\n?|\n)/);
    per (lascia che i = 0, ii = lunghezza linee; i < ii; ++i) {
      const line = lines[i];
      p.append(document.createTextNode(line));
      se (i < ii - 1) {
        p.append(document.createElement("br"));
      }
    }
    restituisci p;
  }
  #keyDown(evento) {
    se (evento.altKey || evento.shiftKey || evento.ctrlKey || evento.metaKey) {
      ritorno;
    }
    if (event.key === "Invio" || event.key === "Esc" && this.#pinned) {
      questo.#toggle();
    }
  }
  #attiva() {
    questo.#pinned = !questo.#pinned;
    se (questo.#bloccato) {
      questo.#mostra();
      questo.#container.addEventListener("clic", questo.#boundToggle);
      questo.#container.addEventListener("keydown", questo.#boundKeyDown);
    } altro {
      questo.#nascondi();
      questo.#container.removeEventListener("clic", questo.#boundToggle);
      questo.#container.removeEventListener("keydown", questo.#boundKeyDown);
    }
  }
  #spettacolo() {
    se (!questo.#popup) {
      questo.render();
    }
    se (!questo.èVisibile) {
      questo.#contenitore.nascosto = falso;
      questo.#container.style.zIndex = parseInt(questo.#container.style.zIndex) + 1000;
    } altrimenti se (questo.#bloccato) {
      questo.#container.classList.add("focalizzato");
    }
  }
  #nascondere() {
    questo.#container.classList.remove("focalizzato");
    se (questo.#bloccato || !questo.èVisibile) {
      ritorno;
    }
    questo.#contenitore.nascosto = vero;
    questo.#container.style.zIndex = parseInt(questo.#container.style.zIndex) - 1000;
  }
  forzaNascondi() {
    questo.#eraVisibile = questo.èVisibile;
    se (!questo.#eraVisibile) {
      ritorno;
    }
    questo.#contenitore.nascosto = vero;
  }
  forseMostra() {
    se (!questo.#eraVisibile) {
      ritorno;
    }
    questo.#wasVisible = false;
    questo.#contenitore.nascosto = falso;
  }
  ottieni isVisible() {
    restituisci questo.#container.hidden === false;
  }
}
classe FreeTextAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
    questo.textContent = parametri.dati.textContent;
    this.textPosition = parametri.dati.textPosition;
    this.annotationEditorType = _util.AnnotationEditorType.FREETEXT;
  }
  render() {
    this.container.classList.add("freeTextAnnotation");
    se (questo.testoContenuto) {
      contenuto costante = document.createElement("div");
      contenuto.classList.add("annotationTextContent");
      content.setAttribute("ruolo", "commento");
      per (riga costante di this.textContent) {
        const lineSpan = document.createElement("span");
        lineSpan.textContent = riga;
        contenuto.append(lineSpan);
      }
      questo.contenitore.aggiungi(contenuto);
    }
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    questo._editOnDoubleClick();
    restituisci questo.contenitore;
  }
}
esportazioni.FreeTextAnnotationElement = FreeTextAnnotationElement;
classe LineAnnotationElement estende AnnotationElement {
  #line = null;
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const data = this.data;
    costante {
      larghezza,
      altezza
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(larghezza, altezza, true);
    const line = this.#line = this.svgFactory.createElement("svg:line");
    riga.setAttribute("x1", dati.rect[2] - dati.lineCoordinates[0]);
    riga.setAttribute("y1", dati.rect[3] - dati.lineCoordinates[1]);
    riga.setAttribute("x2", dati.rect[2] - dati.lineCoordinates[2]);
    riga.setAttribute("y2", dati.rect[3] - dati.lineCoordinates[3]);
    line.setAttribute("larghezza-tratto", data.borderStyle.width || 1);
    line.setAttribute("stroke", "trasparente");
    line.setAttribute("riempimento", "trasparente");
    svg.append(linea);
    questo.contenitore.aggiungi(svg);
    se (!data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    restituisci questo.contenitore;
  }
  getElementsToTriggerPopup() {
    restituisci questo.#line;
  }
  aggiungiEvidenziaArea() {
    this.container.classList.add("highlightArea");
  }
}
classe SquareAnnotationElement estende AnnotationElement {
  #quadrato = nullo;
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const data = this.data;
    costante {
      larghezza,
      altezza
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(larghezza, altezza, true);
    const borderWidth = data.borderStyle.width;
    const quadrato = questo.#quadrato = questo.svgFactory.createElement("svg:rect");
    square.setAttribute("x", borderWidth / 2);
    square.setAttribute("y", borderWidth / 2);
    square.setAttribute("larghezza", larghezza - borderWidth);
    square.setAttribute("altezza", altezza - larghezzadelbordo);
    square.setAttribute("larghezza-tratto", borderWidth || 1);
    square.setAttribute("stroke", "trasparente");
    square.setAttribute("riempimento", "trasparente");
    svg.append(quadrato);
    questo.contenitore.aggiungi(svg);
    se (!data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    restituisci questo.contenitore;
  }
  getElementsToTriggerPopup() {
    restituisci questo.#square;
  }
  aggiungiEvidenziaArea() {
    this.container.classList.add("highlightArea");
  }
}
classe CircleAnnotationElement estende AnnotationElement {
  #cerchio = null;
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const data = this.data;
    costante {
      larghezza,
      altezza
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(larghezza, altezza, true);
    const borderWidth = data.borderStyle.width;
    const circle = this.#circle = this.svgFactory.createElement("svg:ellipse");
    circle.setAttribute("cx", larghezza / 2);
    circle.setAttribute("cy", altezza / 2);
    circle.setAttribute("rx", larghezza / 2 - larghezzadelbordo / 2);
    circle.setAttribute("ry", altezza / 2 - larghezza bordo / 2);
    circle.setAttribute("larghezza-tratto", borderWidth || 1);
    circle.setAttribute("stroke", "trasparente");
    circle.setAttribute("riempimento", "trasparente");
    svg.append(cerchio);
    questo.contenitore.aggiungi(svg);
    se (!data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    restituisci questo.contenitore;
  }
  getElementsToTriggerPopup() {
    restituisci questo.#cerchio;
  }
  aggiungiEvidenziaArea() {
    this.container.classList.add("highlightArea");
  }
}
classe PolylineAnnotationElement estende AnnotationElement {
  #polilinea = null;
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
    this.containerClassName = "polylineAnnotation";
    this.svgElementName = "svg:polilinea";
  }
  render() {
    questo.contenitore.elencoclassi.aggiungi(questo.nomeclassecontainer);
    const data = this.data;
    costante {
      larghezza,
      altezza
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(larghezza, altezza, true);
    lascia punti = [];
    per (coordinata costante di dati.vertici) {
      const x = coordinate.x - data.rect[0];
      const y = data.rect[3] - coordinate.y;
      punti.push(x + "," + y);
    }
    punti = punti.join(" ");
    const polyline = this.#polyline = this.svgFactory.createElement(this.svgElementName);
    polyline.setAttribute("punti", punti);
    polyline.setAttribute("larghezza-tratto", data.borderStyle.width || 1);
    polyline.setAttribute("stroke", "trasparente");
    polyline.setAttribute("riempimento", "trasparente");
    svg.append(polilinea);
    questo.contenitore.aggiungi(svg);
    se (!data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    restituisci questo.contenitore;
  }
  getElementsToTriggerPopup() {
    restituisci questo.#polyline;
  }
  aggiungiEvidenziaArea() {
    this.container.classList.add("highlightArea");
  }
}
classe PolygonAnnotationElement estende PolylineAnnotationElement {
  costruttore(parametri) {
    super(parametri);
    this.containerClassName = "polygonAnnotation";
    this.svgElementName = "svg:poligono";
  }
}
classe CaretAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
  }
  render() {
    this.container.classList.add("caretAnnotation");
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    restituisci questo.contenitore;
  }
}
classe InkAnnotationElement estende AnnotationElement {
  #polilinee = [];
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
    this.containerClassName = "inkAnnotation";
    this.svgElementName = "svg:polilinea";
    questo.tipo di editor di annotazioni = _util.tipo di editor di annotazioni.INK;
  }
  render() {
    questo.contenitore.elencoclassi.aggiungi(questo.nomeclassecontainer);
    const data = this.data;
    costante {
      larghezza,
      altezza
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(larghezza, altezza, true);
    per (const inkList di data.inkLists) {
      lascia punti = [];
      per (coordinata costante di inkList) {
        const x = coordinate.x - data.rect[0];
        const y = data.rect[3] - coordinate.y;
        punti.push(`${x},${y}`);
      }
      punti = punti.join(" ");
      const polyline = this.svgFactory.createElement(this.svgElementName);
      questo.#polilinee.push(polilinea);
      polyline.setAttribute("punti", punti);
      polyline.setAttribute("larghezza-tratto", data.borderStyle.width || 1);
      polyline.setAttribute("stroke", "trasparente");
      polyline.setAttribute("riempimento", "trasparente");
      se (!data.popupRef && this.hasPopupData) {
        questo._creaPopup();
      }
      svg.append(polilinea);
    }
    questo.contenitore.aggiungi(svg);
    restituisci questo.contenitore;
  }
  getElementsToTriggerPopup() {
    restituisci questo.#polilinee;
  }
  aggiungiEvidenziaArea() {
    this.container.classList.add("highlightArea");
  }
}
esportazioni.InkAnnotationElement = InkAnnotationElement;
classe HighlightAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero,
      createQuadrilaterals: true
    });
  }
  render() {
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    this.container.classList.add("highlightAnnotation");
    restituisci questo.contenitore;
  }
}
classe UnderlineAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero,
      createQuadrilaterals: true
    });
  }
  render() {
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    this.container.classList.add("underlineAnnotation");
    restituisci questo.contenitore;
  }
}
classe SquigglyAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero,
      createQuadrilaterals: true
    });
  }
  render() {
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    this.container.classList.add("squigglyAnnotation");
    restituisci questo.contenitore;
  }
}
classe StrikeOutAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero,
      createQuadrilaterals: true
    });
  }
  render() {
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    this.container.classList.add("strikeoutAnnotation");
    restituisci questo.contenitore;
  }
}
classe StampAnnotationElement estende AnnotationElement {
  costruttore(parametri) {
    super(parametri, {
      èRenderizzabile: vero,
      ignoreBorder: vero
    });
  }
  render() {
    this.container.classList.add("stampAnnotation");
    se (!this.data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    }
    restituisci questo.contenitore;
  }
}
esportazioni.StampAnnotationElement = StampAnnotationElement;
classe FileAttachmentAnnotationElement estende AnnotationElement {
  #trigger = null;
  costruttore(parametri) {
    super(parametri, {
      isRenderable: vero
    });
    costante {
      nome del file,
      contenuto
    } = questo.file.dati;
    this.filename = (0, _display_utils.getFilenameFromUrl)(filename, true);
    questo.contenuto = contenuto;
    this.linkService.eventBus?.dispatch("fileattachmentannotation", {
      fonte: questo,
      nome del file,
      contenuto
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    costante {
      contenitore,
      dati
    } = questo;
    lascia innescare;
    se (data.hasAppearance || data.fillAlpha === 0) {
      trigger = document.createElement("div");
    } altro {
      trigger = document.createElement("img");
      trigger.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(data.name) ? "graffetta" : "puntina da disegno"}.svg`;
      se (data.fillAlpha && data.fillAlpha < 1) {
        trigger.style = `filter: opacity(${Math.round(data.fillAlpha * 100)}%);`;
      }
    }
    trigger.addEventListener("dblclick", this.#download.bind(this));
    questo.#trigger = trigger;
    costante {
      èMac
    } = _util.FeatureTest.platform;
    contenitore.addEventListener("keydown", evt => {
      if (evt.key === "Invio" && (isMac ? evt.metaKey : evt.ctrlKey)) {
        questo.#scarica();
      }
    });
    se (!data.popupRef && this.hasPopupData) {
      questo._creaPopup();
    } altro {
      trigger.classList.add("popupTriggerArea");
    }
    contenitore.append(trigger);
    restituire il contenitore;
  }
  getElementsToTriggerPopup() {
    restituisci questo.#trigger;
  }
  aggiungiEvidenziaArea() {
    this.container.classList.add("highlightArea");
  }
  #scaricamento() {
    this.downloadManager?.openOrDownloadData(this.container, this.content, this.filename);
  }
}
classe AnnotationLayer {
  #accessibilityManager = null;
  #annotationCanvasMap = null;
  #editableAnnotations = nuova mappa();
  costruttore({
    divisione,
    responsabile dell'accessibilità,
    annotazioneCanvasMap,
    l10n,
    pagina,
    finestra
  }) {
    questo.div = div;
    questo.#accessibilityManager = accessibilityManager;
    questo.#annotationCanvasMap = annotationCanvasMap;
    questo.l10n = l10n;
    this.page = pagina;
    this.viewport = finestra di visualizzazione;
    questo.zIndex = 0;
    questo.l10n ||= _displayL10n_utils.NullL10n;
  }
  #appendElement(elemento, id) {
    const contentElement = element.firstChild || elemento;
    contentElement.id = `${_util.AnnotationPrefix}${id}`;
    this.div.append(elemento);
    questo.#accessibilityManager?.moveElementInDOM(questo.div, elemento, contentElement, false);
  }
  rendering asincrono (parametri) {
    costante {
      annotazioni
    } = parametri;
    const layer = this.div;
    (0, _display_utils.setLayerDimensions)(layer, this.viewport);
    const popupToElements = new Map();
    const elementParams = {
      dati: nulli,
      strato,
      linkService: params.linkService,
      downloadManager: params.downloadManager,
      imageResourcesPath: params.imageResourcesPath || "",
      renderForms: params.renderForms !== false,
      svgFactory: nuovo _display_utils.DOMSVGFactory(),
      annotationStorage: params.annotationStorage || nuovo _annotation_storage.AnnotationStorage(),
      enableScripting: params.enableScripting === true,
      haJSActions: params.hasJSActions,
      fieldObjects: params.fieldObjects,
      genitore: questo,
      elementi: null
    };
    per (dati costanti delle annotazioni) {
      se (data.noHTML) {
        continuare;
      }
      const isPopupAnnotation = data.annotationType === _util.AnnotationType.POPUP;
      se (!isPopupAnnotation) {
        costante {
          larghezza,
          altezza
        } = getRectDims(data.rect);
        se (larghezza <= 0 || altezza <= 0) {
          continuare;
        }
      } altro {
        elementi costanti = popupToElements.get(data.id);
        se (!elementi) {
          continuare;
        }
        elementParams.elements = elementi;
      }
      elementParams.data = dati;
      elemento costante = AnnotationElementFactory.create(elementParams);
      se (!element.isRenderable) {
        continuare;
      }
      se (!isPopupAnnotation && data.popupRef) {
        elementi costanti = popupToElements.get(data.popupRef);
        se (!elementi) {
          popupToElements.set(data.popupRef, [elemento]);
        } altro {
          elementi.push(elemento);
        }
      }
      se (elemento.annotazioneEditorType > 0) {
        questo.#editableAnnotations.set(element.data.id, element);
      }
      const rendered = element.render();
      se (dati.nascosti) {
        rendered.style.visibility = "nascosto";
      }
      questo.#appendElement(renderizzato, dati.id);
    }
    questo.#setAnnotationCanvasMap();
    attendi questo.l10n.translate(layer);
  }
  aggiornamento({
    finestra
  }) {
    const layer = this.div;
    this.viewport = finestra di visualizzazione;
    (0, _display_utils.setLayerDimensions)(strato, {
      rotazione: viewport.rotation
    });
    questo.#setAnnotationCanvasMap();
    layer.hidden = false;
  }
  #setAnnotationCanvasMap() {
    se (!this.#annotationCanvasMap) {
      ritorno;
    }
    const layer = this.div;
    per (const [id, canvas] di questo.#annotationCanvasMap) {
      elemento costante = layer.querySelector(`[data-annotation-id="${id}"]`);
      se (!elemento) {
        continuare;
      }
      costante {
        primo bambino
      } = elemento;
      se (!primofiglio) {
        elemento.append(canvas);
      } altrimenti se (firstChild.nodeName === "CANVAS") {
        firstChild.replaceWith(canvas);
      } altro {
        firstChild.before(canvas);
      }
    }
    questo.#annotazioneCanvasMap.clear();
  }
  getEditableAnnotations() {
    restituisci Array.from(this.#editableAnnotations.values());
  }
  getEditableAnnotation(id) {
    restituisci questo.#editableAnnotations.get(id);
  }
}
esportazioni.AnnotationLayer = AnnotationLayer;

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.ColorConverters = void 0;
funzione makeColorComp(n) {
  restituisci Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
}
funzione scaleAndClamp(x) {
  restituisci Math.max(0, Math.min(255, 255 * x));
}
classe ColorConverters {
  statico CMYK_G([c, y, m, k]) {
    ritorno ["G", 1 - Math.min(1, 0,3 * c + 0,59 * m + 0,11 * y + k)];
  }
  statico G_CMYK([g]) {
    ritorno ["CMYK", 0, 0, 0, 1 - g];
  }
  statico G_RGB([g]) {
    ritorno ["RGB", g, g, g];
  }
  statico G_rgb([g]) {
    g = scalaEMorsetto(g);
    ritorno [g, g, g];
  }
  statico G_HTML([g]) {
    const G = makeColorComp(g);
    restituisci `#${G}${G}${G}`;
  }
  statico RGB_G([r, g, b]) {
    ritorno ["G", 0,3 * r + 0,59 * g + 0,11 * b];
  }
  statico RGB_rgb(colore) {
    restituisci color.map(scaleAndClamp);
  }
  statico RGB_HTML(colore) {
    restituisci `#${color.map(makeColorComp).join("")}`;
  }
  statico T_HTML() {
    restituisci "#00000000";
  }
  statico T_rgb() {
    ritorno [null];
  }
  statico CMYK_RGB([c, y, m, k]) {
    ritorno ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
  }
  statico CMYK_rgb([c, y, m, k]) {
    ritorna [scaleAndClamp(1 - Math.min(1, c + k)), scaleAndClamp(1 - Math.min(1, m + k)), scaleAndClamp(1 - Math.min(1, y + k))];
  }
  statico CMYK_HTML(componenti) {
    const rgb = this.CMYK_RGB(componenti).slice(1);
    restituisci questo.RGB_HTML(rgb);
  }
  statico RGB_CMYK([r, g, b]) {
    costante c = 1 - r;
    costante m = 1 - g;
    costante y = 1 - b;
    const k = Math.min(c, m, y);
    ritorno ["CMYK", c, m, y, k];
  }
}
esportazioni.ColorConverters = ColorConverters;

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.NullL10n = void 0;
esportazioni.getL10nFallback = getL10nFallback;
const DEFAULT_L10N_STRINGS = {
  of_pages: "di {{pagesCount}}",
  page_of_pages: "({{pageNumber}} di {{pagesCount}})",
  document_properties_kb: "{{size_kb}} KB ({{size_b}} byte)",
  document_properties_mb: "{{size_mb}} MB ({{size_b}} byte)",
  document_properties_date_string: "{{data}}, {{ora}}",
  document_properties_page_size_unit_inches: "in",
  document_properties_page_size_unit_millimeters: "mm",
  document_properties_page_size_orientation_portrait: "ritratto",
  document_properties_page_size_orientation_landscape: "paesaggio",
  document_properties_page_size_name_a3: "A3",
  document_properties_page_size_name_a4: "A4",
  document_properties_page_size_name_letter: "Lettera",
  document_properties_page_size_name_legal: "Legale",
  document_properties_page_size_dimension_string: "{{larghezza}} × {{altezza}} {{unità}} ({{orientamento}})",
  document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
  document_properties_linearized_yes: "Sì",
  document_properties_linearized_no: "No",
  additional_layers: "Livelli aggiuntivi",
  page_landmark: "Pagina {{page}}",
  thumb_page_title: "Pagina {{page}}",
  thumb_page_canvas: "Miniatura della pagina {{page}}",
  find_reached_top: "Raggiunto l'inizio del documento, continua dal basso",
  find_reached_bottom: "Raggiunta la fine del documento, continua dall'inizio",
  "find_match_count[one]": "{{current}} di {{total}} corrispondenze",
  "find_match_count[other]": "{{current}} di {{total}} corrispondenze",
  "find_match_count_limit[one]": "Più di {{limit}} corrispondenze",
  "find_match_count_limit[other]": "Più di {{limit}} corrispondenze",
  find_not_found: "Frase non trovata",
  page_scale_width: "Larghezza pagina",
  page_scale_fit: "Adattamento pagina",
  page_scale_auto: "Zoom automatico",
  page_scale_actual: "Dimensioni reali",
  page_scale_percent: "{{scala}}%",
  loading_error: "Si è verificato un errore durante il caricamento del PDF.",
  invalid_file_error: "File PDF non valido o danneggiato.",
  missing_file_error: "File PDF mancante.",
  unexpected_response_error: "Risposta imprevista del server.",
  rendering_error: "Si è verificato un errore durante il rendering della pagina.",
  annotation_date_string: "{{data}}, {{ora}}",
  printing_not_supported: "Attenzione: la stampa non è completamente supportata da questo browser.",
  printing_not_ready: "Attenzione: il PDF non è completamente caricato per la stampa.",
  web_fonts_disabled: "I font Web sono disabilitati: impossibile utilizzare i font PDF incorporati.",
  free_text2_default_content: "Inizia a digitare...",
  editor_free_text2_aria_label: "Editor di testo",
  editor_ink2_aria_label: "Editor di disegno",
  editor_ink_canvas_aria_label: "Immagine creata dall'utente",
  editor_alt_text_button_label: "Testo alternativo",
  editor_alt_text_edit_button_label: "Modifica testo alternativo",
  editor_alt_text_decorative_tooltip: "Contrassegnato come decorativo"
};
{
  DEFAULT_L10N_STRINGS.print_progress_percent = "{{progress}}%";
}
funzione getL10nFallback(chiave, argomenti) {
  interruttore (chiave) {
    caso "find_match_count":
      chiave = `find_match_count[${args.total === 1 ? "uno" : "altro"}]`;
      rottura;
    caso "find_match_count_limit":
      chiave = `find_match_count_limit[${args.limit === 1 ? "uno" : "altro"}]`;
      rottura;
  }
  restituisci DEFAULT_L10N_STRINGS[chiave] || "";
}
funzione formatL10nValue(testo, argomenti) {
  se (!arg) {
    restituisci il testo;
  }
  restituisci text.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (tutto, nome) => {
    restituisci il nome in args ? args[name] : "{{" + name + "}}";
  });
}
costante NullL10n = {
  asincrono getLanguage() {
    restituisci "en-us";
  },
  getDirection() asincrono {
    restituisci "ltr";
  },
  async get(chiave, argomenti = null, fallback = getL10nFallback(chiave, argomenti)) {
    restituisci formatL10nValue(fallback, argomenti);
  },
  async translate(elemento) {}
};
esportazioni.NullL10n = NullL10n;

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.XfaLayer = void 0;
var _xfa_text = __w_pdfjs_require__(25);
classe XfaLayer {
  static setupStorage(html, id, elemento, storage, intent) {
    const storedData = storage.getValue(id, {
      valore: nullo
    });
    switch (nome elemento) {
      caso "textarea":
        se (storedData.value !== null) {
          html.textContent = memorizzatiData.valore;
        }
        se (intento === "stampa") {
          rottura;
        }
        html.addEventListener("input", evento => {
          storage.setValue(id, {
            valore: evento.valore.destinazione
          });
        });
        rottura;
      caso "input":
        se (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
          se (storedData.value === element.attributes.xfaOn) {
            html.setAttribute("selezionato", true);
          } altrimenti se (storedData.value === element.attributes.xfaOff) {
            html.removeAttribute("selezionato");
          }
          se (intento === "stampa") {
            rottura;
          }
          html.addEventListener("cambiamento", evento => {
            storage.setValue(id, {
              valore: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
            });
          });
        } altro {
          se (storedData.value !== null) {
            html.setAttribute("valore", storedData.value);
          }
          se (intento === "stampa") {
            rottura;
          }
          html.addEventListener("input", evento => {
            storage.setValue(id, {
              valore: evento.valore.destinazione
            });
          });
        }
        rottura;
      caso "seleziona":
        se (storedData.value !== null) {
          html.setAttribute("valore", storedData.value);
          per (opzione const di element.children) {
            se (opzione.attributi.valore === storedData.valore) {
              opzione.attributi.selezionati = vero;
            } altrimenti se (option.attributes.hasOwnProperty("selezionato")) {
              elimina opzione.attributi.selezionati;
            }
          }
        }
        html.addEventListener("input", evento => {
          const opzioni = evento.target.opzioni;
          valore costante = opzioni.indiceselezionato === -1 ? "" : opzioni[opzioni.indiceselezionato].valore;
          storage.setValue(id, {
            valore
          });
        });
        rottura;
    }
  }
  setAttributes statico({
    html,
    elemento,
    archiviazione = null,
    intento,
    linkService
  }) {
    costante {
      attributi
    } = elemento;
    const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
    se (attributi.tipo === "radio") {
      attributi.nome = `${attributi.nome}-${intento}`;
    }
    per (const [chiave, valore] di Object.entries(attributi)) {
      se (valore === null || valore === indefinito) {
        continuare;
      }
      interruttore (chiave) {
        caso "classe":
          se (valore.lunghezza) {
            html.setAttribute(chiave, valore.join(" "));
          }
          rottura;
        caso "dataId":
          rottura;
        caso "id":
          html.setAttribute("id-elemento-dati", valore);
          rottura;
        caso "stile":
          Oggetto.assegna(html.stile, valore);
          rottura;
        caso "textContent":
          html.textContent = valore;
          rottura;
        predefinito:
          se (!isHTMLAnchorElement || chiave !== "href" && chiave !== "nuovaFinestra") {
            html.setAttribute(chiave, valore);
          }
      }
    }
    se (isHTMLAnchorElement) {
      linkService.addLinkAttributes(html, attributi.href, attributi.newWindow);
    }
    se (archiviazione e attributi.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  rendering statico(parametri) {
    const storage = parametri.annotazioneStorage;
    const linkService = parametri.linkService;
    const root = parametri.xfaHtml;
    const intent = parametri.intent || "visualizza";
    const rootHtml = document.createElement(root.name);
    se (root.attributi ) {
      questo.setAttributes({
        html: radiceHtml,
        elemento: radice,
        intento,
        linkService
      });
    }
    const stack = [[root, -1, rootHtml]];
    const rootDiv = parametri.div;
    rootDiv.append(rootHtml);
    se (parametri.viewport) {
      const transform = `matrix(${parameters.viewport.transform.join(",")})`;
      rootDiv.style.transform = trasforma;
    }
    se (intento !== "richText") {
      rootDiv.setAttribute("classe", "xfaLayer xfaFont");
    }
    const textDivs = [];
    mentre (lunghezza pila > 0) {
      const [genitore, i, html] = stack.at(-1);
      se (i + 1 === lunghezza genitori.figli) {
        pila.pop();
        continuare;
      }
      const figlio = genitore.figli[++stack.at(-1)[1]];
      se (figlio === null) {
        continuare;
      }
      costante {
        nome
      } = bambino;
      se (nome === "#testo") {
        const node = document.createTextNode(child.value);
        textDivs.push(nodo);
        html.append(nodo);
        continuare;
      }
      const childHtml = child?.attributes?.xmlns ? document.createElementNS(child.attributes.xmlns, name) : document.createElement(name);
      html.append(childHtml);
      se (child.attributes) {
        questo.setAttributes({
          html: childHtml,
          elemento: bambino,
          magazzinaggio,
          intento,
          linkService
        });
      }
      se (bambino.bambini e bambino.bambini.lunghezza > 0) {
        stack.push([figlio, -1, figlioHtml]);
      } altrimenti se (valore.figlio) {
        const node = document.createTextNode(child.value);
        se (_xfa_text.XfaText.shouldBuildText(nome)) {
          textDivs.push(nodo);
        }
        childHtml.append(nodo);
      }
    }
    per (const el di rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
      el.setAttribute("readOnly", true);
    }
    ritorno {
      textDivs
    };
  }
  aggiornamento statico (parametri) {
    const transform = `matrix(${parameters.viewport.transform.join(",")})`;
    parametri.div.stile.trasformazione = trasforma;
    parametri.div.nascosto = falso;
  }
}
esportazioni.XfaLayer = XfaLayer;

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.InkEditor = void 0;
var _util = __w_pdfjs_require__(1);
var _editor = __w_pdfjs_require__(4);
var _annotation_layer = __w_pdfjs_require__(29);
var _display_utils = __w_pdfjs_require__(6);
var _tools = __w_pdfjs_require__(5);
classe InkEditor estende _editor.AnnotationEditor {
  #baseHeight = 0;
  #baseWidth = 0;
  #boundCanvasPointermove = this.canvasPointermove.bind(this);
  #boundCanvasPointerleave = this.canvasPointerleave.bind(this);
  #boundCanvasPointerup = this.canvasPointerup.bind(this);
  #boundCanvasPointerdown = this.canvasPointerdown.bind(this);
  #currentPath2D = nuovo Path2D();
  #disableEditing = false;
  #hasSomethingToDraw = false;
  #isCanvasInitialized = false;
  #osservatore = null;
  #larghezzareale = 0;
  #altezzareale = 0;
  #requestFrameCallback = null;
  statico _defaultColor = null;
  statico _defaultOpacity = 1;
  statico _defaultThickness = 1;
  static _type = "inchiostro";
  costruttore(parametri) {
    super({
      ...parametri,
      nome: "inkEditor"
    });
    questo.colore = parametri.colore || null;
    questo.spessore = parametri.spessore || null;
    this.opacity = params.opacity || null;
    questo.percorsi = [];
    questo.bezierPath2D = [];
    questo.tutti i percorsi grezzi = [];
    questo.percorsocorrente = [];
    questo.fattore di scala = 1;
    questa.traduzioneX = questa.traduzioneY = 0;
    questo.x = 0;
    questo.y = 0;
    this._willKeepAspectRatio = true;
  }
  inizializzazione statica (l10n) {
    _editor.AnnotationEditor.initialize(l10n, {
      stringhe: ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"]
    });
  }
  static updateDefaultParams(tipo, valore) {
    interruttore (tipo) {
      caso _util.AnnotationEditorParamsType.INK_THICKNESS:
        InkEditor._defaultThickness = valore;
        rottura;
      caso _util.AnnotationEditorParamsType.INK_COLOR:
        InkEditor._defaultColor = valore;
        rottura;
      caso _util.AnnotationEditorParamsType.INK_OPACITY:
        InkEditor._defaultOpacity = valore / 100;
        rottura;
    }
  }
  updateParams(tipo, valore) {
    interruttore (tipo) {
      caso _util.AnnotationEditorParamsType.INK_THICKNESS:
        questo.#updateThickness(valore);
        rottura;
      caso _util.AnnotationEditorParamsType.INK_COLOR:
        questo.#updateColor(valore);
        rottura;
      caso _util.AnnotationEditorParamsType.INK_OPACITY:
        questo.#updateOpacity(valore);
        rottura;
    }
  }
  statico ottieni defaultPropertiesToUpdate() {
    restituisci [[_util.AnnotationEditorParamsType.INK_THICKNESS, InkEditor._defaultThickness], [_util.AnnotationEditorParamsType.INK_COLOR, InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor], [_util.AnnotationEditorParamsType.INK_OPACITY, Math.round(InkEditor._defaultOpacity * 100)]];
  }
  ottieni propertiesToUpdate() {
    restituisci [[_util.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || InkEditor._defaultThickness], [_util.AnnotationEditorParamsType.INK_COLOR, this.color || InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor], [_util.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? InkEditor._defaultOpacity))]];
  }
  #updateThickness(spessore) {
    const savedThickness = this.thickness;
    questo.aggiungiComandi({
      comando: () => {
        questo.spessore = spessore;
        questo.#fitToContent();
      },
      annulla: () => {
        questo.spessore = salvatoSpessore;
        questo.#fitToContent();
      },
      mustExec: vero,
      tipo: _util.AnnotationEditorParamsType.INK_THICKNESS,
      sovrascriviSeSameType: vero,
      keepUndo: vero
    });
  }
  #updateColor(colore) {
    const savedColor = this.color;
    questo.aggiungiComandi({
      comando: () => {
        questo.colore = colore;
        questo.#ridisegna();
      },
      annulla: () => {
        questo.colore = colore salvato;
        questo.#ridisegna();
      },
      mustExec: vero,
      tipo: _util.AnnotationEditorParamsType.INK_COLOR,
      sovrascriviSeSameType: vero,
      keepUndo: vero
    });
  }
  #updateOpacity(opacità) {
    opacità /= 100;
    const savedOpacity = this.opacity;
    questo.aggiungiComandi({
      comando: () => {
        this.opacity = opacità;
        questo.#ridisegna();
      },
      annulla: () => {
        this.opacity = savedOpacity;
        questo.#ridisegna();
      },
      mustExec: vero,
      tipo: _util.AnnotationEditorParamsType.INK_OPACITY,
      sovrascriviSeSameType: vero,
      keepUndo: vero
    });
  }
  ricostruisci() {
    se (!questo.genitore) {
      ritorno;
    }
    super.ricostruzione();
    se (this.div === null) {
      ritorno;
    }
    se (!this.canvas) {
      questo.#createCanvas();
      questo.#createObserver();
    }
    se (!this.isAttachedToDOM) {
      questo.genitore.aggiungi(questo);
      questo.#setCanvasDims();
    }
    questo.#fitToContent();
  }
  rimuovi() {
    se (this.canvas === null) {
      ritorno;
    }
    se (!this.isEmpty()) {
      questo.commit();
    }
    questa.larghezza.tela = questa.altezza.tela = 0;
    questa.tela.rimuovi();
    this.canvas = null;
    questo.#osservatore.disconnetti();
    questo.#osservatore = null;
    super.rimuovi();
  }
  setParent(genitore) {
    se (!questo.genitore && genitore) {
      this._uiManager.removeShouldRescale(this);
    } altrimenti se (questo.genitore && genitore === null) {
      this._uiManager.addShouldRescale(this);
    }
    super.setParent(genitore);
  }
  onScaleChanging() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const width = this.width * parentWidth;
    const altezza = this.height * parentHeight;
    this.setDimensions(larghezza, altezza);
  }
  enableEditMode() {
    se (questo.#disableEditing || questo.canvas === null) {
      ritorno;
    }
    super.enableEditMode();
    this._isDraggable = false;
    this.canvas.addEventListener("puntatore in basso", this.#boundCanvasPointerdown);
  }
  disableEditMode() {
    se (!this.isInEditMode() || this.canvas === null) {
      ritorno;
    }
    super.disableEditMode();
    this._isDraggable = !this.isEmpty();
    this.div.classList.remove("modifica");
    this.canvas.removeEventListener("puntatore in basso", this.#boundCanvasPointerdown);
  }
  una voltaAggiunto() {
    this._isDraggable = !this.isEmpty();
  }
  èVuoto() {
    restituisci this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  #getInitialBBox() {
    costante {
      parentRotation,
      parentDimensions: [larghezza, altezza]
    } = questo;
    switch (parentRotation) {
      caso 90:
        ritorno [0, altezza, altezza, larghezza];
      caso 180:
        ritorno [larghezza, altezza, larghezza, altezza];
      caso 270:
        ritorno [larghezza, 0, altezza, larghezza];
      predefinito:
        ritorno [0, 0, larghezza, altezza];
    }
  }
  #setStroke() {
    costante {
      ctx,
      colore,
      opacità,
      spessore,
      parentScale,
      fattore di scala
    } = questo;
    ctx.lineWidth = spessore * parentScale / scaleFactor;
    ctx.lineCap = "arrotondato";
    ctx.lineJoin = "arrotonda";
    ctx.miterLimit = 10;
    ctx.strokeStyle = `${color}${(0, _tools.opacityToHex)(opacity)}`;
  }
  #startDrawing(x, y) {
    this.canvas.addEventListener("menu contestuale", _display_utils.noContextMenu);
    this.canvas.addEventListener("pointerleave", this.#boundCanvasPointerleave);
    this.canvas.addEventListener("pointermove", this.#boundCanvasPointermove);
    this.canvas.addEventListener("puntatoresu", this.#boundCanvasPointerup);
    this.canvas.removeEventListener("puntatore in basso", this.#boundCanvasPointerdown);
    this.isEditing = true;
    se (!this.#isCanvasInitialized) {
      questo.#isCanvasInitialized = true;
      questo.#setCanvasDims();
      questo.spessore ||= InkEditor._defaultThickness;
      questo.colore ||= InkEditor._defaultColor || _editor.AnnotationEditor._defaultLineColor;
      this.opacity ??= InkEditor._defaultOpacity;
    }
    questo.percorsocorrente.push([x, y]);
    questo.#hasSomethingToDraw = false;
    questo.#setStroke();
    questo.#requestFrameCallback = () => {
      questo.#disegnaPunti();
      se (questo.#requestFrameCallback) {
        finestra.requestAnimationFrame(this.#requestFrameCallback);
      }
    };
    finestra.requestAnimationFrame(this.#requestFrameCallback);
  }
  #disegna(x, y) {
    const [lastX, lastY] = this.currentPath.at(-1);
    se (this.currentPath.length > 1 && x === lastX && y === lastY) {
      ritorno;
    }
    const currentPath = this.currentPath;
    lascia path2D = this.#currentPath2D;
    currentPath.push([x, y]);
    questo.#hasSomethingToDraw = true;
    se (lunghezza del percorso corrente <= 2) {
      percorso2D.sposta in(...percorsocorrente[0]);
      percorso2D.lineaSu(x, y);
      ritorno;
    }
    se (currentPath.length === 3) {
      questo.#currentPath2D = path2D = nuovo Path2D();
      percorso2D.sposta in(...percorsocorrente[0]);
    }
    questo.#makeBezierCurve(path2D, ...currentPath.at(-3), ...currentPath.at(-2), x, y);
  }
  #endPath() {
    se (questo.percorsocorrente.lunghezza === 0) {
      ritorno;
    }
    const lastPoint = this.currentPath.at(-1);
    questo.#currentPath2D.lineTo(...lastPoint);
  }
  #stopDrawing(x, y) {
    questo.#requestFrameCallback = null;
    x = Math.min(Math.max(x, 0), this.canvas.width);
    y = Math.min(Math.max(y, 0), this.canvas.height);
    questo.#disegna(x, y);
    questo.#endPath();
    lascia bezier;
    se (questo.currentPath.length !== 1) {
      bezier = questo.#generateBezierPoints();
    } altro {
      costante xy = [x, y];
      bezier = [[xy, xy.slice(), xy.slice(), xy]];
    }
    const path2D = this.#currentPath2D;
    const currentPath = this.currentPath;
    questo.percorsocorrente = [];
    questo.#currentPath2D = nuovo Path2D();
    const cmd = () => {
      this.allRawPaths.push(currentPath);
      questo.percorsi.push(bezier);
      this.bezierPath2D.push(path2D);
      questo.ricostruisci();
    };
    const undo = () => {
      questo.tutti i percorsi grezzi.pop();
      questo.percorsi.pop();
      this.bezierPath2D.pop();
      se (questa lunghezza dei percorsi === 0) {
        questo.rimuovi();
      } altro {
        se (!this.canvas) {
          questo.#createCanvas();
          questo.#createObserver();
        }
        questo.#fitToContent();
      }
    };
    questo.aggiungiComandi({
      comando,
      disfare,
      mustExec: vero
    });
  }
  #disegnaPunti() {
    se (!questo.#hasSomethingToDraw) {
      ritorno;
    }
    questo.#hasSomethingToDraw = false;
    spessore costante = Math.ceil(this.thickness * this.parentScale);
    const lastPoints = this.currentPath.slice(-3);
    const x = lastPoints.map(xy => xy[0]);
    const y = lastPoints.map(xy => xy[1]);
    const xMin = Math.min(...x) - spessore;
    const xMax = Math.max(...x) + spessore;
    const yMin = Math.min(...y) - spessore;
    const yMax = Math.max(...y) + spessore;
    costante {
      ctx
    } = questo;
    ctx.save();
    ctx.clearRect(0, 0, questa.tela.larghezza, questa.tela.altezza);
    per (percorso costante di this.bezierPath2D) {
      ctx.stroke(percorso);
    }
    ctx.stroke(this.#currentPath2D);
    ctx.restore();
  }
  #makeBezierCurve(percorso2D, x0, y0, x1, y1, x2, y2) {
    const prevX = (x0 + x1) / 2;
    const prevY = (y0 + y1) / 2;
    costante x3 = (x1 + x2) / 2;
    costante y3 = (y1 + y2) / 2;
    path2D.bezierCurveTo(prevX + 2 * (x1 - prevX) / 3, prevY + 2 * (y1 - prevY) / 3, x3 + 2 * (x1 - x3) / 3, y3 + 2 * (y1 - y3) / 3, x3, y3);
  }
  #generaPuntiBezier() {
    const path = this.currentPath;
    se (lunghezza del percorso <= 2) {
      ritorna [[percorso[0], percorso[0], percorso.at(-1), percorso.at(-1)]];
    }
    const bezierPoints = [];
    lascia che io;
    lascia [x0, y0] = percorso[0];
    per (i = 1; i < lunghezza del percorso - 2; i++) {
      const [x1, y1] = percorso[i];
      const [x2, y2] = percorso[i + 1];
      costante x3 = (x1 + x2) / 2;
      costante y3 = (y1 + y2) / 2;
      controllo costante1 = [x0 + 2 * (x1 - x0) / 3, y0 + 2 * (y1 - y0) / 3];
      controllo costante2 = [x3 + 2 * (x1 - x3) / 3, y3 + 2 * (y1 - y3) / 3];
      bezierPoints.push([[x0, y0], controllo1, controllo2, [x3, y3]]);
      [x0, y0] = [x3, y3];
    }
    const [x1, y1] = percorso[i];
    const [x2, y2] = percorso[i + 1];
    controllo costante1 = [x0 + 2 * (x1 - x0) / 3, y0 + 2 * (y1 - y0) / 3];
    controllo costante2 = [x2 + 2 * (x1 - x2) / 3, y2 + 2 * (y1 - y2) / 3];
    bezierPoints.push([[x0, y0], controllo1, controllo2, [x2, y2]]);
    restituisci bezierPoints;
  }
  #ridisegna() {
    se (questo.èVuoto()) {
      questo.#updateTransform();
      ritorno;
    }
    questo.#setStroke();
    costante {
      tela,
      ctx
    } = questo;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, larghezza tela, altezza tela);
    questo.#updateTransform();
    per (percorso costante di this.bezierPath2D) {
      ctx.stroke(percorso);
    }
  }
  commetti() {
    se (questo.#disableEditing) {
      ritorno;
    }
    super.commit();
    this.isEditing = false;
    questo.disableEditMode();
    questo.impostaInPrimoPiano();
    questo.#disableEditing = true;
    this.div.classList.add("disabilitato");
    questo.#fitToContent(true);
    questo.rendiridimensionabile();
    this.parent.addInkEditorIfNeeded(true);
    questo.moveInDOM();
    questo.div.focus({
      preventScroll: vero
    });
  }
  focusin(evento) {
    se (!this._focusEventsAllowed) {
      ritorno;
    }
    super.focusin(evento);
    questo.abilitaModalitàModifica();
  }
  canvasPointerdown(evento) {
    se (evento.pulsante !== 0 || !questo.èInModalitàEdit() || questo.#disabilitaModifica) {
      ritorno;
    }
    questo.impostaInPrimoPiano();
    evento.prevenzioneDefault();
    se (evento.tipo !== "mouse") {
      questo.div.focus();
    }
    questo.#startDrawing(evento.offsetX, evento.offsetY);
  }
  canvasPointermove(evento) {
    evento.prevenzioneDefault();
    questo.#disegna(evento.offsetX, evento.offsetY);
  }
  canvasPointerup(evento) {
    evento.prevenzioneDefault();
    questo.#endDrawing(evento);
  }
  canvasPointerleave(evento) {
    questo.#endDrawing(evento);
  }
  #endDrawing(evento) {
    this.canvas.removeEventListener("pointerleave", this.#boundCanvasPointerleave);
    this.canvas.removeEventListener("pointermove", this.#boundCanvasPointermove);
    this.canvas.removeEventListener("puntatore su", this.#boundCanvasPointerup);
    this.canvas.addEventListener("puntatore in basso", this.#boundCanvasPointerdown);
    impostaTimeout(() => {
      this.canvas.removeEventListener("menu contestuale", _display_utils.noContextMenu);
    }, 10);
    questo.#stopDrawing(evento.offsetX, evento.offsetY);
    this.addToAnnotationStorage();
    questo.impostaInSfondo();
  }
  #creaCanvas() {
    this.canvas = document.createElement("canvas");
    questa.larghezza.tela = questa.altezza.tela = 0;
    this.canvas.className = "inkEditorCanvas";
    _editor.AnnotationEditor._l10nPromise.get("editor_ink_canvas_aria_label").then(msg => this.canvas?.setAttribute("aria-label", msg));
    questo.div.append(questo.tela);
    questo.ctx = questo.canvas.getContext("2d");
  }
  #creaOsservatore() {
    questo.#osservatore = nuovo ResizeObserver(voci => {
      const rect = entries[0].contentRect;
      se (larghezza rettangolo e altezza rettangolo) {
        this.setDimensions(rect.width, rect.height);
      }
    });
    questo.#osservatore.osserva(questo.div);
  }
  ottieni isResizable() {
    restituisci !this.isEmpty() && this.#disableEditing;
  }
  render() {
    se (questo.div) {
      restituisci questo.div;
    }
    lascia baseX, baseY;
    se (questa larghezza) {
      baseX = questo.x;
      baseY = this.y;
    }
    super.render();
    _editor.AnnotationEditor._l10nPromise.get("editor_ink2_aria_label").then(msg => this.div?.setAttribute("aria-label", msg));
    const [x, y, w, h] = this.#getInitialBBox();
    questo.setAt(x, y, 0, 0);
    this.setDims(w, h);
    questo.#createCanvas();
    se (questa larghezza) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      this.setAspectRatio(this.width * parentWidth, this.height * parentHeight);
      this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
      questo.#isCanvasInitialized = true;
      questo.#setCanvasDims();
      this.setDims(this.width * parentWidth, this.height * parentHeight);
      questo.#ridisegna();
      this.div.classList.add("disabilitato");
    } altro {
      this.div.classList.add("modifica");
      questo.abilitaModalitàModifica();
    }
    questo.#createObserver();
    restituisci questo.div;
  }
  #setCanvasDims() {
    se (!this.#isCanvasInitialized) {
      ritorno;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.canvas.width = Math.ceil(this.width * parentWidth);
    this.canvas.height = Math.ceil(this.height * parentHeight);
    questo.#updateTransform();
  }
  setDimensions(larghezza, altezza) {
    const roundedWidth = Math.round(width);
    const roundedHeight = Math.round(altezza);
    se (questo.#realWidth === roundedWidth e questo.#realHeight === roundedHeight) {
      ritorno;
    }
    questo.#realWidth = roundedWidth;
    questo.#realHeight = roundedHeight;
    this.canvas.style.visibility = "nascosto";
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.width = larghezza / parentWidth;
    this.height = altezza / parentHeight;
    questo.fixAndSetPosition();
    se (questo.#disableEditing) {
      questo.#setScaleFactor(larghezza, altezza);
    }
    questo.#setCanvasDims();
    questo.#ridisegna();
    this.canvas.style.visibility = "visibile";
    questo.fixDims();
  }
  #setScaleFactor(larghezza, altezza) {
    const padding = this.#getPadding();
    const scaleFactorW = (larghezza - imbottitura) / this.#baseWidth;
    const scaleFactorH = (altezza - imbottitura) / this.#baseHeight;
    this.scaleFactor = Math.min(scaleFactorW, scaleFactorH);
  }
  #aggiornaTrasformazione() {
    const padding = this.#getPadding() / 2;
    this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + padding, this.translationY * this.scaleFactor + padding);
  }
  statico #buildPath2D(bezier) {
    const path2D = nuovo Path2D();
    per (lascia che i = 0, ii = bezier.length; i < ii; i++) {
      const [primo, controllo1, controllo2, secondo] = bezier[i];
      se (i === 0) {
        path2D.moveTo(...primo);
      }
      path2D.bezierCurveTo(control1[0], control1[1], control2[0], control2[1], secondo[0], secondo[1]);
    }
    percorso di ritorno2D;
  }
  static #toPDFCoordinates(punti, rettangolo, rotazione) {
    const [blX, blY, trX, trY] = rect;
    interruttore (rotazione) {
      caso 0:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          punti[i] += blX;
          punti[i + 1] = trY - punti[i + 1];
        }
        rottura;
      caso 90:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          const x = punti[i];
          punti[i] = punti[i + 1] + blX;
          punti[i + 1] = x + blY;
        }
        rottura;
      caso 180:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          punti[i] = trX - punti[i];
          punti[i + 1] += blY;
        }
        rottura;
      caso 270:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          const x = punti[i];
          punti[i] = trX - punti[i + 1];
          punti[i + 1] = trY - x;
        }
        rottura;
      predefinito:
        genera un nuovo errore("Rotazione non valida");
    }
    punti di ritorno;
  }
  static #fromPDFCoordinates(punti, rettangolo, rotazione) {
    const [blX, blY, trX, trY] = rect;
    interruttore (rotazione) {
      caso 0:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          punti[i] -= blX;
          punti[i + 1] = trY - punti[i + 1];
        }
        rottura;
      caso 90:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          const x = punti[i];
          punti[i] = punti[i + 1] - blY;
          punti[i + 1] = x - blX;
        }
        rottura;
      caso 180:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          punti[i] = trX - punti[i];
          punti[i + 1] -= blY;
        }
        rottura;
      caso 270:
        per (lascia che i = 0, ii = punti.lunghezza; i < ii; i += 2) {
          const x = punti[i];
          punti[i] = trY - punti[i + 1];
          punti[i + 1] = trX - x;
        }
        rottura;
      predefinito:
        genera un nuovo errore("Rotazione non valida");
    }
    punti di ritorno;
  }
  #serializePaths(s, tx, ty, rect) {
    percorsi costanti = [];
    const padding = this.thickness / 2;
    const shiftX = s * tx + padding;
    const shiftY = s * ty + padding;
    per (const bezier di questo.percorsi) {
      buffer costante = [];
      punti costanti = [];
      per (lascia che j = 0, jj = lunghezza di bezier; j < jj; j++) {
        const [primo, controllo1, controllo2, secondo] = bezier[j];
        const p10 = s * primo[0] + shiftX;
        const p11 = s * first[1] + shiftY;
        const p20 = s * control1[0] + shiftX;
        const p21 = s * control1[1] + shiftY;
        const p30 = s * control2[0] + shiftX;
        const p31 = s * control2[1] + shiftY;
        const p40 = s * secondo[0] + shiftX;
        const p41 = s * secondo[1] + shiftY;
        se (j === 0) {
          buffer.push(p10, p11);
          punti.push(p10, p11);
        }
        buffer.push(p20, p21, p30, p31, p40, p41);
        punti.push(p20, p21);
        se (j === jj - 1) {
          punti.push(p40, p41);
        }
      }
      percorsi.push({
        bezier: InkEditor.#toPDFCoordinates(buffer, rect, this.rotation),
        punti: InkEditor.#toPDFCoordinates(punti, rettangolo, questa.rotazione)
      });
    }
    percorsi di ritorno;
  }
  #getBbox() {
    lascia xMin = Infinito;
    lascia xMax = -Infinito;
    lascia yMin = Infinito;
    lascia yMax = -Infinito;
    per (percorso costante di questo.percorsi) {
      per (const [primo, controllo1, controllo2, secondo] del percorso) {
        const bbox = _util.Util.bezierBoundingBox(...primo, ...controllo1, ...controllo2, ...secondo);
        xMin = Math.min(xMin, bbox[0]);
        yMin = Math.min(yMin, bbox[1]);
        xMax = Math.max(xMax, bbox[2]);
        yMax = Math.max(yMax, bbox[3]);
      }
    }
    ritorna [xMin, yMin, xMax, yMax];
  }
  #getPadding() {
    restituisci questo.#disableEditing ? Math.ceil(this.thickness * this.parentScale) : 0;
  }
  #fitToContent(firstTime = false) {
    se (questo.èVuoto()) {
      ritorno;
    }
    se (!this.#disableEditing) {
      questo.#ridisegna();
      ritorno;
    }
    const bbox = this.#getBbox();
    const padding = this.#getPadding();
    questo.#baseWidth = Math.max(_editor.AnnotationEditor.MIN_SIZE, bbox[2] - bbox[0]);
    questo.#baseHeight = Math.max(_editor.AnnotationEditor.MIN_SIZE, bbox[3] - bbox[1]);
    const width = Math.ceil(padding + this.#baseWidth * this.scaleFactor);
    const altezza = Math.ceil(padding + this.#baseHeight * this.scaleFactor);
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.width = larghezza / parentWidth;
    this.height = altezza / parentHeight;
    this.setAspectRatio(larghezza, altezza);
    const prevTranslationX = this.translationX;
    const prevTranslationY = this.translationY;
    this.translationX = -bbox[0];
    this.translationY = -bbox[1];
    questo.#setCanvasDims();
    questo.#ridisegna();
    questo.#realWidth = larghezza;
    questo.#realHeight = altezza;
    this.setDims(larghezza, altezza);
    const unscaledPadding = firstTime ? padding / this.scaleFactor / 2 : 0;
    this.translate(prevTranslationX - this.translationX - unscaledPadding, prevTranslationY - this.translationY - unscaledPadding);
  }
  deserialize statico (dati, genitore, uiManager) {
    se (istanza di dati di _annotation_layer.InkAnnotationElement) {
      restituisci null;
    }
    const editor = super.deserialize(data, parent, uiManager);
    editor.thickness = dati.thickness;
    editor.color = _util.Util.makeHexColor(...data.color);
    editor.opacità = dati.opacità;
    const [larghezzapagina, altezzapagina] = editor.dimensionipagina;
    const width = editor.width * pageWidth;
    const altezza = editor.height * pageHeight;
    const scaleFactor = editor.parentScale;
    const padding = dati.spessore / 2;
    editor.#disableEditing = true;
    editor.#realWidth = Math.round(larghezza);
    editor.#realHeight = Math.round(altezza);
    costante {
      percorsi,
      dritto,
      rotazione
    } = dati;
    per (lascia {
      Bézier
    } di percorsi) {
      bezier = InkEditor.#fromPDFCoordinates(bezier, rettangolo, rotazione);
      percorso costante = [];
      editor.paths.push(percorso);
      lascia p0 = scaleFactor * (bezier[0] - padding);
      lascia p1 = fattorescala * (bezier[1] - riempimento);
      per (lascia che i = 2, ii = lunghezza di bezier; i < ii; i += 6) {
        const p10 = scaleFactor * (bezier[i] - padding);
        const p11 = scaleFactor * (bezier[i + 1] - padding);
        const p20 = scaleFactor * (bezier[i + 2] - padding);
        const p21 = scaleFactor * (bezier[i + 3] - padding);
        const p30 = scaleFactor * (bezier[i + 4] - padding);
        const p31 = scaleFactor * (bezier[i + 5] - padding);
        percorso.push([[p0, p1], [p10, p11], [p20, p21], [p30, p31]]);
        p0 = p30;
        p1 = p31;
      }
      const path2D = this.#buildPath2D(path);
      editor.bezierPath2D.push(path2D);
    }
    const bbox = editor.#getBbox();
    editor.#baseWidth = Math.max(_editor.AnnotationEditor.MIN_SIZE, bbox[2] - bbox[0]);
    editor.#baseHeight = Math.max(_editor.AnnotationEditor.MIN_SIZE, bbox[3] - bbox[1]);
    editor.#setScaleFactor(larghezza, altezza);
    editor di ritorno;
  }
  serializzare() {
    se (questo.èVuoto()) {
      restituisci null;
    }
    const rect = this.getRect(0, 0);
    const color = _editor.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
    ritorno {
      annotationType: _util.AnnotationEditorType.INK,
      colore,
      spessore: questo.spessore,
      opacità: this.opacity,
      percorsi: this.#serializePaths(this.scaleFactor / this.parentScale, this.translationX, this.translationY, rect),
      pageIndex: this.pageIndex,
      dritto,
      rotazione: questa.rotazione,
      structTreeParentId: this._structTreeParentId
    };
  }
}
esportazioni.InkEditor = InkEditor;

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
esportazioni.StampEditor = void 0;
var _util = __w_pdfjs_require__(1);
var _editor = __w_pdfjs_require__(4);
var _display_utils = __w_pdfjs_require__(6);
var _annotation_layer = __w_pdfjs_require__(29);
classe StampEditor estende _editor.AnnotationEditor {
  #bitmap = null;
  #bitmapId = null;
  #bitmapPromise = null;
  #bitmapUrl = null;
  #bitmapFile = null;
  #canvas = null;
  #osservatore = null;
  #resizeTimeoutId = null;
  #isSvg = falso;
  #hasBeenAddedInUndoStack = false;
  static _type = "timbro";
  costruttore(parametri) {
    super({
      ...parametri,
      nome: "stampEditor"
    });
    questo.#bitmapUrl = params.bitmapUrl;
    questo.#bitmapFile = params.bitmapFile;
  }
  inizializzazione statica (l10n) {
    _editor.AnnotationEditor.initialize(l10n);
  }
  static ottieni i tipi supportati() {
    tipi costanti = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
    return (0, _util.shadow)(this, "supportedTypes", types.map(type => `image/${type}`));
  }
  statico ottieni supportatiTypesStr() {
    return (0, _util.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  statico isHandlingMimeForPasting(mime) {
    restituisci this.supportedTypes.includes(mime);
  }
  static paste(elemento, genitore) {
    parent.pasteEditor(_util.AnnotationEditorType.STAMP, {
      bitmapFile: item.getAsFile()
    });
  }
  #getBitmapFetched(dati, fromId = false) {
    se (!dati) {
      questo.rimuovi();
      ritorno;
    }
    questo.#bitmap = dati.bitmap;
    se (!daId) {
      questo.#bitmapId = dati.id;
      questo.#isSvg = dati.isSvg;
    }
    questo.#createCanvas();
  }
  #getBitmapDone() {
    questo.#bitmapPromise = null;
    this._uiManager.enableWaiting(false);
    se (questo.#tela) {
      questo.div.focus();
    }
  }
  #getBitmap() {
    se (questo.#bitmapId) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager.getFromId(this.#bitmapId).then(data => this.#getBitmapFetched(data, true)).finally(() => this.#getBitmapDone());
      ritorno;
    }
    se (questo.#bitmapUrl) {
      const url = this.#bitmapUrl;
      questo.#bitmapUrl = null;
      this._uiManager.enableWaiting(true);
      questo.#bitmapPromise = questo._uiManager.imageManager.getFromUrl(url).then(dati => questo.#getBitmapFetched(dati)).finally(() => questo.#getBitmapDone());
      ritorno;
    }
    se (questo.#bitmapFile) {
      const file = this.#bitmapFile;
      questo.#bitmapFile = null;
      this._uiManager.enableWaiting(true);
      questo.#bitmapPromise = questo._uiManager.imageManager.getFromFile(file).then(dati => questo.#getBitmapFetched(dati)).finally(() => questo.#getBitmapDone());
      ritorno;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = StampEditor.supportedTypesStr;
    questo.#bitmapPromise = nuova promessa(risolvi => {
      input.addEventListener("modifica", async () => {
        se (!input.files || input.files.length === 0) {
          questo.rimuovi();
        } altro {
          this._uiManager.enableWaiting(true);
          const data = attendi questo._uiManager.imageManager.getFromFile(input.files[0]);
          questo.#getBitmapFetched(dati);
        }
        risolvere();
      });
      input.addEventListener("annulla", () => {
        questo.rimuovi();
        risolvere();
      });
    }).finally(() => this.#getBitmapDone());
    input.click();
  }
  rimuovi() {
    se (questo.#bitmapId) {
      questo.#bitmap = null;
      this._uiManager.imageManager.deleteId(this.#bitmapId);
      questo.#canvas?.remove();
      questo.#canvas = null;
      questo.#osservatore?.disconnetti();
      questo.#osservatore = null;
    }
    super.rimuovi();
  }
  ricostruisci() {
    se (!questo.genitore) {
      se (questo.#bitmapId) {
        questo.#getBitmap();
      }
      ritorno;
    }
    super.ricostruzione();
    se (this.div === null) {
      ritorno;
    }
    se (questo.#bitmapId) {
      questo.#getBitmap();
    }
    se (!this.isAttachedToDOM) {
      questo.genitore.aggiungi(questo);
    }
  }
  una voltaAggiunto() {
    this._isDraggable = true;
    questo.div.focus();
  }
  èVuoto() {
    restituisci !(this.#bitmapPromise || this.#bitmap || this.#bitmapUrl || this.#bitmapFile);
  }
  ottieni isResizable() {
    restituisci vero;
  }
  render() {
    se (questo.div) {
      restituisci questo.div;
    }
    lascia baseX, baseY;
    se (questa larghezza) {
      baseX = questo.x;
      baseY = this.y;
    }
    super.render();
    this.div.hidden = true;
    se (questo.#bitmap) {
      questo.#createCanvas();
    } altro {
      questo.#getBitmap();
    }
    se (questa larghezza) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
    }
    restituisci questo.div;
  }
  #creaCanvas() {
    costante {
      divisione
    } = questo;
    permettere {
      larghezza,
      altezza
    } = questo.#bitmap;
    const [larghezzapagina, altezzapagina] = this.pageDimensions;
    const MAX_RATIO = 0,75;
    se (questa larghezza) {
      larghezza = this.width * pageWidth;
      altezza = this.height * pageHeight;
    } else if (larghezza > MAX_RATIO * larghezzapagina || altezza > MAX_RATIO * altezzapagina) {
      fattore costante = Math.min(MAX_RATIO * pageWidth / larghezza, MAX_RATIO * pageHeight / altezza);
      larghezza *= fattore;
      altezza *= fattore;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(larghezza * larghezza genitore / larghezza pagina, altezza * altezza genitore / altezza pagina);
    this._uiManager.enableWaiting(false);
    const canvas = this.#canvas = document.createElement("canvas");
    div.append(canvas);
    div.hidden = false;
    questo.#drawBitmap(larghezza, altezza);
    questo.#createObserver();
    se (!this.#hasBeenAddedInUndoStack) {
      questo.genitore.aggiungiUndoableEditor(questo);
      questo.#hasBeenAddedInUndoStack = true;
    }
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      fonte: questo,
      dettagli: {
        tipo: "modifica",
        sottotipo: this.editorType,
        dati: {
          azione: "immagine_inserita"
        }
      }
    });
    questo.aggiungiAltTextButton();
  }
  #setDimensions(larghezza, altezza) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.width = larghezza / parentWidth;
    this.height = altezza / parentHeight;
    this.setDims(larghezza, altezza);
    se (this._initialOptions?.isCentered) {
      questo.centro();
    } altro {
      questo.fixAndSetPosition();
    }
    this._initialOptions = null;
    se (questo.#resizeTimeoutId !== null) {
      clearTimeout(this.#resizeTimeoutId);
    }
    const TEMPO_DI_ATTESA = 200;
    questo.#resizeTimeoutId = setTimeout(() => {
      questo.#resizeTimeoutId = null;
      questo.#drawBitmap(larghezza, altezza);
    }, TEMPO_DI_ATTESA);
  }
  #scaleBitmap(larghezza, altezza) {
    costante {
      larghezza: bitmapWidth,
      altezza: bitmapHeight
    } = questo.#bitmap;
    lascia nuovaLarghezza = bitmapLarghezza;
    lascia nuovaAltezza = bitmapAltezza;
    lascia bitmap = questo.#bitmap;
    while (newWidth > 2 * width || newHeight > 2 * height) {
      const prevWidth = newWidth;
      const prevHeight = newHeight;
      se (nuovaLarghezza > 2 * larghezza) {
        newWidth = newWidth >= 16384 ? Math.floor(newWidth / 2) - 1 : Math.ceil(newWidth / 2);
      }
      se (nuovaaltezza > 2 * altezza) {
        newHeight = newHeight >= 16384 ? Math.floor(newHeight / 2) - 1 : Math.ceil(newHeight / 2);
      }
      const offscreen = new OffscreenCanvas(newWidth, newHeight);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
      bitmap = offscreen.transferToImageBitmap();
    }
    restituisci bitmap;
  }
  #drawBitmap(larghezza, altezza) {
    larghezza = Math.ceil(larghezza);
    altezza = Math.ceil(altezza);
    const canvas = this.#canvas;
    se (!canvas || canvas.width === larghezza && canvas.height === altezza) {
      ritorno;
    }
    canvas.width = larghezza;
    canvas.height = altezza;
    const bitmap = this.#isSvg ? this.#bitmap : this.#scaleBitmap(larghezza, altezza);
    const ctx = canvas.getContext("2d");
    ctx.filter = this._uiManager.hcmFilter;
    ctx.drawImage(bitmap, 0, 0, bitmap.larghezza, bitmap.altezza, 0, 0, larghezza, altezza);
  }
  #serializeBitmap(toUrl) {
    se (toUrl) {
      se (questo.#isSvg) {
        const url = this._uiManager.imageManager.getSvgUrl(this.#bitmapId);
        se (url) {
          URL di ritorno;
        }
      }
      const canvas = document.createElement("canvas");
      ({
        larghezza: canvas.width,
        altezza: canvas.height
      } = questo.#bitmap);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0);
      restituisci canvas.toDataURL();
    }
    se (questo.#isSvg) {
      const [larghezzapagina, altezzapagina] = this.pageDimensions;
      const width = Math.round(this.width * pageWidth * _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS);
      altezza costante = Math.round(this.height * pageHeight * _display_utils.PixelsPerInch.PDF_TO_CSS_UNITS);
      const offscreen = new OffscreenCanvas(larghezza, altezza);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0, this.#bitmap.width, this.#bitmap.height, 0, 0, width, height);
      restituisci offscreen.transferToImageBitmap();
    }
    restituisci structuredClone(this.#bitmap);
  }
  #creaOsservatore() {
    questo.#osservatore = nuovo ResizeObserver(voci => {
      const rect = entries[0].contentRect;
      se (larghezza rettangolo e altezza rettangolo) {
        questo.#setDimensions(rect.larghezza, rect.altezza);
      }
    });
    questo.#osservatore.osserva(questo.div);
  }
  deserialize statico (dati, genitore, uiManager) {
    se (istanza di dati di _annotation_layer.StampAnnotationElement) {
      restituisci null;
    }
    const editor = super.deserialize(data, parent, uiManager);
    costante {
      dritto,
      bitmapUrl,
      bitmapId,
      èSvg,
      accessibilitàDati
    } = dati;
    se (bitmapId && uiManager.imageManager.isValidId(bitmapId)) {
      editor.#bitmapId = bitmapId;
    } altro {
      editor.#bitmapUrl = bitmapUrl;
    }
    editor.#isSvg = isSvg;
    const [parentWidth, parentHeight] = editor.pageDimensions;
    editor.width = (rect[2] - rect[0]) / parentWidth;
    editor.height = (rect[3] - rect[1]) / parentHeight;
    se (accessibilityData) {
      editor.altTextData = accessibilityData;
    }
    editor di ritorno;
  }
  serialize(isForCopying = false, context = null) {
    se (questo.èVuoto()) {
      restituisci null;
    }
    const serializzato = {
      annotationType: _util.AnnotationEditorType.STAMP,
      bitmapId: questo.#bitmapId,
      pageIndex: this.pageIndex,
      rettangolo: this.getRect(0, 0),
      rotazione: questa.rotazione,
      isSvg: questo.#isSvg,
      structTreeParentId: this._structTreeParentId
    };
    se (èPerCopiare) {
      serialized.bitmapUrl = this.#serializeBitmap(true);
      serialized.accessibilityData = this.altTextData;
      restituisci serializzato;
    }
    costante {
      decorativo,
      testo alternativo
    } = this.altTextData;
    se (!decorativo && testo alternativo) {
      serialized.accessibilityData = {
        tipo: "Figura",
        alt: testo alternativo
      };
    }
    se (contesto === null) {
      restituisci serializzato;
    }
    contesto.timbri ||= nuova mappa();
    const area = this.#isSvg ? (serialized.rect[2] - serialized.rect[0]) * (serialized.rect[3] - serialized.rect[1]) : null;
    se (!context.stamps.has(this.#bitmapId)) {
      contesto.stamps.set(this.#bitmapId, {
        zona,
        serializzato
      });
      serialized.bitmap = this.#serializeBitmap(false);
    } altrimenti se (questo.#isSvg) {
      const prevData = context.stamps.get(this.#bitmapId);
      se (area > prevData.area) {
        prevData.area = area;
        prevData.serialized.bitmap.close();
        prevData.serialized.bitmap = this.#serializeBitmap(false);
      }
    }
    restituisci serializzato;
  }
}
esportazioni.StampEditor = StampEditor;

/***/ })
/******/ ]);
/****************************************************************************/
/******/ // La cache del modulo
/******/ var __webpack_module_cache__ = {};
/******/ 	
/******/ // La funzione require
/******/ funzione __w_pdfjs_require__(moduleId) {
/******/ // Controlla se il modulo è nella cache
/******/ var cachedModule = __webpack_module_cache__[moduleId];
/******/ if (cachedModule !== indefinito) {
/******/ restituisce cachedModule.exports;
/******/ }
/******/ // Crea un nuovo modulo (e mettilo nella cache)
/******/ var modulo = __webpack_module_cache__[moduleId] = {
/******/ // non è necessario alcun module.id
/******/ // nessun modulo caricato necessario
/******/ esporta: {}
/******/ };
/******/ 	
/******/ // Esegue la funzione del modulo
/******/ __webpack_modules__[moduleId](modulo, modulo.esportazioni, __w_pdfjs_require__);
/******/ 	
/******/ // Restituisce le esportazioni del modulo
/******/ restituisce il modulo.esportazioni;
/******/ }
/******/ 	
/****************************************************************************/
var __webpack_exports__ = {};
// Questa voce deve essere racchiusa in un IIFE perché deve essere isolata dagli altri moduli nel blocco.
(() => {
var esportazioni = __webpack_exports__;


Object.defineProperty(esporta, "__esModule", ({
  valore: vero
}));
Object.defineProperty(esporta, "AbortException", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.AbortException;
  }
}));
Object.defineProperty(esporta, "AnnotationEditorLayer", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _annotation_editor_layer.AnnotationEditorLayer;
  }
}));
Object.defineProperty(esporta, "AnnotationEditorParamsType", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.AnnotationEditorParamsType;
  }
}));
Object.defineProperty(esporta, "AnnotationEditorType", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.AnnotationEditorType;
  }
}));
Object.defineProperty(esporta, "AnnotationEditorUIManager", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _tools.AnnotationEditorUIManager;
  }
}));
Object.defineProperty(esporta, "AnnotationLayer", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _annotation_layer.AnnotationLayer;
  }
}));
Object.defineProperty(esporta, "AnnotationMode", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.AnnotationMode;
  }
}));
Object.defineProperty(esporta, "CMapCompressionType", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.CMapCompressionType;
  }
}));
Object.defineProperty(esporta, "DOMSVGFactory", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.DOMSVGFactory;
  }
}));
Object.defineProperty(esporta, "FeatureTest", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.FeatureTest;
  }
}));
Object.defineProperty(esporta, "GlobalWorkerOptions", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _worker_options.GlobalWorkerOptions;
  }
}));
Object.defineProperty(esporta, "ImageKind", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.ImageKind;
  }
}));
Object.defineProperty(esporta, "InvalidPDFException", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.InvalidPDFException;
  }
}));
Object.defineProperty(esporta, "MissingPDFException", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.MissingPDFException;
  }
}));
Object.defineProperty(esporta, "OPS", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.OPS;
  }
}));
Object.defineProperty(esporta, "PDFDataRangeTransport", ({
  enumerabile: vero,
  ottenere: funzione () {
    ritorno _api.PDFDataRangeTransport;
  }
}));
Object.defineProperty(esporta, "PDFDateString", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.PDFDateString;
  }
}));
Object.defineProperty(esporta, "PDFWorker", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _api.PDFWorker;
  }
}));
Object.defineProperty(esporta, "PasswordResponses", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.PasswordResponses;
  }
}));
Object.defineProperty(esporta, "PermissionFlag", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.PermissionFlag;
  }
}));
Object.defineProperty(esporta, "Pixel per pollice", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.PixelsPerInch;
  }
}));
Object.defineProperty(esporta, "PromiseCapability", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.PromiseCapability;
  }
}));
Object.defineProperty(esporta, "RenderingCancelledException", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.RenderingCancelledException;
  }
}));
Object.defineProperty(esporta, "SVGGraphics", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _api.SVGGraphics;
  }
}));
Object.defineProperty(esporta, "UnexpectedResponseException", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.UnexpectedResponseException;
  }
}));
Object.defineProperty(esporta, "Util", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.Util;
  }
}));
Object.defineProperty(esporta, "Livello di verbosità", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.VerbosityLevel;
  }
}));
Object.defineProperty(esporta, "XfaLayer", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _xfa_layer.XfaLayer;
  }
}));
Object.defineProperty(esporta, "build", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _api.build;
  }
}));
Object.defineProperty(esporta, "createValidAbsoluteUrl", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.createValidAbsoluteUrl;
  }
}));
Object.defineProperty(esporta, "getDocument", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _api.getDocument;
  }
}));
Object.defineProperty(esporta, "getFilenameFromUrl", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.getFilenameFromUrl;
  }
}));
Object.defineProperty(esporta, "getPdfFilenameFromUrl", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.getPdfFilenameFromUrl;
  }
}));
Object.defineProperty(esporta, "getXfaPageViewport", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.getXfaPageViewport;
  }
}));
Object.defineProperty(esporta, "isDataScheme", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.isDataScheme;
  }
}));
Object.defineProperty(esporta, "isPdfFile", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.isPdfFile;
  }
}));
Object.defineProperty(esporta, "loadScript", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.loadScript;
  }
}));
Object.defineProperty(esporta, "noContextMenu", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.noContextMenu;
  }
}));
Object.defineProperty(esporta, "normalizzaUnicode", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.normalizeUnicode;
  }
}));
Object.defineProperty(esporta, "renderTextLayer", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _text_layer.renderTextLayer;
  }
}));
Object.defineProperty(esporta, "setLayerDimensions", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _display_utils.setLayerDimensions;
  }
}));
Object.defineProperty(esporta, "ombra", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _util.shadow;
  }
}));
Object.defineProperty(esporta, "updateTextLayer", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _text_layer.updateTextLayer;
  }
}));
Object.defineProperty(esporta, "versione", ({
  enumerabile: vero,
  ottenere: funzione () {
    restituisci _api.version;
  }
}));
var _util = __w_pdfjs_require__(1);
variabile _api = __w_pdfjs_require__(2);
var _display_utils = __w_pdfjs_require__(6);
var _text_layer = __w_pdfjs_require__(26);
var _annotation_editor_layer = __w_pdfjs_require__(27);
var _tools = __w_pdfjs_require__(5);
var _annotation_layer = __w_pdfjs_require__(29);
var _worker_options = __w_pdfjs_require__(14);
var _xfa_layer = __w_pdfjs_require__(32);
const pdfjsVersion = '3.11.174';
const pdfjsBuild = 'ce8716743';
})();

/******/ restituisce __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=pdf.js.map