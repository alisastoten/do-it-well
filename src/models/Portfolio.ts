import hantelPic from '../assets/hantel.jpg';
import veebipoedPic from '../assets/veebipoed.jpg';
import erplycommercePic from '../assets/erplycommerce.png';
import itukPic from '../assets/ituk.jpg';
import proessencePic from '../assets/proessence.jpg';

export const jobs = [
  {
    id: 1,
    img: itukPic,
    filename: "ituk",
    name: 'ITÜK',
    description: 
    [
      'Ürituse disain - Facebook ürituse kuvand, plakatid, ajakava disain, kleepsud, disain särkidele.',
      'Turundusega abistamine.' 
    ],
    topic: 
    [
      'Ürituste kuvand',
      'Turundus'
    ],
    button: 'Uuri ürituste kuvandi loomisest',
    desciptionLong: 'ITÜK on TalTechi IT-teaduskonna üliõpilaskogu. Abistasime neid ürituste kuvandi loomisel. Mida efektsem disain, seda rohkem tuleb inimesi ka kohale.',
  },
  {
    id: 2,
    img: veebipoedPic,
    filename: "veebipoed",
    name: 'Veebipoed.ee',
    description: 
    [
      'Meta reklaam', 
      'Blogi bännerid.', 
      'Sotsiaalmeedia kanalite bännerid.',
      'Logo täiendamine.'
    ],
    topic: 
    [
      'Reklaam', 'Brändikuvand', 'Blogi', 'Logo', 'SEO'
    ],
    button: 'Vaata lähemalt',
    desciptionLong: 'Veebipoed.ee loob e-poode ja keerukamaid veebilahendusi. Seadistasime neile reklaame, et nad jõuaksid oma õige kliendini.',
  },
  {
    id: 3,
    img: erplycommercePic,
    filename: "erplycommerce",
    name: 'Erplycommerce.ee',
    description: 
    [
      'Kodulehe disainimine Figmas', 
      'Arendus Divi builder-iga Wordpressis', 
      'Logo ja favicon loomine'
    ],
    topic: 
    [
      'Kodulehe disain', 'Arendus', 'Logo', 'SEO'
    ],
    button: 'Uuri ErplyCommerce lehe loomise kohta',
    desciptionLong: 'ErplyCommerce pakub kiiret lahendust neile, kellel on olemas Erply, aga pole veel e-poodi.',
  },  
  {
    id: 4,
    img: hantelPic,
    filename: "hantel",
    name: 'Hantel.ee',
    description: 
    [
      'Meta reklaam', 
      'Muud disaini tööd'
    ],
    topic: 
    [
      'Reklaam',
      'Turunduskonsultatsioonid'
    ],
    button: 'Vaata Hantel.ee reklaame',
    desciptionLong: 'Hantel.ee müüb jõusaali- ja kardioseadmeid, nii uusi kui ka kasutatud. Tegime reklaame Eesti ja Soome jaoks, et suurendada müüki.',
  },
  {
    id: 5,
    img: proessencePic,
    filename: "proessence",
    name: 'Bodycare.ee',
    description: 
    [
      'Meta reklaam',  
      'Sotsiaalmeedia postitused', 
    ],
    topic: 
    [
      'Reklaam', 'Brändikuvand', 'Logo', 'SEO'
    ],
    button: 'Vaata lähemalt',
    desciptionLong: 'Bodycare.ee müüb kosmeetikatooteid, mis on päris Saksamaalt ja mida keegi Eestis väga ei teadnud. Tegime neile valmis reklaamid, korrastasime sotsiaalmeediat ja e-poe kuvandit.',
  }
];