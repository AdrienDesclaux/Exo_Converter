import './ResultConversion.scss';

type Currency = {
  description: string;
  code: string;
  rate: number;
};

type ResultConversionProps = {
  selectedCurrency: Currency | null;
};

function ResultConversion({ selectedCurrency }: ResultConversionProps) {
  if (!selectedCurrency) {
    // Gérez le cas où aucune devise n'est sélectionnée
    return (
      <div className="result-conversion">
        <p className="result-conversion__value">Sélectionnez une devise</p>
      </div>
    );
  }

  return (
    <div className="result-conversion">
      <p className="result-conversion__value">{selectedCurrency.rate}</p>
      <p className="result-conversion__currency">
        {selectedCurrency.description}
      </p>
    </div>
  );
}

export default ResultConversion;
