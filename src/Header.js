import React from 'react'
import './header.css'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FlashOnIcon from '@material-ui/icons/FlashOn';
function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon/>
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon/>
                    <p>Collection</p>
                </div>
                <div className="header__icon">
                        <SearchIcon/>
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PermIdentityIcon/>
                    <p>Account</p>
                </div>
               
                
               
               
               
                
                

            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACjCAMAAAAzSxLiAAAAYFBMVEUAAAD///9TU1Py8vLT09PKysr8/Pz39/c0NDTY2NicnJzQ0NDm5uZ5eXnr6+u9vb1OTk7ExMSoqKhDQ0OUlJSHh4cgICBdXV3g4OAUFBSvr68+Pj5wcHArKytmZmYMDAyXJWeEAAADKUlEQVR4nO3c6XLaMBRAYQMBs6TGGAhbSN7/LTM0bca6V5bk66XD9Hx/LXk5Ja4x4CwDAAAAAAAAAAAAAAAAAAAAAAAA8Hz2U2Hk7cvN70fevslqIoy8fbn5zcjbN3kRO52PvH0ZbT7y9k2IZkA0A6IZEM2AaAZEMyCaAdEMiGZANAOiGRDNgGgGRDMgmgHRDIhmQDQDohmoaG/reTFzFKvtoelDqunCHZu/qyFLOeRQXxqMtsndqSu9AzsxpLCnSCejNVnsTr7pUznulxqylEPW9aXBaPKjsle9Axu5n51qJEqN9tjlDz2daFH6hEO0uNmbmE60BPmnO51oKc7udKIlcQ6ZaIku9elES1PVpxMtjfNGi2iJytp0oiWqHzTREu1q04mWqL7rRPvjelr+KNd6+aw2nWjfSjFiJgfU94tovx3liBvRJBVNDzkTTUj4jGBLNIFoBkQzIJoB0QyIZkA0A6IZEM2g72gHNb3sL5pn5+SQp4x2VtOr/qKpmwnZRY54hmjqZaTe8O/DI4LR1Btj9Z0g+df5FNHUCWsyqZzP+I56gHPaC0bbqbmF852vvb6x5Tnt9a9jNHXQD7PiL3Uv7uEUmu9Eu3pmL35WXiw8i1+GiCR1jVb4soQ5r8RgNM/LNOY6RCSpazT9FxQzc1YulzrR1P3POH3JM4Cu0dq/GLbOyuVS9ytw3j/vIPldsEF0jeY9qQW9B6e70XwntSB9xTOEztHa/n2KawK52I2mr1ci1Cccg+gczXPREVS5K5eLxTdU1XVYRM91GnSOphaHyYvPSLSW/yT6Tdwgukdrd7aW/7tFomWHNisf5UcEWS/R2rwadnLlsWitzpnL3rKE9RDN8wa0if7JSTRai2ren4cMoY9o2T3xfYHn4WjxaJnn6yT/tlk/0RIPzHeaToiWla8JK1+Ncln7rado2WeVR45q6z2qlGhZ9qHurAmF/iHbgBIeb6hOKg2rmlYr332Hh3zedNUpRzY93vBy3DWeA86Vujk5rIQHad7aPGvzVsrR4YdjtnqQ5t2z8vKedJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/m9fxKozgvAwwMwAAAAASUVORK5CYII="
            alt=""></img>
        </div>
    )
}

export default Header
