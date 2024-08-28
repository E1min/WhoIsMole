import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Players from './Players';


const words = [
  "Dağ", "Kompyuter", "Coca-Cola", "Armud", "Avtobus", "Ayran", 
  "Telefon", "Televizor", "Yol", "Qaz", "Qapı", "Pəncərə", 
  "Masa", "Kitab", "Qələm", "Stol", "Dəftər", "Divan", 
  "Xalça", "Soyuducu", "Soba", "Fırın", "Qəhvə", "Çay", 
  "Tərəzi", "Paltar", "Ayaqqabı", "Kəpənək", "Günəş", "Ulduz", 
  "Ay", "Yağış", "Külək", "Bulud", "Çiçək", "Müharibə", 
  "Ağac", "Meşə", "Çəmən", "Dəniz", "Çay", 
  "Göl", "Bulaq", "Səhər", "Günorta", "Axşam", "Gecə", 
  "Ev", "Otaq", "Yataq", "Mətbəx", "Hamam", "Balkon", 
  "Müəllim", "Şagird", "Tələbə", "Qapı", "Pəncərə", "Qulaq", 
  "Burun", "Ağız", "Diş", "Əl", "Ayaq", "Barmaq", 
  "Gəmi", "Kürək", "Boyun", "Saç", "Göz", "Kirpik", 
  "Qaş", "Dodaq", "Diş", "Dilim", "Diş", "Çiyin", 
  "Sığorta", "Diz", "Ayaq", "Corab", "Şalvar", 
  "Köynək", "Jaket", "Palto", "Şapka", "Çanta", "Saat", 
  "Zinət", "Zərgərlik", "Qaş", "Boyunbağı", "Üzük", "Mamolu", 
  "Eynək", "Gözlük", "Linza", "Maşın", "Təyyarə", "Gəmi"
];


const Play = () => {
  const { state } = useLocation();
  const { players } = state;
  const [assignedWords, setAssignedWords] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  useEffect(() => {
    let rndWord = Math.floor(Math.random() * words.length+1);
    let rndPlayer = Math.floor(Math.random() * players.length);

    const newAssignedWords = players.map((player, index) => ({
      player,
      word: index === rndPlayer ? "Sən casussan" : words[rndWord]
    }));
    setAssignedWords(newAssignedWords);
  }, [players]);

  const handleNextPlayer = () => {
    setCurrentPlayerIndex(prevIndex => (prevIndex + 1) % players.length);
  };

  return (
    <div className='text-center'>
      <div className="logo">
        <img src="./src/assets/images/logo.png" alt="" />
      </div>
      <div className="playerzone">
      {assignedWords.length > 0 && (
        <Players 
          assigned={assignedWords[currentPlayerIndex]} 
          onNext={handleNextPlayer} 
        />
      )}
      </div>
    </div>
  );
};

export default Play;
