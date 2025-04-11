function MobilePage() {
  return (
    <div className="bg-background flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4">
          접근안내 🚫
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
          이 페이지는 모바일에서 접근할 수 없습니다. <br />
          PC로 이용해주시기 바랍니다.
        </p>
      </div>
    </div>
  );
}

export default MobilePage;
