import React from "react";
import { Group, Container } from "ui";
import { HeaderParent, IconButton, Logo, LogoText } from "./header.style";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link"

function Header() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <HeaderParent>
      <Container>
        <Group position="apart">
          <Link href={'/'} passHref>
          <Group >
            <Logo src="/yin-yang.png" width={22} height={22} alt="logo" />
            <LogoText>SATORI</LogoText>
          </Group>
          </Link>
          <IconButton onClick={handleThemeChange}>
            {theme == "light" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Group>
      </Container>
    </HeaderParent>
  );
}

export default Header;
