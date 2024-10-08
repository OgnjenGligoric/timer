import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions } from "@tsparticles/engine";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(loadSlim).then(() => setInit(true));
    }, []);

    const options: ISourceOptions = useMemo(() => ({
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
            },
            modes: {
                repulse: { distance: 200, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#26273d" },
            links: { color: "#26273d", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { direction: "none", enable: true, outModes: { default: "out" }, speed: 6 },
            number: { density: { enable: true }, value: 200 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    }), []);

    return init ? (
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
            background: 'linear-gradient(to bottom, #a1a3c9, #26273d)'
        }}>
            <Particles id="tsparticles" options={options} />
        </div>
    ) : null;
};

export default ParticleBackground;
