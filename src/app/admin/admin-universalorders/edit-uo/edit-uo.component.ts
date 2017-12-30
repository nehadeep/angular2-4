


// public goToeditUOnewView(): void {
// this.route.navigate(['../../edit_uo_new']);
// }
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { SharedDataService } from '../../../shared/services/shared-data.service';
import { IUniversalSearchResult , IOutlet, IEvent, IOutlets, ISite} from '../../../shared/models/models';
import { CommonDataService } from '../../../shared/services/common-data.service';

import { ComponentBase } from '../../../shared/component/component-base';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    selector: 'app-edit-uo',
    templateUrl: './edit-UO.component.html',
    styleUrls: ['./edit-UO.component.css'],

})
export class EditUoComponent extends ComponentBase implements OnInit {

    public gridSearchData: any;
    public managersList: any;
    public orderStatusDesc: any;
    public afs_sys: any;
    public editUoModelData: IUniversalSearchResult = <IUniversalSearchResult>{};
    public editUniversalorderIDDataService: CompleterData;
    public editWebDataService: CompleterData;
    public editOrderStatusDataService: CompleterData;
    public editAfsDataService: CompleterData;
    public getManagersNameDataService: CompleterData;
    public getWebsRegionService: CompleterData;
    public getOrderStatusDataService: CompleterData;
    public getAFS_System: CompleterData;
    public outlet: IOutlet = <IOutlet>{};


    constructor(private router: Router, private _commondataService: CommonDataService, private _completerSrv: CompleterService,
       private _sharedDtaService: SharedDataService) {
        super();
        console.log(this._sharedDtaService.getSeacrhResObj(), 'loaddd');


        this.getManagersNameDataService = this._completerSrv.local(this._commondataService.getManagerName(), 'managerName', 'managerName');
      //   this.getWebsRegionService = this._completerSrv.local(this._commondataService.getWebsRegion(),
     //  'websRegionCode', 'websRegionCode');
        this.getOrderStatusDataService = this._completerSrv.local(this._commondataService.uniOrderStatus(), 'description', 'description');
        // this.getAFS_System = this._completerSrv.local(this._commondataService.getYesNo(), 'code', 'description');
        console.log(this.getManagersNameDataService['_data'], '37777', this.getAFS_System);
    }


    ngOnInit() {
      //  setTimeout(() => {
            this.gridSearchData = this._sharedDtaService.getSeacrhResObj();
                      console.log('editnow', this.gridSearchData, this.getOrderStatusDataService);
            this.editUoModelData = this.gridSearchData[0];
            console.log('this.editUoModelData', this.editUoModelData);
      // });
        this._commondataService.getManagerName().subscribe((result) => {
            console.log('result', result);
            this.managersList = result;
            this.getDropdownDownValues();
        });

        this._commondataService.uniOrderStatus().subscribe((result) => {
            this.orderStatusDesc = result;
          console.log('orderstatus', this.orderStatusDesc);
            this.getDropdownDownValues();
        });

    }


    private getDropdownDownValues() {
   //   let dropdowns: IUniversalSearchResult = new IUniversalSearchResult{};

        const statusCode = this.orderStatusDesc.find(r => {
            return r.Code === this.editUoModelData.univ_Ord_Stat;
        });
      if (statusCode) {
            this.editUoModelData['odr_stat'] = statusCode.Description;
        }

       const mngrId = this.managersList.find(r => {
            return r.managerId === this.editUoModelData.mgr_Id;
        });

        if (mngrId) {
            this.editUoModelData['manager'] = mngrId.managerName;
        }
    }

    private goToeditUOnewView(): void {
        this.router.navigate(['./edit_UO_new']);
    }
    public selectedRow(event, slctdRow) {
        console.log(this.editUoModelData, slctdRow);
        this.editUoModelData = slctdRow;
      //  this.getDropdownDownManagerValues();
        this.getDropdownDownValues();
       // this.getDropdownDownAFSValues();
    }

    private updateEditUo(): void {
       // this.editUoModelData.mgr_Id = this.editUoModelData.mgr_Id;
      // delete this.editUoModelData['manager'];

      this.editUoModelData.mgr_Id = this.getValueByCode(
         this.getManagersNameDataService['_data'], this.editUoModelData.mgr_Id, 'managerName', 'managerId');
         console.log('editmodaeldata', this.editUoModelData);
    }
}
//    public openCloseEvtModal(eventType: string): void { //modal function to opem event search modal
//        console.log('eventType--', eventType);
//        this.eventSearchDialogRef = this._dialog.open(EventSearchModalComponent, {
//            hasBackdrop: true,
//            width: '1000px'
//        });

//        this.eventSearchDialogRef.componentInstance['eventName'] = eventType;//'curentEvent';// planned
//        if (eventType == 'plannedEvent') {
//            this.eventSearchDialogRef.afterClosed().subscribe((data) => {
//                console.log('at modl planned callback', data, 'length----->', Object.keys(data).length);
//                if (data != undefined && Object.keys(data).length > 0) {
//                    //this.universalOrderData.plannedEventID = data.evnt_Id;
//                }
//                else {
//                    console.log('No data entered');
//                }
//            })
//        }
//        else if (eventType == 'currentEvent') {
//            this.eventSearchDialogRef.afterClosed().subscribe((data) => {
//                console.log('at modl current callback', data);
//                if (data != undefined && Object.keys(data).length > 0) {
//                  //  this.universalOrderData.currentEventID = data.evnt_Id;
//                }
//                else {
//                    console.log('No data entered');
//                }
//            })
//        }
//    }


