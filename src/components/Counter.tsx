"use client";

import { useInView, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
	from?: number;
	to: number;
	duration?: number;
}

export default function Counter({ from = 0, to, duration = 2 }: CounterProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const motionValue = useMotionValue(from);
	const springValue = useSpring(motionValue, { duration: duration * 1000 });

	const [display, setDisplay] = useState(from);

	useEffect(() => {
		if (isInView) {
			motionValue.set(to);
		}
	}, [isInView, motionValue, to]);

	useMotionValueEvent(springValue, "change", (latest) => {
		setDisplay(Math.floor(latest));
	});

	return <span ref={ref}>{display}</span>;
}
