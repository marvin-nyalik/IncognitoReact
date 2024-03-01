import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from "@testing-library/react";
import Books from "../components/Books";

describe('Books Component', () => {
  describe('=> Rendering', () => {
    it('Renders correctly', () => {
        const books = [
            { author: 'Eunniah Mbabazi', title: 'Breaking Down', year: 1968, category: 'Fiction' },
            { author: 'Chinua Achebe', title: 'Things Fall Apart', year: 1975, category: 'Non-fiction' },
            { author: 'Chinua Achebe', title: 'The River Between', year: 1960, category: 'Folklore' },
            { author: 'Mbongeni Ngema', title: 'Themes of Sarafina', year: 1982, category: 'Science Fiction' },
            { author: 'Marvin Nyalik', title: 'Lyrical Labyrinth', year: 2005, category: 'Fairytales' },
        ];

        render(<Books books={books}/>)
        const heading = screen.getByText(/All Books/i);
        expect(heading).toBeTruthy();
    })
  })
})