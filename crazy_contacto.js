function OcultarVisualizarFolder(executionContext) {
    const formContext = executionContext.getFormContext();

    // Verifica que el tab exista
    const tab = formContext.ui.tabs.get("DETAILS_TAB");
    if (tab) {
        // Verifica que la sección exista
        const section = tab.sections.get("PERSONAL INFORMATION");
        if (section) {
            section.setVisible(false);
        } else {
            console.error("La sección 'PERSONAL INFORMATION' no existe.");
        }
    } else {
        console.error("El tab 'DETAILS_TAB' no existe.");
    }

    // Verifica que el atributo 'crazy_tipodocumento' exista
    const tipoDocumentoAttr = formContext.getAttribute("crazy_tipodocumento");
    if (tipoDocumentoAttr) {
        const tipoDocumento = tipoDocumentoAttr.getText();
        console.log("Tipo de Documento: " + tipoDocumento);

        // Verifica que el control 'amr_nif' exista
        const controlNif = formContext.getControl("amr_nif");
        if (controlNif) {
            controlNif.setLabel(tipoDocumento);
        } else {
            console.error("El control 'amr_nif' no existe.");
        }
    } else {
        console.error("El atributo 'crazy_tipodocumento' no existe.");
    }
}