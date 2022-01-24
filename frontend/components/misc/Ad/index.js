import React from "react"
import { AdMobBanner } from "expo-ads-admob"

// adUnitID="ca-app-pub-1115471354920646/4084998946"

const Ad = () => {
    return (
        <AdMobBanner
            bannerSize="mediumRectangle"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            servePersonalizedAds={false}
        />
    )
}

export default Ad
