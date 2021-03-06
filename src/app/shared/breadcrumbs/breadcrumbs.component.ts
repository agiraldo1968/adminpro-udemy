import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string 

  constructor(private router: Router, private title: Title, private meta: Meta)
  {
      this.infoRuta()
          .subscribe( info => {
              console.log(info)
              this.titulo = info.Titulo
              this.title.setTitle( this.titulo )

              const metaTag: MetaDefinition = {
                  name: 'description',
                  content: this.titulo
              }
      })
  }

  ngOnInit() {
  }

  infoRuta()
  {
      return this.router.events.pipe(
          filter( evento => evento instanceof ActivationEnd),
          filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
          map( (evento: ActivationEnd ) => evento.snapshot.data )
        )
  }
}
