import { Affix, Button, rem, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowDown } from "@tabler/icons-react";

export default function Affixes() {
  const [scroll, scrollTo] = useWindowScroll();

  return <Affix position={{ bottom: 20, left: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y == 0}>
        {(transitionStyles) => (
          <Button
          leftSection={<IconArrowDown style={{ width: rem(16), height: rem(16) }} />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 600 })}
          >
            About
          </Button>
        )}
      </Transition>
    </Affix>;
}