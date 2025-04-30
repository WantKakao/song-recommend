import { useState } from 'react';
import recommendations from "./assets/recommendations"; // 데이터 가져오기

function App() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState("");

  const handleNextStep = (choice) => {
    if (choice) {   // choice가 있으면, setAnswer로 상태 업데이트
      setAnswer(choice);
    };
    setStep((current_step) => current_step + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      {step === 1 && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">당신은 오늘 점심을 드셨습니까?</h1>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleNextStep}
              className="px-6 py-3 bg-green-400 hover:bg-green-500 text-white rounded-xl transition"
            >
              네
            </button>
            <button
              onClick={handleNextStep}
              className="px-6 py-3 bg-red-400 hover:bg-red-500 text-white rounded-xl transition"
            >
              아니오
            </button>
          </div>
        </div>
      )}


      {step === 2 && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">둘 중 더 선호하는 음악은?</h1>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleNextStep('댄스')}
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl transition"
            >
              무조건 신나는 댄스!
            </button>
            <button
              onClick={() => handleNextStep('발라드')}
              className="px-6 py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-xl transition"
            >
              차분한 발라드
            </button>
          </div>
        </div>
      )}


      {step === 3 && (
        <div>
          {answer === "댄스" ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-6">댄스를 좋아하는 당신! 그중에서도?</h1>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleNextStep('사랑')}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl transition"
                >
                  달달한 사랑노래
                </button>
                <button
                  onClick={() => handleNextStep('상큼')}
                  className="px-6 py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-xl transition"
                >
                  상큼하고 톡쏘는 노래
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-6">감성적인 발라더인 당신! 그렇다면?</h1>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleNextStep('울음')}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl transition"
                >
                  울고싶을때 듣는 노래
                </button>
                <button
                  onClick={() => handleNextStep('복수')}
                  className="px-6 py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-xl transition"
                >
                  복수 마려운 노래
                </button>
              </div>
            </div>
          )}
        </div>
      )}


      {step === 4 && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">
            {answer} 장르의 추천된 노래들:
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations[answer]?.map((song, index) => (
              <div key={index} className="bg-gray-800 text-white p-4 rounded-xl">
                <img
                  src={song.albumImage}
                  alt={song.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{song.title}</h3>
                <p className="mb-4">Artist: {song.artist}</p>
                <a
                  href={song.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  유튜브에서 듣기
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
