/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as nls from 'vscode-nls';
const localize = nls.loadMessageBundle();

// Deploy Azure SQL DB wizard constants
export const WizardTitle = localize('deployAzureSQLDB.NewSQLDBTitle', "Deploy Azure SQL DB");
export const WizardDoneButtonLabel = localize('deployAzureSQLDB.ScriptToNotebook', "Script to Notebook");
export const MissingRequiredInformationErrorMessage = localize('deployCluster.MissingRequiredInfoError', "Please fill out the required fields marked with red asterisks.");

// Azure settings page constants
export const AzureSettingsPageTitle = localize('deployAzureSQLDB.AzureSettingsPageTitle', "Azure settings");
export const AzureSettingsPageDescription = localize('deployAzureSQLDB.AzureSettingsPageDescription', "");
export const AzureAccountDropdownLabel = localize('deployAzureSQLDB.AzureAccountDropdownLabel', "Azure Account");
export const AzureAccountSubscriptionDropdownLabel = localize('deployAzureSQLDB.AzureSubscriptionDropdownLabel', "Subscription");
export const AzureAccountResourceGroupDropdownLabel = localize('deployAzureSQLDB.ResourceGroup', "Resource Group");
export const AzureAccountRegionDropdownLabel = localize('deployAzureSQLDB.AzureRegionDropdownLabel', "Region");

// VM settings page constants
export const VmSettingsPageTitle = localize('deployeAzureSQLDB.VmSettingsPageTitle', "Virtual machine settings");
export const VmSettingsPageDescription = localize('deployAzureSQLDB.VmSettingsPageDescription', "");
export const VmNameTextBoxLabel = localize('deployAzureSQLDB.VmNameTextBoxLabel', "Virtual machine name");
export const VmAdminUsernameTextBoxLabel = localize('deployAzureSQLDB.VmAdminUsernameTextBoxLabel', "Administrator account username");
export const VmAdminPasswordTextBoxLabel = localize('deployAzureSQLDB.VmAdminPasswordTextBoxLabel', "Administrator account password");
export const VmAdminConfirmPasswordTextBoxLabel = localize('deployAzureSQLDB.VmAdminConfirmPasswordTextBoxLabel', "Confirm password");
export const VmImageDropdownLabel = localize('deployAzureSQLDB.VmImageDropdownLabel', "Image");
export const VmSkuDropdownLabel = localize('deployAzureSQLDB.VmSkuDropdownLabel', "Image SKU");
export const VmVersionDropdownLabel = localize('deployAzureSQLDB.VmImageVersionDropdownLabel', "Image Version");
export const VmSizeDropdownLabel = localize('deployAzureSQLDB.VmSizeDropdownLabel', "Size");

// Network settings page constants
export const NetworkSettingsPageTitle = localize('deployAzureSQLDB.NetworkSettingsPageTitle', "Networking");
export const NetworkSettingsPageDescription = localize('deployAzureSQLDB.NetworkSettingsPageDescription', "Configure network settings");
export const VirtualNetworkDropdownLabel = localize('deployAzureSQLDB.VirtualNetworkDropdownLabel', "Virtual Network");
export const PublicIPDropdownLabel = localize('deployAzureSQLDB.PublicIPDropdownLabel', "Public IP");
export const RDPAllowCheckboxLabel = localize('deployAzureSQLDB.VmRDPAllowCheckboxLabel', "Enable RDP(3389) inbound Port");

// SQL Server settings page constants
export const SqlServerSettingsPageTitle = localize('deployAzureSQLDB', "SQL Servers settings");
