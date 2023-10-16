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
    text:true,
    style: 'thriller'
  },
  {
    dramaName: "Rugal",
    dramaImage: 'src/assets/rugal.jpg',
    dramaSynopsis: "Kang Gi Beom, un détective d'élite, enquête sur une organisation criminelle nommée Argos. En tentant de les faire tomber, il finit par perdre sa femme et ses yeux, arrachés par des hommes masqués envoyés par Argos. En se réveillant, il se retrouve à l'hôpital et accusé de meurtre. Il est alors approché par le NIS, qui le sélectionne pour devenir un membre de Rugal. Grâce à leur biotechnologie, Kang Gi Beom reçoit des yeux artificiels avec des capacités spéciales. Il se mettra alors en quête de détruire l'organisation criminelle.",
    isVu: true,
    text:true,
    style: 'thriller'
  },
  {
    dramaName: "Sketch",
    dramaImage: 'src/assets/sketch.jpg',
    dramaSynopsis: "Gang Dong Su est un détective d'élite qui a une très bonne intuition et de grandes capacités d'analyse. Pour ses différentes enquêtes, il travaillera avec la détective Yu Si Hyeon. Cette dernière a la capacité d'esquisser des dessins de ce qui se passera trois jours dans le futur.",
    isVu: true,
    text:true,
    style: 'thriller'
  },
  {
    dramaName: "I am not a robot",
    dramaImage: 'src/assets/robot.jpg',
    dramaSynopsis: "Tout être humain est un jour dans sa vie blessé au plus profond de son cœur. Chacun se protège comme il peut et développe une façon bien à lui de ne pas être blessé à nouveau.Kim Min Kyu est le PDG de KM Financial et il est l'un de ces nombreux humains au cœur brisé qui a vu dès son jeune âge les plus proches amis de ses parents le trahir à la mort de ces derniers. Pour se protéger contre le monde, il a développé une intolérance aux êtres humains qui lui provoque un terrible choc allergique dès qu'il entre en contacte avec l'un d'eux.Depuis 15 ans, il vit seul et a élaboré toutes sortes de techniques pour ne jamais se retrouver trop proche d'un être humain. Cependant, il découvre un jour l'existence d'une équipe scientifique secrète qui a élaboré un robot humanoïde qui pourrait tromper n'importe qui quant à sa véritable nature, son nom: Aji 3 capable de n'importe quelle prouesse humaine comme technologique, mais il apprend en plus de ça en être le nouveau propriétaire.La décision est donc prise, Kim Min Gyu prendra en charge le robot humanoïde ultra perfectionné. Sauf que, problème, la veille de la livraison, le robot tombe en panne. Hong Baek Gyun, le créateur de Aji 3 décide alors de demander de l'aide à la jeune femme qui lui a servi de modèle pour créer l'humanoïde. Pour ce faire, il demande à Jo Ji Ah de prendre temporairement la place du robot aux côtés de Kim Min Gyu. Mais avant d'être le modèle physique de Aji 3, elle est surtout l'un des nombreux êtres humains que porte ce monde et auxquels le jeune homme est fortement allergique.",
    isVu: true,
    text:true,
    style: 'lovers'
  },
  {
    dramaName: "Twenty five Twenty one",
    dramaImage: 'src/assets/twenty.jpg',
    dramaSynopsis: "2020. Sur un coup de tête, la jeune Kim Min Chae décide d'arrêter la danse. Après s'être disputée avec sa mère, elle se réfugie chez sa grand-mère. Installée dans la chambre de sa maman, elle trouve les vieux journaux intimes de celle-ci, ceux qu'elle tenait quand elle avait 18 ans. Par sa lecture, Min Chae découvre le passé de sa mère...1998. En pleine crise économique asiatique, Na Hee Do est une lycéenne passionnée d'escrime. Le jour où l'équipe de son lycée est dissoute à cause des dettes, Hee Do décide de saisir cette opportunité pour intégrer l'équipe de son idole : Go Yu Rim, médaillée d'or aux derniers Jeux Olympiques.Hee Do fait également la rencontre de Baek Yi Jin, un jeune homme dont le père a fait faillite. Entre lui, qui a tout perdu, et Hee Do, qui se tient à l'aube de son rêve, se crée un lien unique.À travers les rêves, les conflits, les déceptions et les accomplissements, tous naviguent dans leur époque et profitent de ce temps unique : la jeunesse.",
    isVu: true,
    text:true,
    style: 'lovers'
  },
  {
    dramaName: "Because this is my first life",
    dramaImage: 'src/assets/life.jpg',
    dramaSynopsis: "Nam Se Hee est un trentenaire qui a choisi d'être célibataire car pour lui, c'est la décision la plus logique et intelligente. Il a réussi à acheter sa propre maison, mais le remboursement de son prêt consomme tous ses revenus ne lui laissant plus grand-chose pour profiter de la vie. Yun Ji Ho a également la trentaine. Elle gagne juste assez d'argent pour s'en sortir et a abandonné l'idée de faire des rencontres amoureuses à cause de sa situation financière.Du fait de ses problèmes financiers, Ji Ho se retrouve à louer une chambre dans la maison de Se Hee. Ils doivent alors loger sous le même toit, ce malgré leurs différents modes de vie et leur absence de point commun. ",
    isVu: true,
    text:true,
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