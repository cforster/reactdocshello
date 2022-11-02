import { useState } from 'react';

const user ={
    name: 'Hedy Lamarr',
    imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNDM3MzQ0NzgyOTE5NTMy/bombshell_hedylamarr1.jpg',
    imageSize: 90,
}

function Profile() {
    return(
        <>
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </>
    )
}

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        alert('You clicked me!');
        setCount(count+1);
    }
    
    return (
        <button onClick={handleClick}>
            I'm a button that's been clicked {count} times
        </button>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
            <MyButton />
            <Profile />
            <ShoppingList />
        </div>
    );
}