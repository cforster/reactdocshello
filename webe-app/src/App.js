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

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
            <Profile />
        </div>
    );
}