import { Container, ExpDetails, ExpItem } from "./styles";

export function Experience() {
  return (
    <Container>

      <div>
        <ExpItem>
          <picture></picture>
          <h3>2023-2024</h3>
        </ExpItem>

        <ExpItem>
          <picture></picture>
          <h3>2024-</h3>
        </ExpItem>
      </div>

      <div>
        <ExpDetails>
          <div>
            <strong>Emprese de Tal - <span>Lugar X</span></strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue sem. Ut id urna luctus tellus lacinia dictum et a turpis.</p>
          </div>
        </ExpDetails>

        <h2>2024</h2>
      </div>
    </Container>
  )
}
