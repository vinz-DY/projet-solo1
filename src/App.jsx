import { useState } from 'react'
import React from 'react';
import KCard from './assets/components/k_card';
import './App.css';
import './assets/components/Kcard.css'
import NavBar from './assets/components/navbar';
import DramaList from './assets/components/dramaList';

const dramasItems = [
  {
    dramaName: "Mouse",
    dramaImage: "src/assets/mouse.jpg",
    dramaSynopsis: "Les meurtres d'un tueur en série laissent la nation dans la peur et le chaos. Jeong Ba Reum est un policier débutant, honnête avec une âme de justicier Sa vie va être totalement bouleversée après un face à face avec ce tueur en série, ce qui va les pousser, lui et son partenaire Go Mu Chi, à déterrer la vérité derrière les comportements psychopathes.",
    isVu: false,
    style: 'thriller'
  },
  {
    dramaName: "Rugal",
    dramaImage: 'src/assets/rugal.jpg',
    dramaSynopsis: "Kang Gi Beom, un détective d'élite, enquête sur une organisation criminelle nommée Argos. En tentant de les faire tomber, il finit par perdre sa femme et ses yeux, arrachés par des hommes masqués envoyés par Argos. En se réveillant, il se retrouve à l'hôpital et accusé de meurtre. Il est alors approché par le NIS, qui le sélectionne pour devenir un membre de Rugal. Grâce à leur biotechnologie, Kang Gi Beom reçoit des yeux artificiels avec des capacités spéciales. Il se mettra alors en quête de détruire l'organisation criminelle.",
    isVu: false,
    style: 'thriller'
  },
  {
    dramaName: "Sketch",
    dramaImage: 'src/assets/sketch.jpg',
    dramaSynopsis: "Gang Dong Su est un détective d'élite qui a une très bonne intuition et de grandes capacités d'analyse. Pour ses différentes enquêtes, il travaillera avec la détective Yu Si Hyeon. Cette dernière a la capacité d'esquisser des dessins de ce qui se passera trois jours dans le futur.",
    isVu: false,
    style: 'thriller'
  },
]





function App() {
  return (
    <>
    <div className='navbar'>
     <NavBar>Dramas</NavBar>
     <NavBar>Thriller</NavBar>
     <NavBar>Lovers</NavBar>
     <NavBar>Horror</NavBar>
    </div>
    <div className='container' >
      <DramaList dramasItem ={dramasItems} />
    </div>
      </>
  );
}

export default App;
//ok 