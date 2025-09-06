import { Component, OnInit, inject, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

type LinkItem = { title: string; description?: string; href?: string; meta?: string };
type Section = { key: string; title: string; icon?: string; items: LinkItem[] };
type Portfolio = {
  site: { title: string; tagline?: string; email?: string; social?: { linkedin?: string; github?: string } };
  hero: { headline: string; subhead?: string; cta?: { label: string; href: string; icon?: string }[] };
  sections: Section[];
};

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `<main class='min-h-screen text-slate-100'><h1 class='p-6 text-2xl font-bold'>SurlesMobile</h1></main>`
})
export class PortfolioComponent implements OnInit {
  private http = inject(HttpClient);
  data: Signal<Portfolio | null> = signal<Portfolio | null>(null);
  async ngOnInit(){
    const res = await this.http.get<Portfolio>(`${environment.apiBase}/portfolio`).toPromise();
    this.data.set(res as Portfolio);
  }
}
