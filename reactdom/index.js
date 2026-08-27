// console.log('hello..');


const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
const h2 = React.createElement(`h2`, {style: { color: 'red', margin: '15px 0' }}, "Name: CHAND AHMAD");
const h1 = React.createElement(`h1`, {style: { style: { color: 'red', margin: '0 0 20px 0' } }}, "ABES ENGINEERING COLLEGE");
const h3Course = React.createElement(`h3`, { style: { color: 'red', margin: '15px 0' } }, "B.Tech CSE 2025-2028");
const h3Roll = React.createElement(`h3`, {style: { style: { color: 'red', margin: '15px 0' } }}, "Roll No: 2025CSE1001");
const h3Branch = React.createElement(`h3`,   { style: { color: 'red', margin: '15px 0' } }, "Branch: Computer Science and Engineering");
const img=React.createElement(`img`, {src: `https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsb2ZmaWNlMTRfcGhvdG9fb2ZfeW91bmdfYWZyaWNhbl9hbWVyaWNhbl9zdHVkZW50X2JveV9ob18xZWEwMGU0MC1kZDFiLTQyOTAtYWFkYi1kNGU2YmZjYzVlMDAucG5n.png`,  style: {
            width: '120px',
            height: '140px',
            objectFit: 'cover',
            position: 'absolute',
            top: '25px',
            right: '25px',
            border: '2px solid red'
        }});
const div = React.createElement(`div`, {
        style: {
            background: 'lightgray',
            border: '2px solid red',
            width: '700px',
            height: '350px',
            padding: '25px',
            position: 'relative',
            boxSizing: 'border-box',
            borderRadius: '10px'
        }
    },h1,h2,h3Course,h3Roll,h3Branch,img)

root.render(div);
