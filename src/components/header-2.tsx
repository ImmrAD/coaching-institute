'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useScroll } from '@/components/use-scroll';
import Image from "next/image";

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(20);

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'Courses', href: '/courses' },
		{ label: 'Results', href: '/results' },
		{ label: 'Faculty', href: '/faculty' },
		{ label: 'Contact', href: '/contact' },
	];

	React.useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<div className="fixed top-0 left-0 w-full z-50">

			{/* Admission Banner */}
			<div className="w-full bg-[#D23D2D] text-white text-sm py-2 flex justify-center items-center gap-3">
				<span className="font-semibold">
					Admissions Open for 8th–10th | JEE | NEET | MHT-CET
				</span>
				<a
					href="/contact"
					className="bg-[#ffc926] text-[#6E433D] px-3 py-1 rounded-md font-semibold hover:scale-105 transition-all duration-300"
				>
					Enroll Now
				</a>
			</div>

			{/* Navbar */}
			<header className="w-full flex justify-center transition-all duration-500">

				<div
					className={cn(
						"flex items-center justify-between w-full transition-all duration-500",
						scrolled
							? "mt-4 max-w-6xl bg-white/90 backdrop-blur-md shadow-xl rounded-full px-8 h-14"
							: "bg-white border-b border-neutral-200 px-6 lg:px-16 h-16"
					)}
				>
					{/* Logo */}
					<div className="flex items-center gap-3">
						<Image
							src="/logo.png"
							alt="Durga & P K Classes"
							width={36}
							height={36}
						/>
						<h1 className="text-lg font-bold text-[#6E433D]">
							Durga & P K Classes
						</h1>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-6">
						{links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-[#6E433D] font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#ffc926]"
							>
								{link.label}
							</a>
						))}

						<Button
							variant="outline"
							className="border-[#D23D2D] text-[#D23D2D] hover:bg-[#D23D2D] hover:text-white transition-all duration-300"
						>
							Login
						</Button>

						<Button className="bg-[#D23D2D] text-white hover:bg-[#ffc926] hover:text-[#6E433D] transition-all duration-300">
							Book Demo
						</Button>
					</div>

					{/* Mobile Toggle */}
					<button
						onClick={() => setOpen(!open)}
						className="md:hidden text-[#D23D2D]"
					>
						{open ? <X size={26} /> : <Menu size={26} />}
					</button>
				</div>
			</header>

			{/* Mobile Menu */}
			<div
				className={cn(
					"fixed top-[112px] left-0 w-full h-[calc(100vh-112px)] z-40 bg-white px-6 py-8 flex flex-col gap-6 transition-transform duration-300 md:hidden",
					open ? "translate-x-0" : "translate-x-full"
				)}
			>					
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						onClick={() => setOpen(false)}
						className="text-xl font-semibold text-[#6E433D] px-4 py-3 rounded-md
						hover:bg-[#ffc926]
						active:bg-[#D23D2D] active:text-white active:scale-95
						transition-all duration-200"
					>
						{link.label}
					</a>
				))}

				<div className="mt-6 flex flex-col gap-4">
					<Button
						variant="outline"
						className="w-full border-2 border-[#D23D2D] text-[#D23D2D]
						active:bg-[#D23D2D] active:text-white active:scale-95
						transition-all duration-200"
					>
						Student Login
					</Button>

					<Button
						className="w-full bg-[#D23D2D] text-white
						active:bg-[#ffc926] active:text-[#6E433D] active:scale-95
						transition-all duration-200"
					>
						Book Free Demo
					</Button>
				</div>
			</div>
		</div>
	);
}
