import { useEffect } from 'react';

export default function CollapsibleSection() {
    useEffect(() => {
        const buttons = document.querySelectorAll('.collapse-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                const section = document.querySelector(`.section-content[data-category="${category}"]`);
                const text = button.querySelector('.collapse-text');
                const icon = button.querySelector('svg');
                
                if (section?.classList.contains('collapsed')) {
                    section.classList.remove('collapsed');
                    if (text) text.textContent = 'Collapse';
                    icon?.classList.remove('rotate-180');
                } else {
                    section?.classList.add('collapsed');
                    if (text) text.textContent = 'Expand';
                    icon?.classList.add('rotate-180');
                }
            });
        });
    }, []);

    return null;
}
