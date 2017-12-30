import {Component, OnInit} from '@angular/core';
import {CompleterService, CompleterData, CompleterItem} from 'ng2-completer';
import {CommonDataService} from '../../shared/services/common-data.service';
import {SharedDataService} from '../../shared/services/shared-data.service';
import {UniversalOrderModel, UniversalSearchOrderModel} from '../../shared/models/adminModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-universalorders',
  templateUrl: './admin-universalorders.component.html',
  styleUrls: ['./admin-universalorders.component.css']
})
export class AdminUniversalordersComponent implements OnInit {
  private uniOrderId: string;
  private uniOdrSts: string;
  public uniOdrDtaService: CompleterData;
  public uniOdrStatusSrv: CompleterData;

  public uniOdrData: UniversalOrderModel = <UniversalOrderModel>{}; // all the form data from admin model

  public uniSrchRecords: Array<any> = new Array<any>();
  public universalIds: Array<any> = new Array<any>();

  public universalOrderStatusData: Array<any> = new Array<any>();
  constructor(private router: Router, private _commondataService: CommonDataService, private _completerSrv: CompleterService,
    private _sharedDtaService: SharedDataService) {
    // console.log('in the constructor', this._commondataService.getUniversalId(), this._commondataService.uniOrderStatus());
   // this._commondataService.getUniversalId().subscribe((universalIds) => {
   // console.log('in the subscribe', universalIds, universalIds['UniversalOrderVM']);
     // this.universalIds = universalIds['UniversalOrderVM'];
   // });
//    this._commondataService.uniOrderStatus().subscribe((universalStatus) => {
//    console.log('in the subscribe universalStatus', universalStatus['UserDefinedStatus']);
//      this.universalOrderStatusData = universalStatus['UserDefinedStatus'];
//    });
    this.uniOdrDtaService = _completerSrv.local(this._commondataService.getUniversalId(), 'UniversalOrderId', 'UniversalOrderId');
    this.uniOdrStatusSrv = _completerSrv.local(this._commondataService.uniOrderStatus(), 'description', 'description');


    console.log('universaldata', this.uniOdrDtaService, this.uniOdrStatusSrv);
  }

  ngOnInit() {
    // this._commondataService.getEmployees();
  }

  searchUniversalDetails(event) {
//    console.log('event----', this.uniOdrData, event);
//    this._commondataService.getUniSearchData(this.uniOdrData).subscribe((searchUniversalDetails) => {
//    console.log('in the subscribe universalStatus', searchUniversalDetails);
//      this.route.navigate(['../../edit_uo']);
//    });
    this.goToEditUrl();
  }

  onSelectCaptureFieldValue(selected: CompleterItem) {

    if (selected) {
      this.uniOrderId = selected.originalObject.universalOrderId;
      this.uniOdrSts = selected.originalObject.code;
      console.log('universaluid', this.uniOrderId, this.uniOdrSts);
    }
  }
  public goToEditUrl(): void {
    const uniOrderSrchModel: UniversalSearchOrderModel = new UniversalSearchOrderModel(this.uniOdrData);
   // uniOrderSrchModel.universalOrderID = this.uniOrderId;
    console.log('uniOrderSrchModel-----', uniOrderSrchModel);
    this._commondataService.getUniSearchData(uniOrderSrchModel).subscribe(data => {
      this.uniSrchRecords = data.searchResult;
      if (data.searchResultCount > 0) {
      console.log('this.uniSrchRecords---', this.uniSrchRecords);
      this.router.navigate(['../../edit_uo']);
        this._sharedDtaService.setSeacrhResObj(this.uniSrchRecords);
      }
    });
  }

}
