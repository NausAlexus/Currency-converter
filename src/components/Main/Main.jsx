import './Main.css';
import Items from '../Items/Items';

function Main() {

    let realDate = new Date();
    let realDay = realDate.getDate();
    let realMonth = (realDate.getMonth())+1;
    let realYear = realDate.getFullYear();
    let resultRealDate = `${realDay < 10 ? (realDay = '0' + realDay) : (realDay = realDay)}.${realMonth < 10 ? (realMonth = '0' + realMonth) : (realMonth = realMonth)}.${realYear}`;

	return (
    	<div  className='main-container'>
            <h3 className='main-title'>Curency converter on<br/> {resultRealDate}</h3>
            <Items/>
        </div>
	);

};

export default Main;