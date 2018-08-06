package com.axonactive.workshop.backend;

import java.util.Iterator;

import javax.faces.component.UIComponent;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;

import org.apache.commons.lang3.StringUtils;

public class UIComponentUtils {
	
	private UIComponentUtils () {};

	public static String getFullId(String componentId, FacesContext context) {
		if (context != null) {
			UIViewRoot root = context.getViewRoot();
			UIComponent c = findComponentOnRootView(root, componentId);
			return c.getClientId(context);
		}
		return StringUtils.EMPTY;
	}
	
	public static UIComponent findComponentOnRootView(UIComponent c, String id) {
		if (id.equals(c.getId())) {
			return c;
		}
		Iterator<UIComponent> kids = c.getFacetsAndChildren();
		while (kids.hasNext()) {
			UIComponent found = findComponentOnRootView(kids.next(), id);
			if (found != null) {
				return found;
			}
		}
		return null;
	}
}
