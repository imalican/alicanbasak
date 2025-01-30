export const TechStack = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-6 p-4">
      {/* İlk sütun */}
      <div className="translate-y-12 md:translate-y-0">
        <MongoDBIcon />
      </div>

      {/* İkinci sütun */}
      <div className="-translate-y-8 md:translate-y-0">
        <FirebaseIcon />
      </div>

      {/* Üçüncü sütun */}
      <div className="translate-y-4 md:translate-y-0">
        <ReduxIcon />
      </div>

      {/* Dördüncü sütun */}
      <div className="-translate-y-16 md:translate-y-0">
        <NextJsIcon />
      </div>

      {/* Beşinci sütun */}
      <div className="translate-y-20 md:translate-y-0">
        <TailwindIcon />
      </div>

      {/* Altıncı sütun */}
      <div className="-translate-y-4 md:translate-y-0">
        <GraphQLIcon />
      </div>

      {/* Yedinci sütun */}
      <div className="translate-y-8 md:translate-y-0">
        <TypeScriptIcon />
      </div>

      {/* Sekizinci sütun */}
      <div className="-translate-y-12 md:translate-y-0">
        <ReactIcon />
      </div>
    </div>
  );
};
