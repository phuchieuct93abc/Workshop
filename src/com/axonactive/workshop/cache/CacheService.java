package com.axonactive.workshop.cache;

import ch.ivyteam.ivy.data.cache.IDataCacheEntry;
import ch.ivyteam.ivy.environment.Ivy;

public class CacheService {

	protected CacheService() {}

	public static Object getDataFromCache(String identifier) {
		IDataCacheEntry entry =
			Ivy.datacache().getAppCache()
				.getEntry(Constant.WORK_SHOP_CACHE_GROUP_IDENTIFIER, identifier);
		if (null != entry) {
			return entry.getValue();
		}
		return null;
	}

	public static void saveDataToCache(Object data, String identifier) {
		Ivy.datacache().getAppCache()
			.setEntry(Constant.WORK_SHOP_CACHE_GROUP_IDENTIFIER, identifier, data)
			.setLifetime(Constant.DEFAULT_CACHE_LIFE_TIME);
	}
	
	public void invalidateCacheEntry(String cacheIdentifier) {
		IDataCacheEntry cacheEntry = Ivy.datacache().getAppCache().getEntry(Constant.WORK_SHOP_CACHE_GROUP_IDENTIFIER, cacheIdentifier);
		if(cacheEntry != null) {
			cacheEntry.invalidate();
		}
	}
}