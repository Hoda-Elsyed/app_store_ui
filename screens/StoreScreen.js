import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon, StarIcon } from 'react-native-heroicons/solid'
import { storeColors } from '../theme'
import GradientButton from '../components/gradientButton'
import GameCard from '../components/gameCard'
// import storeColors from '../theme'


const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];
const featured = [
  {
    id: 1,
    title: 'Zooba',
    image: require('../assets/images/zooba.png'),
    downloads: '200k',
    stars: 4
  },
  {
    id: 2,
    title: 'Subway Surfer',
    image: require('../assets/images/subway.png'),
    downloads: '5M',
    stars: 4
  },
  {
    id: 3,
    title: 'Free Fire',
    image: require('../assets/images/freeFire.png'),
    downloads: '100M',
    stars: 3
  },

  {
    id: 4,
    title: "Alto's Adventure",
    image: require('../assets/images/altosAdventure.png'),
    downloads: '20k',
    stars: 4
  },
]
const games = [
  {
    id: 1,
    title: 'Shadow Fight',
    image: require('../assets/images/shadowFight.png'),
    downloads: '20M',
    stars: 4.5
  },
  {
    id: 2,
    title: 'Valor Arena',
    image: require('../assets/images/valorArena.png'),
    downloads: '10k',
    stars: 3.4
  },
  {
    id: 3,
    title: 'Frag',
    image: require('../assets/images/frag.png'),
    downloads: '80k',
    stars: 4.6
  },
  {
    id: 4,
    title: "Zooba Wildlife",
    image: require('../assets/images/zoobaGame.png'),
    downloads: '40k',
    stars: 3.5
  },
  {
    id: 4,
    title: "Clash of Clans",
    image: require('../assets/images/clashofclans.png'),
    downloads: '20k',
    stars: 4.2
  },
];


export default function StoreScreen() {
  const [activecategory, setActiveCategory] = useState('Action')
  const [selectedGame, setSelectedGame] = useState(null)
  return (
    <LinearGradient
      colors={['rgba(58,131,244,0.4)', 'rgba(9,181,211,0.4)']}
      className='w-full flex-1'
    >
      <SafeAreaView>
        <View className="container mt-5">
          <View className='flex-row items-center justify-between mx-4'>
            <Bars3CenterLeftIcon color={storeColors.text} size={30} />
            <BellIcon color={storeColors.text} size={30} />
          </View>
          {/* categories */}
          <View className='mx-4 mt-3 space-y-3'>
            <Text className="font-bold text-3xl" style={{ color: storeColors.text }}>Browse Games</Text>
            <View className="">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  categories.map((cat => {
                    if (cat == activecategory) {
                      return <GradientButton key={cat} value={cat} containerClass="mr-2" />
                    } else {
                      return (
                        <TouchableOpacity
                          key={cat}
                          onPress={() => setActiveCategory(cat)}
                          className={"p-3 px-4 rounded-full mr-2 bg-blue-200"} >
                          <Text >{cat}</Text>
                        </TouchableOpacity>
                      )
                    }
                  }))
                }
              </ScrollView>
            </View>
          </View>

          {/* featured row */}
          <View className='mx-2 mt-3 space-y-4'>
            <Text className="ml-4 font-bold text-lg" style={{ color: storeColors.text }}>Featured Games</Text>
            <View className="">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  featured.map(((item, index) => {
                    return (
                      <GameCard key={index} game={item} />

                    )
                  }))
                }
              </ScrollView>
            </View>
          </View>

          {/* top Action Games list */}

          <View className="m-4 ">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="font-bold text-lg" style={{ color: storeColors.text }}>Top Action Games</Text>
              <TouchableOpacity>
                <Text className='text-blue-600 font-bold'>See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
            style={{height:320}}
              showsVerticalScrollIndicator={false}
            >
              {
                games.map((game, index) =>{
                
                let bg = game.id === selectedGame ? 'rgba(255, 255, 255, 0.4) ' : 'transparent'
                return (
                  <TouchableOpacity
                   onPress={() => setSelectedGame(game.id)}
                   style={{backgroundColor: bg}}
                  className="flex-row p-2 items-center mb-4 rounded-xl" key={index}>
                    <Image className='w-20 h-20 rounded-2xl' source={game.image} />
                    <View className='ml-3 flex-1 justify-center space-y-2' >
                      <Text className='font-semibold'>{game.title}</Text>
                      <View className='flex-row space-x-3'>
                        <View className="flex-row items-center">
                          <Image className="w-4 h-4 opacity-80 mr-2" source={require('../assets/images/fullStar.png')} />
                          <Text className='text-xs text-gray-700'>{game.stars} stars</Text>
                        </View>
                        <View className="flex-row  space-x-2">
                          <ArrowDownTrayIcon className='mr-2' size='15' color={'blue'} />
                          <Text className='text-xs text-gray-700'>{game.downloads}</Text>
                        </View>
                      </View>
                    </View>
                    <View className='justify-center items-center'> 
                      <GradientButton value='play' buttonClass="py-2 px-5" />
                    </View>
                  </TouchableOpacity>
                )}
                )
              }
            </ScrollView>
          </View>

        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}