import React, { createContext, ReactNode, useState } from 'react'
import values from '../assets/data.json'

// export interface InterfaceData {
//   id: number
//   image: string
//   nom: string
//   description: string
//   habitant: string
//   hotel: string
//   revenu: string
//   superficie: string
// }

// interface BaseLayoutProps {
//   children?: ReactNode
// }

// export type DataContextType = {
//   datas: InterfaceData[]
// }

// export const DataContext = React.createContext<DataContextType | null>(null)

// const DataProvider: React.FC<BaseLayoutProps> = ({ children }) => {
//   const [datas, setDatas] = useState<InterfaceData[]>([
//     {
//       id: 0,
//       image: 'https://www.zupimages.net/up/22/18/ntz8.png',
//       nom: 'Copenhage',
//       description: 'Rådhuspladsen 1, 1550 København, Denmark',
//       habitant: '3.4M',
//       hotel: '500',
//       revenu: '70 000',
//       superficie: '88.25',
//     },

//     {
//       id: 1,
//       image: 'https://www.zupimages.net/up/22/18/sr7o.png',
//       nom: 'Tehran',
//       description: 'Tehran, Azadi Square, Iran',
//       habitant: '8.6M',
//       hotel: '400',
//       revenu: '30 000',
//       superficie: '720',
//     },

//     {
//       id: 2,
//       image: 'https://www.zupimages.net/up/22/18/nki0.png',
//       nom: 'Paris',
//       description: "Pl. de l'Hôtel de Ville, 75004 Paris",
//       habitant: '2.1M',
//       hotel: '7500',
//       revenu: '50 000',
//       superficie: '105.4',
//     },

//     {
//       id: 3,
//       image: 'https://www.zupimages.net/up/22/18/c6tw.png',
//       nom: 'London',
//       description: 'London SW1A 0AA, United Kingdom',
//       habitant: '8.98M',
//       hotel: '10 000',
//       revenu: '10 000',
//       superficie: '1.572',
//     },

//     {
//       id: 4,
//       image: 'https://www.zupimages.net/up/22/18/ffsu.png',
//       nom: 'Tokyo',
//       description: '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan',
//       habitant: '13.9M',
//       hotel: '7000',
//       revenu: '70 000',
//       superficie: '627.6',
//     },

//     {
//       id: 5,
//       image: 'https://www.zupimages.net/up/22/18/01qq.png',
//       nom: 'New-York',
//       description: 'New York, NY 10004, United States',
//       habitant: '8.4M',
//       hotel: '12 000',
//       revenu: '100 000',
//       superficie: '783.8',
//     },
//   ])
//   return (
//     <DataContext.Provider value={{ datas }}>{children}</DataContext.Provider>
//   )
// }

// export default DataProvider

// export const DestinationContext =
//   React.createContext<DestinationContextInterface | null>(null)

// const DestinationAppContext: DestinationContextInterface = {
//   data,
// }

// const DestinationContextProvider = (props: any) => (
//   <DestinationContext.Provider value={{ DestinationContextTest }}>
//     {props.children}
//   </DestinationContext.Provider>
// )

// export default DestinationContextProvider

// // export const DestinationContext = createContext

// // const destinationContextProvider = (props: any) => {
// //   const [infos, setInfos] = useState([])
// //   return (
// //     <DestinationContext.Provider>{props.children}</DestinationContext.Provider>
// //   )
// // }
