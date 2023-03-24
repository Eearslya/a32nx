import { EventBus, SimVarDefinition, SimVarValueType, SimVarPublisher } from 'msfssdk';
import {
    AdirsSimVarDefinitions,
    AdirsSimVars,
    SwitchingPanelSimVarsDefinitions, SwitchingPanelVSimVars,
} from '../../MsfsAvionicsCommon/SimVarTypes';

export type PFDSimvars = AdirsSimVars & SwitchingPanelVSimVars & {
    coldDark: number;
    elec: number;
    elecFo: number;
    potentiometerCaptain: number;
    potentiometerFo: number;
    pitch: number;
    roll: number;
    magHeadingRaw: number;
    baroCorrectedAltitude: number;
    speed: number;
    noseGearCompressed: boolean;
    leftMainGearCompressed: boolean;
    rightMainGearCompressed: boolean;
    activeLateralMode: number;
    activeVerticalMode: number;
    fmaModeReversion: boolean;
    fmaSpeedProtection: boolean;
    AThrMode: number;
    apVsSelected: number;
    approachCapability: number;
    ap1Active: boolean;
    ap2Active: boolean;
    fmaVerticalArmed: number;
    fmaLateralArmed: number;
    fd1Active: boolean;
    fd2Active: boolean;
    athrStatus: number;
    athrModeMessage: number;
    machPreselVal: number;
    speedPreselVal: number;
    mda: number;
    dh: number;
    attHdgKnob: number;
    airKnob: number;
    vsBaro: number;
    vsInert: number;
    fdYawCommand: number;
    fdBank: number;
    fdPitch: number;
    v1: number;
    vr:number;
    fwcFlightPhase: number;
    fmgcFlightPhase: number;
    hasLoc: boolean;
    hasDme: boolean;
    navIdent: string;
    navFreq: number;
    dme: number;
    navRadialError: number;
    hasGlideslope: boolean;
    glideSlopeError: number;
    markerBeacon: number;
    isAltManaged: boolean;
    targetSpeedManaged: number;
    flapHandleIndex: number;
    transAlt: number;
    transAltAppr: number;
    magTrackRaw: number;
    selectedHeading: number;
    showSelectedHeading: number;
    altConstraint: number;
    trkFpaActive: boolean;
    aoa: number;
    selectedFpa: number;
    ilsCourse: number;
    ilsRMPTuned: boolean;
    metricAltToggle: boolean;
    tla1: number;
    tla2: number;
    landingElevation: number;
    tcasState: number;
    tcasCorrective: boolean;
    tcasRedZoneL: number;
    tcasRedZoneH: number;
    tcasGreenZoneL: number;
    tcasGreenZoneH: number;
    tcasFail: boolean;
    engOneRunning: boolean;
    engTwoRunning: boolean;
    expediteMode: boolean;
    setHoldSpeed: boolean;
    tdReached: boolean;
    trkFpaDeselectedTCAS: boolean;
    tcasRaInhibited: boolean;
    radioAltitude1: number;
    radioAltitude2: number;
    crzAltMode: boolean;
    tcasModeDisarmed: boolean;
    flexTemp: number;
    autoBrakeMode: number;
    autoBrakeActive: boolean;
    autoBrakeDecel: boolean;
    fpaRaw: number;
    daRaw: number;
    latAccRaw: number;
    ls1Button: boolean;
    ls2Button: boolean;
    fcdc1DiscreteWord1Raw: number;
    fcdc2DiscreteWord1Raw: number;
    fcdc1DiscreteWord2Raw: number;
    fcdc2DiscreteWord2Raw: number;
    fcdc1CaptPitchCommandRaw: number;
    fcdc2CaptPitchCommandRaw: number;
    fcdc1FoPitchCommandRaw: number;
    fcdc2FoPitchCommandRaw: number;
    fcdc1CaptRollCommandRaw: number;
    fcdc2CaptRollCommandRaw: number;
    fcdc1FoRollCommandRaw: number;
    fcdc2FoRollCommandRaw: number;
    xtk: number;
    ldevRequestLeft: boolean;
    ldevRequestRight: boolean;
    landingElevation1Raw: number;
    landingElevation2Raw: number;
    fac1Healthy: boolean;
    fac2Healthy: boolean;
    fac1VAlphaProtRaw: number;
    fac2VAlphaProtRaw: number;
    fac1VAlphaMaxRaw: number;
    fac2VAlphaMaxRaw: number;
    fac1VStallWarnRaw: number;
    fac2VStallWarnRaw: number;
    fac1VMaxRaw: number;
    fac2VMaxRaw: number;
    fac1VFeNextRaw: number;
    fac2VFeNextRaw: number;
    fac1VCTrendRaw: number;
    fac2VCTrendRaw: number;
    fac1VManRaw: number;
    fac2VManRaw: number;
    fac1V4Raw: number;
    fac2V4Raw: number;
    fac1V3Raw: number;
    fac2V3Raw: number;
    fac1VLsRaw: number;
    fac2VLsRaw: number;
    fac1EstimatedBetaRaw: number;
    fac2EstimatedBetaRaw: number;
    fac1BetaTargetRaw: number;
    fac2BetaTargetRaw: number;
    trueRefPushbutton: number;
    irMaintWordRaw: number;
    trueHeadingRaw: number;
    trueTrackRaw: number;
    slatPosLeft: number;
    linearDeviationActive: boolean;
    targetAltitude: number;
    verticalProfileLatched: boolean;
    showSpeedMargins: boolean;
    upperSpeedMargin: number;
    lowerSpeedMargin: number;
  }

export enum PFDVars {
    coldDark = 'L:A32NX_COLD_AND_DARK_SPAWN',
    elec = 'L:A32NX_ELEC_AC_ESS_BUS_IS_POWERED',
    elecFo = 'L:A32NX_ELEC_AC_2_BUS_IS_POWERED',
    potentiometerCaptain = 'LIGHT POTENTIOMETER:88',
    potentiometerFo = 'LIGHT POTENTIOMETER:90',
    pitch = 'L:A32NX_ADIRS_IR_1_PITCH',
    roll = 'L:A32NX_ADIRS_IR_1_ROLL',
    magHeadingRaw = 'L:A32NX_ADIRS_IR_1_HEADING',
    baroCorrectedAltitude1 = 'L:A32NX_ADIRS_ADR_1_BARO_CORRECTED_ALTITUDE_1',
    speed = 'L:A32NX_ADIRS_ADR_1_COMPUTED_AIRSPEED',
    noseGearCompressed = 'L:A32NX_LGCIU_1_NOSE_GEAR_COMPRESSED',
    leftMainGearCompressed = 'L:A32NX_LGCIU_1_LEFT_GEAR_COMPRESSED',
    rightMainGearCompressed = 'L:A32NX_LGCIU_1_RIGHT_GEAR_COMPRESSED',
    activeLateralMode = 'L:A32NX_FMA_LATERAL_MODE',
    activeVerticalMode = 'L:A32NX_FMA_VERTICAL_MODE',
    fmaModeReversion = 'L:A32NX_FMA_MODE_REVERSION',
    fmaSpeedProtection = 'L:A32NX_FMA_SPEED_PROTECTION_MODE',
    AThrMode = 'L:A32NX_AUTOTHRUST_MODE',
    apVsSelected = 'L:A32NX_AUTOPILOT_VS_SELECTED',
    approachCapability = 'L:A32NX_ApproachCapability',
    ap1Active = 'L:A32NX_AUTOPILOT_1_ACTIVE',
    ap2Active = 'L:A32NX_AUTOPILOT_2_ACTIVE',
    fmaVerticalArmed = 'L:A32NX_FMA_VERTICAL_ARMED',
    fmaLateralArmed = 'L:A32NX_FMA_LATERAL_ARMED',
    fd1Active = 'AUTOPILOT FLIGHT DIRECTOR ACTIVE:1',
    fd2Active = 'AUTOPILOT FLIGHT DIRECTOR ACTIVE:2',
    athrStatus = 'L:A32NX_AUTOTHRUST_STATUS',
    athrModeMessage = 'L:A32NX_AUTOTHRUST_MODE_MESSAGE',
    machPreselVal = 'L:A32NX_MachPreselVal',
    speedPreselVal = 'L:A32NX_SpeedPreselVal',
    mda = 'L:AIRLINER_MINIMUM_DESCENT_ALTITUDE',
    dh = 'L:AIRLINER_DECISION_HEIGHT',
    attHdgKnob = 'L:A32NX_ATT_HDG_SWITCHING_KNOB',
    airKnob = 'L:A32NX_AIR_DATA_SWITCHING_KNOB',
    vsBaro = 'L:A32NX_ADIRS_ADR_1_BAROMETRIC_VERTICAL_SPEED',
    vsInert = 'L:A32NX_ADIRS_IR_1_VERTICAL_SPEED',
    fdYawCommand = 'L:A32NX_FLIGHT_DIRECTOR_YAW',
    fdBank = 'L:A32NX_FLIGHT_DIRECTOR_BANK',
    fdPitch = 'L:A32NX_FLIGHT_DIRECTOR_PITCH',
    v1 = 'L:AIRLINER_V1_SPEED',
    vr = 'L:AIRLINER_VR_SPEED',
    fwcFlightPhase = 'L:A32NX_FWC_FLIGHT_PHASE',
    fmgcFlightPhase = 'L:A32NX_FMGC_FLIGHT_PHASE',
    hasLoc = 'L:A32NX_RADIO_RECEIVER_LOC_IS_VALID',
    hasDme = 'NAV HAS DME:3',
    navIdent = 'NAV IDENT:3',
    navFreq = 'NAV FREQUENCY:3',
    dme = 'NAV DME:3',
    navRadialError = 'L:A32NX_RADIO_RECEIVER_LOC_DEVIATION',
    hasGlideslope = 'L:A32NX_RADIO_RECEIVER_GS_IS_VALID',
    glideSlopeError = 'L:A32NX_RADIO_RECEIVER_GS_DEVIATION',
    markerBeacon = 'MARKER BEACON STATE',
    isAltManaged = 'L:A32NX_FCU_ALT_MANAGED',
    targetSpeedManaged = 'L:A32NX_SPEEDS_MANAGED_PFD',
    mach = 'L:A32NX_ADIRS_ADR_1_MACH',
    flapHandleIndex = 'L:A32NX_FLAPS_HANDLE_INDEX',
    transAlt = 'L:AIRLINER_TRANS_ALT',
    transAltAppr = 'L:AIRLINER_APPR_TRANS_ALT',
    magTrackRaw = 'L:A32NX_ADIRS_IR_1_TRACK',
    selectedHeading = 'L:A32NX_FCU_HEADING_SELECTED',
    showSelectedHeading = 'L:A320_FCU_SHOW_SELECTED_HEADING',
    altConstraint = 'L:A32NX_FG_ALTITUDE_CONSTRAINT',
    trkFpaActive = 'L:A32NX_TRK_FPA_MODE_ACTIVE',
    aoa = 'INCIDENCE ALPHA',
    selectedFpa = 'L:A32NX_AUTOPILOT_FPA_SELECTED',
    ilsCourse = 'L:A32NX_FM_LS_COURSE',
    ilsRMPTuned = 'L:A32NX_RMP_ILS_TUNED',
    metricAltToggle = 'L:A32NX_METRIC_ALT_TOGGLE',
    tla1='L:A32NX_AUTOTHRUST_TLA:1',
    tla2='L:A32NX_AUTOTHRUST_TLA:2',
    tcasState = 'L:A32NX_TCAS_STATE',
    tcasCorrective = 'L:A32NX_TCAS_RA_CORRECTIVE',
    tcasRedZoneL = 'L:A32NX_TCAS_VSPEED_RED:1',
    tcasRedZoneH = 'L:A32NX_TCAS_VSPEED_RED:2',
    tcasGreenZoneL = 'L:A32NX_TCAS_VSPEED_GREEN:1',
    tcasGreenZoneH = 'L:A32NX_TCAS_VSPEED_GREEN:2',
    tcasFail = 'L:A32NX_TCAS_FAULT',
    engOneRunning = 'GENERAL ENG COMBUSTION:1',
    engTwoRunning = 'GENERAL ENG COMBUSTION:2',
    expediteMode = 'L:A32NX_FMA_EXPEDITE_MODE',
    setHoldSpeed = 'L:A32NX_PFD_MSG_SET_HOLD_SPEED',
    trkFpaDeselectedTCAS = 'L:A32NX_AUTOPILOT_TCAS_MESSAGE_TRK_FPA_DESELECTION',
    tdReached = 'L:A32NX_PFD_MSG_TD_REACHED',
    tcasRaInhibited = 'L:A32NX_AUTOPILOT_TCAS_MESSAGE_RA_INHIBITED',
    radioAltitude1 = 'L:A32NX_RA_1_RADIO_ALTITUDE',
    radioAltitude2 = 'L:A32NX_RA_2_RADIO_ALTITUDE',
    crzAltMode = 'L:A32NX_FMA_CRUISE_ALT_MODE',
    tcasModeDisarmed = 'L:A32NX_AUTOPILOT_TCAS_MESSAGE_DISARM',
    flexTemp = 'L:AIRLINER_TO_FLEX_TEMP',
    autoBrakeMode = 'L:A32NX_AUTOBRAKES_ARMED_MODE',
    autoBrakeActive = 'L:A32NX_AUTOBRAKES_ACTIVE',
    autoBrakeDecel = 'L:A32NX_AUTOBRAKES_DECEL_LIGHT',
    fpaRaw = 'L:A32NX_ADIRS_IR_1_FLIGHT_PATH_ANGLE',
    daRaw = 'L:A32NX_ADIRS_IR_1_DRIFT_ANGLE',
    latAccRaw = 'L:A32NX_ADIRS_IR_1_BODY_LATERAL_ACC',
    ls1Button = 'L:BTN_LS_1_FILTER_ACTIVE',
    ls2Button = 'L:BTN_LS_2_FILTER_ACTIVE',
    fcdc1DiscreteWord1Raw = 'L:A32NX_FCDC_1_DISCRETE_WORD_1',
    fcdc2DiscreteWord1Raw = 'L:A32NX_FCDC_2_DISCRETE_WORD_1',
    fcdc1DiscreteWord2Raw = 'L:A32NX_FCDC_1_DISCRETE_WORD_2',
    fcdc2DiscreteWord2Raw = 'L:A32NX_FCDC_2_DISCRETE_WORD_2',
    fcdc1CaptPitchCommandRaw = 'L:A32NX_FCDC_1_CAPT_PITCH_COMMAND',
    fcdc2CaptPitchCommandRaw = 'L:A32NX_FCDC_2_CAPT_PITCH_COMMAND',
    fcdc1FoPitchCommandRaw = 'L:A32NX_FCDC_1_FO_PITCH_COMMAND',
    fcdc2FoPitchCommandRaw = 'L:A32NX_FCDC_2_FO_PITCH_COMMAND',
    fcdc1CaptRollCommandRaw = 'L:A32NX_FCDC_1_CAPT_ROLL_COMMAND',
    fcdc2CaptRollCommandRaw = 'L:A32NX_FCDC_2_CAPT_ROLL_COMMAND',
    fcdc1FoRollCommandRaw = 'L:A32NX_FCDC_1_FO_ROLL_COMMAND',
    fcdc2FoRollCommandRaw = 'L:A32NX_FCDC_2_FO_ROLL_COMMAND',
    xtk = 'L:A32NX_FG_CROSS_TRACK_ERROR',
    ldevLeft = 'L:A32NX_FMGC_L_LDEV_REQUEST',
    ldevRight = 'L:A32NX_FMGC_R_LDEV_REQUEST',
    landingElevation1Raw = 'L:A32NX_FM1_LANDING_ELEVATION',
    landingElevation2Raw = 'L:A32NX_FM2_LANDING_ELEVATION',
    fac1Healthy = 'L:A32NX_FAC_1_HEALTHY',
    fac2Healthy = 'L:A32NX_FAC_2_HEALTHY',
    fac1VAlphaProtRaw = 'L:A32NX_FAC_1_V_ALPHA_PROT',
    fac2VAlphaProtRaw = 'L:A32NX_FAC_2_V_ALPHA_PROT',
    fac1VAlphaMaxRaw = 'L:A32NX_FAC_1_V_ALPHA_LIM',
    fac2VAlphaMaxRaw = 'L:A32NX_FAC_2_V_ALPHA_LIM',
    fac1VStallWarnRaw = 'L:A32NX_FAC_1_V_STALL_WARN',
    fac2VStallWarnRaw = 'L:A32NX_FAC_2_V_STALL_WARN',
    fac1VMaxRaw = 'L:A32NX_FAC_1_V_MAX',
    fac2VMaxRaw = 'L:A32NX_FAC_2_V_MAX',
    fac1VFeNextRaw = 'L:A32NX_FAC_1_V_FE_NEXT',
    fac2VFeNextRaw = 'L:A32NX_FAC_2_V_FE_NEXT',
    fac1VCTrendRaw = 'L:A32NX_FAC_1_SPEED_TREND',
    fac2VCTrendRaw = 'L:A32NX_FAC_2_SPEED_TREND',
    fac1VManRaw = 'L:A32NX_FAC_1_V_MAN',
    fac2VManRaw = 'L:A32NX_FAC_2_V_MAN',
    fac1V4Raw = 'L:A32NX_FAC_1_V_4',
    fac2V4Raw = 'L:A32NX_FAC_2_V_4',
    fac1V3Raw = 'L:A32NX_FAC_1_V_3',
    fac2V3Raw = 'L:A32NX_FAC_2_V_3',
    fac1VLsRaw = 'L:A32NX_FAC_1_V_LS',
    fac2VLsRaw = 'L:A32NX_FAC_2_V_LS',
    fac1EstimatedBetaRaw = 'L:A32NX_FAC_1_ESTIMATED_SIDESLIP',
    fac2EstimatedBetaRaw = 'L:A32NX_FAC_2_ESTIMATED_SIDESLIP',
    fac1BetaTargetRaw = 'L:A32NX_FAC_1_SIDESLIP_TARGET',
    fac2BetaTargetRaw = 'L:A32NX_FAC_2_SIDESLIP_TARGET',
    trueRefPushbutton = 'L:A32NX_PUSH_TRUE_REF',
    irMaintWordRaw = 'L:A32NX_ADIRS_IR_1_MAINT_WORD',
    trueHeadingRaw = 'L:A32NX_ADIRS_IR_1_TRUE_HEADING',
    trueTrackRaw = 'L:A32NX_ADIRS_IR_1_TRUE_TRACK',
    slatPosLeft = 'L:A32NX_LEFT_SLATS_ANGLE',
    linearDeviationActive = 'L:A32NX_PFD_LINEAR_DEVIATION_ACTIVE',
    targetAltitude = 'L:A32NX_PFD_TARGET_ALTITUDE',
    verticalProfileLatched = 'L:A32NX_PFD_VERTICAL_PROFILE_LATCHED',
    showSpeedMargins = 'L:A32NX_PFD_SHOW_SPEED_MARGINS',
    upperSpeedMargin = 'L:A32NX_PFD_UPPER_SPEED_MARGIN',
    lowerSpeedMargin = 'L:A32NX_PFD_LOWER_SPEED_MARGIN',
  }

/** A publisher to poll and publish nav/com simvars. */
export class PFDSimvarPublisher extends SimVarPublisher<PFDSimvars> {
    private static simvars = new Map<keyof PFDSimvars, SimVarDefinition>([
        ...AdirsSimVarDefinitions,
        ...SwitchingPanelSimVarsDefinitions,
        ['coldDark', { name: PFDVars.coldDark, type: SimVarValueType.Number }],
        ['elec', { name: PFDVars.elec, type: SimVarValueType.Bool }],
        ['elecFo', { name: PFDVars.elecFo, type: SimVarValueType.Bool }],
        ['potentiometerCaptain', { name: PFDVars.potentiometerCaptain, type: SimVarValueType.Number }],
        ['potentiometerFo', { name: PFDVars.potentiometerFo, type: SimVarValueType.Number }],
        ['pitch', { name: PFDVars.pitch, type: SimVarValueType.Number }],
        ['roll', { name: PFDVars.roll, type: SimVarValueType.Number }],
        ['magHeadingRaw', { name: PFDVars.magHeadingRaw, type: SimVarValueType.Number }],
        ['baroCorrectedAltitude', { name: PFDVars.baroCorrectedAltitude1, type: SimVarValueType.Number }],
        ['speed', { name: PFDVars.speed, type: SimVarValueType.Number }],
        ['noseGearCompressed', { name: PFDVars.noseGearCompressed, type: SimVarValueType.Bool }],
        ['leftMainGearCompressed', { name: PFDVars.leftMainGearCompressed, type: SimVarValueType.Bool }],
        ['rightMainGearCompressed', { name: PFDVars.rightMainGearCompressed, type: SimVarValueType.Bool }],
        ['activeLateralMode', { name: PFDVars.activeLateralMode, type: SimVarValueType.Number }],
        ['activeVerticalMode', { name: PFDVars.activeVerticalMode, type: SimVarValueType.Number }],
        ['fmaModeReversion', { name: PFDVars.fmaModeReversion, type: SimVarValueType.Bool }],
        ['fmaSpeedProtection', { name: PFDVars.fmaSpeedProtection, type: SimVarValueType.Bool }],
        ['AThrMode', { name: PFDVars.AThrMode, type: SimVarValueType.Number }],
        ['apVsSelected', { name: PFDVars.apVsSelected, type: SimVarValueType.FPM }],
        ['approachCapability', { name: PFDVars.approachCapability, type: SimVarValueType.Number }],
        ['ap1Active', { name: PFDVars.ap1Active, type: SimVarValueType.Bool }],
        ['ap2Active', { name: PFDVars.ap2Active, type: SimVarValueType.Bool }],
        ['fmaVerticalArmed', { name: PFDVars.fmaVerticalArmed, type: SimVarValueType.Number }],
        ['fmaLateralArmed', { name: PFDVars.fmaLateralArmed, type: SimVarValueType.Number }],
        ['fd1Active', { name: PFDVars.fd1Active, type: SimVarValueType.Bool }],
        ['fd2Active', { name: PFDVars.fd2Active, type: SimVarValueType.Bool }],
        ['athrStatus', { name: PFDVars.athrStatus, type: SimVarValueType.Number }],
        ['athrModeMessage', { name: PFDVars.athrModeMessage, type: SimVarValueType.Number }],
        ['machPreselVal', { name: PFDVars.machPreselVal, type: SimVarValueType.Number }],
        ['speedPreselVal', { name: PFDVars.speedPreselVal, type: SimVarValueType.Knots }],
        ['mda', { name: PFDVars.mda, type: SimVarValueType.Feet }],
        ['dh', { name: PFDVars.dh, type: SimVarValueType.Feet }],
        ['attHdgKnob', { name: PFDVars.attHdgKnob, type: SimVarValueType.Enum }],
        ['airKnob', { name: PFDVars.airKnob, type: SimVarValueType.Enum }],
        ['vsBaro', { name: PFDVars.vsBaro, type: SimVarValueType.Number }],
        ['vsInert', { name: PFDVars.vsInert, type: SimVarValueType.Number }],
        ['fdYawCommand', { name: PFDVars.fdYawCommand, type: SimVarValueType.Number }],
        ['fdBank', { name: PFDVars.fdBank, type: SimVarValueType.Number }],
        ['fdPitch', { name: PFDVars.fdPitch, type: SimVarValueType.Number }],
        ['v1', { name: PFDVars.v1, type: SimVarValueType.Knots }],
        ['vr', { name: PFDVars.vr, type: SimVarValueType.Knots }],
        ['fwcFlightPhase', { name: PFDVars.fwcFlightPhase, type: SimVarValueType.Number }],
        ['fmgcFlightPhase', { name: PFDVars.fmgcFlightPhase, type: SimVarValueType.Enum }],
        ['hasLoc', { name: PFDVars.hasLoc, type: SimVarValueType.Bool }],
        ['hasDme', { name: PFDVars.hasDme, type: SimVarValueType.Bool }],
        ['navIdent', { name: PFDVars.navIdent, type: SimVarValueType.String }],
        ['navFreq', { name: PFDVars.navFreq, type: SimVarValueType.MHz }],
        ['dme', { name: PFDVars.dme, type: SimVarValueType.NM }],
        ['navRadialError', { name: PFDVars.navRadialError, type: SimVarValueType.Degree }],
        ['hasGlideslope', { name: PFDVars.hasGlideslope, type: SimVarValueType.Bool }],
        ['glideSlopeError', { name: PFDVars.glideSlopeError, type: SimVarValueType.Degree }],
        ['markerBeacon', { name: PFDVars.markerBeacon, type: SimVarValueType.Enum }],
        ['isAltManaged', { name: PFDVars.isAltManaged, type: SimVarValueType.Bool }],
        ['targetSpeedManaged', { name: PFDVars.targetSpeedManaged, type: SimVarValueType.Knots }],
        ['mach', { name: PFDVars.mach, type: SimVarValueType.Number }],
        ['flapHandleIndex', { name: PFDVars.flapHandleIndex, type: SimVarValueType.Number }],
        ['transAlt', { name: PFDVars.transAlt, type: SimVarValueType.Number }],
        ['transAltAppr', { name: PFDVars.transAltAppr, type: SimVarValueType.Number }],
        ['magTrackRaw', { name: PFDVars.magTrackRaw, type: SimVarValueType.Number }],
        ['selectedHeading', { name: PFDVars.selectedHeading, type: SimVarValueType.Degree }],
        ['showSelectedHeading', { name: PFDVars.showSelectedHeading, type: SimVarValueType.Number }],
        ['altConstraint', { name: PFDVars.altConstraint, type: SimVarValueType.Feet }],
        ['trkFpaActive', { name: PFDVars.trkFpaActive, type: SimVarValueType.Bool }],
        ['aoa', { name: PFDVars.aoa, type: SimVarValueType.Degree }],
        ['selectedFpa', { name: PFDVars.selectedFpa, type: SimVarValueType.Degree }],
        ['ilsCourse', { name: PFDVars.ilsCourse, type: SimVarValueType.Number }],
        ['ilsRMPTuned', { name: PFDVars.ilsRMPTuned, type: SimVarValueType.Bool }],
        ['metricAltToggle', { name: PFDVars.metricAltToggle, type: SimVarValueType.Bool }],
        ['tla1', { name: PFDVars.tla1, type: SimVarValueType.Number }],
        ['tla2', { name: PFDVars.tla2, type: SimVarValueType.Number }],
        ['tcasState', { name: PFDVars.tcasState, type: SimVarValueType.Enum }],
        ['tcasCorrective', { name: PFDVars.tcasCorrective, type: SimVarValueType.Bool }],
        ['tcasRedZoneL', { name: PFDVars.tcasRedZoneL, type: SimVarValueType.Number }],
        ['tcasRedZoneH', { name: PFDVars.tcasRedZoneH, type: SimVarValueType.Number }],
        ['tcasGreenZoneL', { name: PFDVars.tcasGreenZoneL, type: SimVarValueType.Number }],
        ['tcasGreenZoneH', { name: PFDVars.tcasGreenZoneH, type: SimVarValueType.Number }],
        ['tcasFail', { name: PFDVars.tcasFail, type: SimVarValueType.Bool }],
        ['engOneRunning', { name: PFDVars.engOneRunning, type: SimVarValueType.Bool }],
        ['engTwoRunning', { name: PFDVars.engTwoRunning, type: SimVarValueType.Bool }],
        ['expediteMode', { name: PFDVars.expediteMode, type: SimVarValueType.Bool }],
        ['setHoldSpeed', { name: PFDVars.setHoldSpeed, type: SimVarValueType.Bool }],
        ['tdReached', { name: PFDVars.tdReached, type: SimVarValueType.Bool }],
        ['trkFpaDeselectedTCAS', { name: PFDVars.trkFpaDeselectedTCAS, type: SimVarValueType.Bool }],
        ['tcasRaInhibited', { name: PFDVars.tcasRaInhibited, type: SimVarValueType.Bool }],
        ['radioAltitude1', { name: PFDVars.radioAltitude1, type: SimVarValueType.Number }],
        ['radioAltitude2', { name: PFDVars.radioAltitude2, type: SimVarValueType.Number }],
        ['crzAltMode', { name: PFDVars.crzAltMode, type: SimVarValueType.Bool }],
        ['tcasModeDisarmed', { name: PFDVars.tcasModeDisarmed, type: SimVarValueType.Bool }],
        ['flexTemp', { name: PFDVars.flexTemp, type: SimVarValueType.Number }],
        ['autoBrakeMode', { name: PFDVars.autoBrakeMode, type: SimVarValueType.Number }],
        ['autoBrakeActive', { name: PFDVars.autoBrakeActive, type: SimVarValueType.Bool }],
        ['autoBrakeDecel', { name: PFDVars.autoBrakeDecel, type: SimVarValueType.Bool }],
        ['fpaRaw', { name: PFDVars.fpaRaw, type: SimVarValueType.Number }],
        ['daRaw', { name: PFDVars.daRaw, type: SimVarValueType.Number }],
        ['latAccRaw', { name: PFDVars.latAccRaw, type: SimVarValueType.Number }],
        ['ls1Button', { name: PFDVars.ls1Button, type: SimVarValueType.Bool }],
        ['ls2Button', { name: PFDVars.ls2Button, type: SimVarValueType.Bool }],
        ['fcdc1DiscreteWord1Raw', { name: PFDVars.fcdc1DiscreteWord1Raw, type: SimVarValueType.Number }],
        ['fcdc2DiscreteWord1Raw', { name: PFDVars.fcdc2DiscreteWord1Raw, type: SimVarValueType.Number }],
        ['fcdc1DiscreteWord2Raw', { name: PFDVars.fcdc1DiscreteWord2Raw, type: SimVarValueType.Number }],
        ['fcdc2DiscreteWord2Raw', { name: PFDVars.fcdc2DiscreteWord2Raw, type: SimVarValueType.Number }],
        ['fcdc1CaptPitchCommandRaw', { name: PFDVars.fcdc1CaptPitchCommandRaw, type: SimVarValueType.Number }],
        ['fcdc2CaptPitchCommandRaw', { name: PFDVars.fcdc2CaptPitchCommandRaw, type: SimVarValueType.Number }],
        ['fcdc1FoPitchCommandRaw', { name: PFDVars.fcdc1FoPitchCommandRaw, type: SimVarValueType.Number }],
        ['fcdc2FoPitchCommandRaw', { name: PFDVars.fcdc2FoPitchCommandRaw, type: SimVarValueType.Number }],
        ['fcdc1CaptRollCommandRaw', { name: PFDVars.fcdc1CaptRollCommandRaw, type: SimVarValueType.Number }],
        ['fcdc2CaptRollCommandRaw', { name: PFDVars.fcdc2CaptRollCommandRaw, type: SimVarValueType.Number }],
        ['fcdc1FoRollCommandRaw', { name: PFDVars.fcdc1FoRollCommandRaw, type: SimVarValueType.Number }],
        ['fcdc2FoRollCommandRaw', { name: PFDVars.fcdc2FoRollCommandRaw, type: SimVarValueType.Number }],
        ['xtk', { name: PFDVars.xtk, type: SimVarValueType.NM }],
        ['ldevRequestLeft', { name: PFDVars.ldevLeft, type: SimVarValueType.Bool }],
        ['ldevRequestRight', { name: PFDVars.ldevRight, type: SimVarValueType.Bool }],
        ['landingElevation1Raw', { name: PFDVars.landingElevation1Raw, type: SimVarValueType.Number }],
        ['landingElevation2Raw', { name: PFDVars.landingElevation2Raw, type: SimVarValueType.Number }],
        ['fac1Healthy', { name: PFDVars.fac1Healthy, type: SimVarValueType.Bool }],
        ['fac2Healthy', { name: PFDVars.fac2Healthy, type: SimVarValueType.Bool }],
        ['fac1VAlphaProtRaw', { name: PFDVars.fac1VAlphaProtRaw, type: SimVarValueType.Number }],
        ['fac2VAlphaProtRaw', { name: PFDVars.fac2VAlphaProtRaw, type: SimVarValueType.Number }],
        ['fac1VAlphaMaxRaw', { name: PFDVars.fac1VAlphaMaxRaw, type: SimVarValueType.Number }],
        ['fac2VAlphaMaxRaw', { name: PFDVars.fac2VAlphaMaxRaw, type: SimVarValueType.Number }],
        ['fac1VStallWarnRaw', { name: PFDVars.fac1VStallWarnRaw, type: SimVarValueType.Number }],
        ['fac2VStallWarnRaw', { name: PFDVars.fac2VStallWarnRaw, type: SimVarValueType.Number }],
        ['fac1VMaxRaw', { name: PFDVars.fac1VMaxRaw, type: SimVarValueType.Number }],
        ['fac2VMaxRaw', { name: PFDVars.fac2VMaxRaw, type: SimVarValueType.Number }],
        ['fac1VFeNextRaw', { name: PFDVars.fac1VFeNextRaw, type: SimVarValueType.Number }],
        ['fac2VFeNextRaw', { name: PFDVars.fac2VFeNextRaw, type: SimVarValueType.Number }],
        ['fac1VCTrendRaw', { name: PFDVars.fac1VCTrendRaw, type: SimVarValueType.Number }],
        ['fac2VCTrendRaw', { name: PFDVars.fac2VCTrendRaw, type: SimVarValueType.Number }],
        ['fac1VManRaw', { name: PFDVars.fac1VManRaw, type: SimVarValueType.Number }],
        ['fac2VManRaw', { name: PFDVars.fac2VManRaw, type: SimVarValueType.Number }],
        ['fac1V4Raw', { name: PFDVars.fac1V4Raw, type: SimVarValueType.Number }],
        ['fac2V4Raw', { name: PFDVars.fac2V4Raw, type: SimVarValueType.Number }],
        ['fac1V3Raw', { name: PFDVars.fac1V3Raw, type: SimVarValueType.Number }],
        ['fac2V3Raw', { name: PFDVars.fac2V3Raw, type: SimVarValueType.Number }],
        ['fac1VLsRaw', { name: PFDVars.fac1VLsRaw, type: SimVarValueType.Number }],
        ['fac2VLsRaw', { name: PFDVars.fac2VLsRaw, type: SimVarValueType.Number }],
        ['fac1EstimatedBetaRaw', { name: PFDVars.fac1EstimatedBetaRaw, type: SimVarValueType.Number }],
        ['fac2EstimatedBetaRaw', { name: PFDVars.fac2EstimatedBetaRaw, type: SimVarValueType.Number }],
        ['fac1BetaTargetRaw', { name: PFDVars.fac1BetaTargetRaw, type: SimVarValueType.Number }],
        ['fac2BetaTargetRaw', { name: PFDVars.fac2BetaTargetRaw, type: SimVarValueType.Number }],
        ['trueRefPushbutton', { name: PFDVars.trueRefPushbutton, type: SimVarValueType.Bool }],
        ['irMaintWordRaw', { name: PFDVars.irMaintWordRaw, type: SimVarValueType.Number }],
        ['trueHeadingRaw', { name: PFDVars.trueHeadingRaw, type: SimVarValueType.Number }],
        ['trueTrackRaw', { name: PFDVars.trueTrackRaw, type: SimVarValueType.Number }],
        ['slatPosLeft', { name: PFDVars.slatPosLeft, type: SimVarValueType.Number }],
        ['linearDeviationActive', { name: PFDVars.linearDeviationActive, type: SimVarValueType.Bool }],
        ['targetAltitude', { name: PFDVars.targetAltitude, type: SimVarValueType.Feet }],
        ['verticalProfileLatched', { name: PFDVars.verticalProfileLatched, type: SimVarValueType.Bool }],
        ['showSpeedMargins', { name: PFDVars.showSpeedMargins, type: SimVarValueType.Bool }],
        ['upperSpeedMargin', { name: PFDVars.upperSpeedMargin, type: SimVarValueType.Knots }],
        ['lowerSpeedMargin', { name: PFDVars.lowerSpeedMargin, type: SimVarValueType.Knots }],
    ])

    public constructor(bus: EventBus) {
        super(PFDSimvarPublisher.simvars, bus);
    }
}
