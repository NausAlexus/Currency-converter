import './Item.css';

function Item(props) {

    let itemText = Number(props.Curency).toFixed(2);

	return (
    	<div  className='item-container'>
            <div>
                <img src={props.imgURL} alt={props.nameCurency} />
                <p className='name-curency'>{props.nameCurency}</p>
            </div>
            <p className='item-text'>{ isNaN(itemText) ? 'Select curency' : itemText}</p>
        </div>
	);

};

export default Item;