import React, { FC } from "react";
import styles from "./Button.module.css";

interface FlipCardProps {
}

const FlipCard: FC<FlipCardProps> = () => {
  return (
    <>
    {/* <div className="portfolio__card">
    <div className="portfolio__inner">
      <div className="portfolio__front">
        <div className="portfolio__top" [ngClass]="imageDynamicClasses">
          <h4 class="portfolio__h4">{{cardTitle}}</h4>
        </div>
        <div className="portfolio__center">
          <div className="portfolio__center-content">
            <h5 className="portfolio__h5">Features</h5>
            <ng-container *ngFor="let cardFeature of cardFeatures">
              <div class="portfolio__feature"> <app-font-awesome-icon fontAwesomeType="fa-solid fa-check"
                  [shouldScaleWhenHovered]="false" [iconColor]="iconColorTertiary"></app-font-awesome-icon>
                <p>{{cardFeature}}</p>
              </div>
            </ng-container>
          </div>
        </div>
        <div className="portfolio__bottom">
          <h6 className="portfolio__h6">Flip</h6>
          <app-font-awesome-icon fontAwesomeType="fa-solid fa-arrow-right" [shouldScaleWhenHovered]="false"
            [iconColor]="iconColorTertiary"></app-font-awesome-icon>
        </div>
      </div>
      <div className="portfolio__back">
        <div className="portfolio__buttons">
          <app-small-button [title]="'View project'" *ngIf="cardLinks.view"
            (buttonClick)="openLink(cardLinks.view)"></app-small-button>
          <app-small-button [title]="'Get code'" *ngIf="cardLinks.code"
            (buttonClick)="openLink(cardLinks.code)"></app-small-button>
        </div>
      </div>
    </div>
  </div> */}
  </>
  );
};

export default FlipCard;
