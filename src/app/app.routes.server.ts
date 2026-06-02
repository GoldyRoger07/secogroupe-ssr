import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: 'about-us', renderMode: RenderMode.Prerender },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
