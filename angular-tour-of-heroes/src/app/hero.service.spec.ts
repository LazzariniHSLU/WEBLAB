import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

fdescribe('HeroService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let messageServiceSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['get']);
    heroService = new HeroService(<any>httpClientSpy, <any>messageServiceSpy);
  });

  it('should get a hero'), () => {
    const expectedHero: any = { id: 1, name: 'A' };
    httpClientSpy.get.and.returnValue(expectedHero);
    heroService.getHero(1).subscribe(heroes => expect(heroes).toEqual(expectedHero, "expected hero"), fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  }
});
