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
    isVu: true,
    style: 'thriller'
  },
  {
    dramaName: "Rugal",
    dramaImage: 'src/assets/rugal.jpg',
    dramaSynopsis: "Kang Gi Beom, un détective d'élite, enquête sur une organisation criminelle nommée Argos. En tentant de les faire tomber, il finit par perdre sa femme et ses yeux, arrachés par des hommes masqués envoyés par Argos. En se réveillant, il se retrouve à l'hôpital et accusé de meurtre. Il est alors approché par le NIS, qui le sélectionne pour devenir un membre de Rugal.",
    isVu: true,
    style: 'thriller'
  },
  {
    dramaName: "Sketch",
    dramaImage: 'src/assets/sketch.jpg',
    dramaSynopsis: "Gang Dong Su est un détective d'élite qui a une très bonne intuition et de grandes capacités d'analyse. Pour ses différentes enquêtes, il travaillera avec la détective Yu Si Hyeon. Cette dernière a la capacité d'esquisser des dessins de ce qui se passera trois jours dans le futur.",
    isVu: true,
    style: 'thriller'
  },
  {
    dramaName: "I am not a robot",
    dramaImage: 'src/assets/robot.jpg',
    dramaSynopsis: "Tout être humain est un jour dans sa vie blessé au plus profond de son cœur. Chacun se protège comme il peut et développe une façon bien à lui de ne pas être blessé à nouveau.",
    isVu: true,
    style: 'lovers'
  },
  {
    dramaName: "Twenty five Twenty one",
    dramaImage: 'src/assets/twenty.jpg',
    dramaSynopsis: "2020. Sur un coup de tête, la jeune Kim Min Chae décide d'arrêter la danse. Après s'être disputée avec sa mère, elle se réfugie chez sa grand-mère. Installée dans la chambre de sa maman, elle trouve les vieux journaux intimes de celle-ci.",
    isVu: true,
    style: 'lovers'
  },
  {
    dramaName: "Because this is my first life",
    dramaImage: 'src/assets/life.jpg',
    dramaSynopsis: "Nam Se Hee est un trentenaire qui a choisi d'être célibataire car pour lui, c'est la décision la plus logique et intelligente. Il a réussi à acheter sa propre maison, mais le remboursement de son prêt consomme tous ses revenus.",
    isVu: true,
    style: 'lovers'
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