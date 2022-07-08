import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import ItemView from './ItemView';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.98)

export default ViewPager = () => {

    const data = [1, 2,3,4,5,6,7,8,9,10]
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    return (
        <View >
            <Carousel
                data={data}
                renderItem={ItemView}
                layout='default'
                layoutCardOffset={1}
                itemWidth={ITEM_WIDTH}
                sliderWidth={SLIDER_WIDTH}
                useScrollView={true}
                ref={isCarousel}
               
                loop={true}

            />

            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>

    )
}