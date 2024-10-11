import React, { useEffect, useState } from 'react';
import './Items.css';
import Item from '../Item/Item';

function Items() {

    // Получение данных из API
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const URL = "https://v6.exchangerate-api.com/v6/c62d69c80bc075abbaa88196/latest/USD";

    useEffect(() => {
      fetch(URL)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.conversion_rates);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        return
    }, [])
    
    let usd = items.USD;
    let eur = items.EUR;
    let byn = items.BYN;
    let rub = items.RUB;

    // let usd = 1;
    // let eur = 0.8953;
    // let byn = 3.2149;
    // let rub = 92.4699;

    // const imgUSD = '../../../public/USD.png';
    // const imgEUR = '../../../public/EUR.png';
    // const imgBYN = '../../../public/BYN.png';
    // const imgRUB = '../../../public/RUB.png';

    const imgUSD = '../img/USD.png';
    const imgEUR = '../img/EUR.png';
    const imgBYN = '../img/BYN.png';
    const imgRUB = '../img/RUB.png';

    const [selectValue, setSelectValue] = useState('');

    let [usdUpdate, setUsdUpdate] = useState(usd);
    let [eurUpdate, setEurUpdate] = useState(eur);
    let [bynUpdate, setBynUpdate] = useState(byn);
    let [rubUpdate, setRubUpdate] = useState(rub);
    
    const [valueUser, setValueUser] = useState(1)
    const handleInputValue = (e) => {
        setValueUser(Number(e.target.value))
    }

    const selectCurency = (e) => {
        setSelectValue(e.target.value)
    }

    console.log(selectValue);
    console.log(valueUser);
  
    const handleClick = () => {
        if (selectValue === "usd") {
            setUsdUpdate(valueUser);
            setEurUpdate(valueUser * eur);
            setBynUpdate(valueUser * byn);
            setRubUpdate(valueUser * rub);
        } else if (selectValue === "eur") {
            setUsdUpdate(valueUser/eur);
            setEurUpdate(valueUser);
            setBynUpdate((valueUser/eur) * byn);
            setRubUpdate((valueUser/eur) * rub);
        } else if (selectValue === "byn") {
            setUsdUpdate(valueUser/byn);
            setEurUpdate((valueUser/byn) * eur);
            setBynUpdate(valueUser);
            setRubUpdate((valueUser/byn) * rub);
        } else if (selectValue === "rub") {
            setUsdUpdate(valueUser/rub);
            setEurUpdate((valueUser/rub) * eur);
            setBynUpdate((valueUser/rub) * byn);
            setRubUpdate(valueUser);
        }
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className='loader'>Load...</div>;
    } else {
        return (
            <ul className='items-container'>
                <li>
                    <select onChange={selectCurency} className='select-curency' name="select-curency" defaultValue={"chois"}>
                        <option disabled="disabled" value="chois">Curency</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="byn">BYN</option>
                        <option value="rub">RUB</option>
                    </select>
                    <input onChange={handleInputValue} className='input-curency' type="number" defaultValue={valueUser} />
                </li>
                <li><Item imgURL={imgUSD} nameCurency={'USD'} Curency={usdUpdate}/></li>
                <li><Item imgURL={imgEUR} nameCurency={'EUR'} Curency={eurUpdate}/></li>
                <li><Item imgURL={imgBYN} nameCurency={'BYN'} Curency={bynUpdate}/></li>
                <li><Item imgURL={imgRUB} nameCurency={'RUB'} Curency={rubUpdate}/></li>
                <li className='button-flex'>
                    <button className='button-convert' onClick={handleClick}>Convert</button>
                </li>
            </ul>
        );
    }

};

export default Items;