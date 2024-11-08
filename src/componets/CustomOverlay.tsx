
import "../styles/backgrounds.css"
import "../styles//overlay.css"
interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CustomOverlay: React.FC<OverlayProps> = ({ isVisible, onClose }) => {
  return (
    <div className={`overlay ${isVisible ? 'visible' : 'hidden'}`}>
      <button className="close-button" onClick={onClose}>X</button>
      <h1>Hello World</h1>
    </div>
  );
};