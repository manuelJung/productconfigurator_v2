import React from 'react'

import getUrlParam from './getUrlParam'


import font1 from 'assets/fonts/Blockschrift.png'
import font2 from 'assets/fonts/Schreibschrift.png'
import font3 from 'assets/fonts/Altdeutsch.png'
import font4 from 'assets/fonts/Modern.png'
import font5 from 'assets/fonts/Handschrift.png'
import font6 from 'assets/fonts/Kursivschrift.png'
import font7 from 'assets/fonts/Designschrift.png'


const appConfig = {
    productName: getUrlParam("name") || 'no product name',
    productNumber: getUrlParam("productnumber") || '',
    category: getUrlParam("category"),
    postUrl: "./sendmail.php"
}

const formConfigAll = {
    fields: ["textfirst", "textsecound", "position", "font", "color", "fontsize", "firm", "name", "telefon", "email", "usertext", "logocheck", "address", "zipcode", "city"],
    fontSizes: ["1,5 cm", "2,5 cm", "3,5 cm"],
    colors: [
        {label: "Weiß",       value: "white"},
        {label: "Schwarz",    value: "black"},
        {label: "Sekt",       value: "#e2d9c2"}, 
        {label: "Gelb",       value: "#f6be00"}, 
        {label: "Mango",      value: "#ff9e1b"},
        {label: "Rot",        value: "#a6192e"}, 
        {label: "Bordeaux",   value: "#9b2242"},
        {label: "Brombeer",   value: "#a20067"},
        {label: "Pflaume",    value: "#612c51"},
        {label: "Apfelgrün",  value: "#a4d65e"},
        {label: "Moosgrün",   value: "#59621d"}, 
        {label: "Türkis",     value: "#0082ba"},
        {label: "Blau",       value: "#002f6c"},
        {label: "Sand",       value: "#94795d"},
        {label: "Taupe",      value: "#a69f88"}, 
        {label: "Coca",       value: "#4e3629"}, 
        {label: "Hellgrau",   value: "#898d8d"},
        {label: "Dunkelgrau", value: "#63666a"}
    ],
    fonts: [
        { label: "Blockschrift",    value: font1},
        { label: "Schreibschrift",  value: font2},
        { label: "Altdeutsch",      value: font3},
        { label: "Modern",          value: font4},
        { label: "Handschrift",     value: font5},
        { label: "Kursivschrift",   value: font6},
        { label: "Designschrift",   value: font7}
    ],
    infoTextFirst: [
        <div key="1">Gerne besprechen wir Ihren Einstickungs-Wunsch persönlich mit Ihnen!</div>,
        <div key="2">Bitte teilen Sie uns Ihre Kontaktdaten sowie Ihre Telefonnummer und E-Mail-Adresse mit. 
        Unser Serviceteam wird sich zeitnah bei Ihnen melden!</div>
    ],
    infoTextSecond: [
        <div key="1">Hier können Sie uns Ihre Wünsche, Fragen und nähere Angaben zu Größe, Farbe und Anzahl Ihres Wunschprodukts mitteilen (optional).</div>
    ],
    // if no category was found
    positions: [],
    userTextPlaceholder: ""
}

const formConfigByCategory = {
    'Kochjacken': {
        positions: [
            "links in Brusthöhe",
            "rechts in Brusthöhe",
            "auf der Brusttasche",
            "überhalb der Brusttasche",
            "auf dem linken Oberarm",
            "auf dem rechten Oberarm",
            "auf dem linken Kragen",
            "auf dem rechten Kragen",
            "mittig auf dem Rücken (Schulterblatthöhe)"
        ],
        userTextPlaceholder: "Beispiel:\nHallo, ich würde gerne diese Kochjacke in Größe 50 langarm in den Farben schwarz, weiß und grau jeweils 4 mal mit dem angegebenen Text besticken lassen"
    },
    'Hemden': {
        positions: [
            "links in Brusthöhe",
            "rechts in Brusthöhe",
            "überhalb der Brusttasche",
            "auf dem linken Oberarm",
            "auf dem rechten Oberarm",
            "auf dem linken Kragen",
            "auf dem rechten Kragen",
            "mittig auf dem Rücken (Schulterblatthöhe)"
        ],
        userTextPlaceholder: "Beispiel:\nHallo, ich würde gerne dieses Hemd in Größe 40 langarm in den Farben schwarz und weiß jeweils 4 mal mit dem angegeben Text besticken lassen."
    },
    'Blusen': {
        positions: [
            "links in Brusthöhe",
            "rechts in Brusthöhe",
            "überhalb der Brusttasche",
            "auf dem linken Oberarm",
            "auf dem rechten Oberarm",
            "auf dem linken Kragen",
            "auf dem rechten Kragen",
            "mittig auf dem Rücken (Schulterblatthöhe)"
        ],
        userTextPlaceholder: "Beispiel:\nHallo, ich würde gerne diese Bluse in Größe 36 langarm in den Farben schwarz und weiß jeweils 4 mal mit dem angegeben Text besticken lassen."
    },
    'Polos & Shirts': {
        positions: [
            "links in Brusthöhe",
            "rechts in Brusthöhe",
            "auf dem linken Oberarm",
            "auf dem rechten Oberarm",
            "auf dem linken Kragen",
            "auf dem rechten Kragen",
            "mittig auf dem Rücken (Schulterblatthöhe)"
        ],
        userTextPlaceholder: "Beispiel:\nHallo, ich würde gerne dieses Polo-Shirt in Größe 36 in den Farben schwarz und weiß jeweils 4 mal mit dem angegeben Text besticken lassen."
    }
}

const exampleImageUrls = {
    'Kochjacken': require('assets/demo-kochjacke.png'),
    'Hemden': require('assets/demo-hemd.png'),
    'Blusen': require('assets/demo-bluse.png'),
    'Polos & Shirts': require('assets/demo-polo.png')
}

const priceImageUrls = {
    'Kochjacken': require('assets/preistabelle-kochjacke.png'),
    'Hemden': require('assets/preistabelle-rest.png'),
    'Blusen': require('assets/preistabelle-rest.png'),
    'Polos & Shirts': require('assets/preistabelle-rest.png')
}

const infoText = [
  <div key="3">Es handelt sich hierbei nicht um eine rechtskräftige Bestellung. Nach Absenden der Abfrage bekommen Sie von uns ein Angebot für die Einstickung und die zu bestickende Ware.</div>,
  <div key="4"><b>Sollten Sie Fragen haben oder möchten Ihre Anfrage und eine Bestellung gleich mit uns besprechen, können Sie unter 0800/6288450* jederzeit einen unserer Servicemitarbeiter erreichen.</b></div>,
  <div key="5">(*Kostenfrei aus dem dt. Fest- und Mobilfunknetz)</div>
]

const config = {
    ...appConfig,
    form: {
        ...formConfigAll,
        ...formConfigByCategory[appConfig.category]
    },
    exampleImageUrl: exampleImageUrls[appConfig.category],
    priceImageUrl: priceImageUrls[appConfig.category],
    infoText: infoText
}

export default config