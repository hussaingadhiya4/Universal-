import { useEffect, useRef, useState } from 'react';

export default function TransparentLogo({ src, alt, style, containerStyle }) {
  const canvasRef = useRef(null);
  const [processed, setProcessed] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const brightness = (r + g + b) / 3;

        if (brightness > 240) {
          data[i + 3] = 0;
        } else if (brightness > 200) {
          data[i + 3] = Math.floor((240 - brightness) / 40 * 255);
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessed(true);
    };

    img.onerror = () => {
      setProcessed(true);
    };

    img.src = src;
  }, [src]);

  return (
    <div style={containerStyle}>
      <canvas
        ref={canvasRef}
        style={{
          ...style,
          display: processed ? 'block' : 'none'
        }}
      />
      {!processed && (
        <div style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          Loading...
        </div>
      )}
    </div>
  );
}
